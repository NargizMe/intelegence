import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
import './PlayForm.css';

// import xLogo from '../../assets/img/newsImg/x-aq.png';

class SignIn extends Component {

    handleShowPs=(e)=>{
        if ($('.sign-in-password').attr("type") == "password") {
            $('.sign-in-password').attr("type", "text");
        } else {
            $('.sign-in-password').attr("type", "password");
        }
    }

    render(){
        return(
            <form className="sign-in-contex" > 
                <input type="text" className="sign-in-name" minLength="6" placeholder='Ad və Soyad' required/> 
                <div className='gender'> 
                    <label htmlFor="man">Kişi</label> 
                    <input type="radio" id="man" name="human" value="man" checked/> 
                    <label htmlFor="woman">Qadın</label> 
                    <input type="radio" id="woman" name="human" value="woman"/> 
                </div> 
                <input type="text" class="sign-in-region" placeholder='Yaşadığınız bölgə' required/> 
                <label htmlFor="" >Doğum tarixi</label> 
                <input 
                    type="date" 
                    className="sign-in-birth" 
                    required 
                /> 
                <label htmlFor="" >Əlaqə nömrəsi</label> 
                <input type="tel" pattern="[0-9]{10}" placeholder="Nümunə: 0501112233" className="sign-in-number" required/>
                <input type="email" class="sign-in-email" placeholder='E-mail ünvanı' required/> 
                <input type="password" class="sign-in-password" minLength="8" placeholder='Şifrə' required/>
                <FontAwesomeIcon icon={faEye} onMouseDown={this.handleShowPs} /> 
                <label htmlFor="" >Bizim haqqımızda kimdən və ya hardan məlumat almısız?</label> 
                <select className="where-learn"> 
                <option value="Sosial şəbəkə">Sosial şəbəkə</option> 
                <option value="Tanış">Tanış</option> 
                <option value="Reklam paneli">Reklam paneli</option> 
                <option value="Digər">Digər</option> 
                </select> 
                <p className="go-log-in" onClick={this.props.logIn} >Hesabına daxil ol</p> 
                <button type="submit" className="sign-in" >Təsdiqlə</button> 
            </form>
        );
    }
}

export default SignIn;