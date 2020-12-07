import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
import '../Form.css';

import Aux from '../../../hox/Auxiliary/Auxiliary';
import MessageBox from '../../UI/MessageBox/MessageBox';

class VolunteerForm extends Component {
    state={
        messageBox: false,
        volunteer: [],
        wannaBeVolunteer: {},
        sameOrNot:true
    };

    getVolunteer = () => {
        axios.get('/api/get-volunteer')
            .then((res)=>{
                this.setState({volunteer: res.data});
            })
            .catch((error)=>{
                console.log('error: ', error);                
            });
    }

    componentDidMount(){
        this.getVolunteer();
    }

    handleBeVolunteer=(event)=>{
        event.preventDefault();
 
        this.setState({wannaBeVolunteer:{
            name: $('.volunteer-name').val(),
            surname: $('.volunteer-surname').val(),
            number: $('.volunteer-number').val(),
            email: $('.volunteer-email').val(),
            status: 1
        }});
    
        let checkExistence=()=>{
            return (this.state.volunteer.map((volunteerData)=>{
                if(volunteerData.email===this.state.wannaBeVolunteer.email){
                    this.state.sameOrNot=false;
                }
            }));
        }

        checkExistence();
        if(event.target.checkValidity() && this.state.sameOrNot){
            axios({
                url: '/api/add-volunteer',
                method: 'POST',
                data: this.state.wannaBeVolunteer
              })
            .then(()=>{
                this.setState({messageBox: true});
                this.getVolunteer();
            })
            .catch(()=>{
            });
        }
        else if (!event.target.checkValidity()){
            alert('Hər hansı bir məlumat düzgün daxil edilməyib!');
            this.setState({sameOrNot:true});
        }
        else if (!this.state.sameOrNot){
            alert('Siz artıq qeydiyyatdan keçmisiz!');
            this.setState({sameOrNot:true});
        }
        else{
            alert('bay bayyy');
        }
    }

    render(){
        return(
            <fieldset className="volunteer-container form-container" >
                <legend>Hekayəmizin bir parçası ol!</legend>
                <FontAwesomeIcon icon={faTimesCircle} className="volunteer-close close-form" onClick={this.props.hideVolunteer} />
                <form >
                    <label>Ad</label>
                    <input type="text" className="volunteer-name" minLength="3" onFocus required/>
                    <label>Soyad</label>
                    <input type="text" className="volunteer-surname" minLength="5" required/>
                    <label>Əlaqə nömrəsi</label>
                    <input type="tel" className="volunteer-number" pattern="[0-9]{10}" placeholder="0501112233" required/>
                    <label>E-mail ünvanı</label>
                    <input type="email" className="volunteer-email" required/>
                    <button type="submit" className="just-be" onClick={this.handleBeVolunteer}>Könüllü Ol</button>
                </form>
                {this.state.messageBox ?  <MessageBox message='Aramıza xoş gəldin!' /> : null}
            </fieldset>
        );
    }
}

export default VolunteerForm;