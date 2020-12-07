import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
import SignIn from './SignIn';
import LogIn from './LogIn';
import './PlayForm.css';
import '../Form.css';

// import xLogo from '../../assets/img/newsImg/x-aq.png';

class PlayForm extends Component {

    state={
        goLogIn: true,
        goSignIn: false
    }

    handleLogIn= () => {
        this.setState({
            goSignIn: false,
            goLogIn: true
        })
    };
    
    handleSignIn = () => {
        this.setState({
            goLogIn:false,
            goSignIn: true
        });
    };

    render(){
        return(
            <fieldset className="sign-in-container form-container" >
                <legend>İntellektual oyunlar üçün hesabına daxil ol</legend>
                <FontAwesomeIcon icon={faTimesCircle} className="sign-in-close close-form" onClick={this.props.hidePlay} />
                {this.state.goLogIn ? <LogIn signIn={this.handleSignIn} /> : null}
                {this.state.goSignIn ? <SignIn logIn={this.handleLogIn} /> : null}
            </fieldset>
        );
    }
}

export default PlayForm;