import React, {Component} from 'react';
// import axios from 'axios';
import './PlayForm.css';

// import xLogo from '../../assets/img/newsImg/x-aq.png';

class LogIn extends Component {

    render(){
        return(
            <form className="log-in-contex" >
                <label >E-mail ünvanı</label>
                <input type="email" className="log-in-email" 
                required/>
                <label >Şifrə</label>
                <input type="password" className="log-in-password" 
                required/>
                <p className="go-sign-in" onClick={this.props.signIn}>Qeydiyyatdan keç</p>
                <button type="submit" className="log-in">Təsdiqlə</button>
            </form>
        );
    }
}

export default LogIn;