import React, {Component} from 'react';
import {NavLink, Route, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import axios from 'axios';
import './Admin.css';

import AdminMain from './AdminMain';

class Admin extends Component{

    state={
        passWord:[],
        checking: false
    }

    componentDidMount=()=>{
        this.getPassword();
    }

    getPassword = () => {
        axios.get('/admin/get-parol')
            .then((res)=>{
                this.setState({passWord: res.data});
            })
            .catch((error)=>{
                console.log('error: ', error);                
            });
    }

    checkPassword = (event, parol) => {
        event.preventDefault();
        parol.map((parolData) => {
            console.log(parolData);
            if (parolData.password === $("input[name=logInParol]").val() &&
            parolData.user===$('input[name=logInEmail]').val() && parolData.status!==0) {
                return this.props.history.replace("/admin-main");
            } 
            else if (parolData.password !== $("input[name=logInParol]").val() ||
            parolData.user!==$('input[name=logInEmail]').val()){
                $("input[name=logInParol]").addClass('shake');
                $("input[name=logInEmail]").addClass('shake');
                $("input[name=logInParol]").val('');
                $("input[name=logInEmail]").val('');
                setTimeout(function(){
                  $("input[name=logInParol]").removeClass('shake');
                  $("input[name=logInEmail]").removeClass('shake');
                },500)
            }
        })
    }

    render(){
        return ( <div className="parol-container">
                <form className="password">
                    <p>GİRİŞ</p>
                    <input type="email" name="logInEmail" placeholder="Elektron poçt" autoFocus/>
                    <input type="password" name="logInParol" placeholder="Şifrə"/><br/>
                    <a  href="#"
                        id="logIn" 
                        onClick={(e) => {this.checkPassword(e, this.state.passWord)}}>
                    Log In</a>
                </form>
            </div>
        )
    }
}

export default Admin;