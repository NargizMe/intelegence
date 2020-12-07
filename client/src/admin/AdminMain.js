import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import './Admin.css';

class AdminMain extends Component {

  state={
    parol: []
  }

  componentDidMount=()=>{
    axios.get('/admin/get-parol')
      .then((res) => {
        this.setState({parol: res.data});
      })
      .catch((error)=>{
        console.log('Error: ' + error);
      });
  }

  showParolBox=()=>{
    $(".parol-box").toggle();
  }

  changePassword=(pass)=>{
    let passData={};
    passData.pass=$('.current-password').val();
    passData.password=$('.new-password').val();
    passData.reNewPass=$('.reNew-password').val();   
    if(pass.length){
      pass.map(passwordData=>{
      if(passwordData.password===passData.pass &&
        passData.password===passData.reNewPass){
          axios.put(`/admin/change-parol/${passwordData._id}`, passData)
            .then((data)=>{
              console.log(data);
            })
            .catch((error)=>{
              console.log(error);
            })
        alert('Şifrə dəyişdirildi.');
      }
      else if(passData.password!==passData.reNewPass){
        alert('Yeni şifrə təkrarı ilə üst-üstə düşmür.');
      }
      else if(passwordData.password!==passData.pass){
        alert('Hal hazırki şifrə düzgün daxil edilməyib.');
      }
      })
    }
  }

  render (){
  return (
    <div class="admin-container">
        <div class="link-container">
            <NavLink to="/volunteers" >List of Volunteers</NavLink>
            <NavLink to="/gamers" >List of Gamers</NavLink>
            <NavLink to="/xamsa" >Xamsa</NavLink>
            <NavLink to="/brainRing" >Brain-Ring</NavLink>
            <NavLink to="/what"  >What?When?Where?</NavLink>
            <NavLink to="/clever" >Əlaçı</NavLink>
            <div class="change-password">
                <p onClick={this.showParolBox}>Parolu dəyiş</p>
                <div class="parol-box">
                    <input type="text" class="current-password" placeholder="Current password"/>
                    <input type="text" class="new-password" placeholder="New password"/>
                    <input type="text" class="reNew-password" placeholder="Rewrite new password"/>
                    <button class="change-pass-btn" onClick={()=> {this.changePassword(this.state.parol)}}>Change</button>
                </div>
            </div>
        </div>
    </div>
  );
  }
}

export default AdminMain;
