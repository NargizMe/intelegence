import React, {Component} from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Main.css';
import logo from '../../assets/img/logo.jpg';

import Supporters from '../supporters/Supporters';
import Events from '../events/Events';
import Projects from '../projects/Projects';
import News from '../news/News';
import Organization from '../organization/Organization';
import About from '../about/About';
import Contact from '../contact/Contact';
import VolunteerForm from '../forms/volunteerForm/VolunteerForm';
import PlayForm from '../forms/playForm/PlayForm';
import BackDrop from '../UI/Backdrop/Backdrop';
import MessageBox from '../UI/MessageBox/MessageBox';

class Main extends Component {
  state={
    menu: [],
    showVolunteerFrom: false,
    showPlayForm: false
  }

  componentDidMount = () =>{
    this.getMenu();
  }

  getMenu =()=>{
    axios.get('/api/get-menu')
      .then((res) => {
        this.setState({menu: res.data});
        console.log('Data has been received');
      })
      .catch((error)=>{
        console.log('Error: ' + error);
      });
  }

  displayMenu = (menu) =>{
    if(!menu.length) return null;

    return menu.map((links) => {
      if(links.status!==0){
       return <li key={links._id}><a href={links.url}>{links.name}</a></li>
      }
    });
  }

  handleOpenVolunteer=()=>{
    this.setState({
      showVolunteerFrom: true
    });
  }

  handleCloseVolunteer = () => {
    this.setState({
      showVolunteerFrom: false
    })
  }

  handleOpenPlay=()=>{
    this.setState({
      showPlayForm: true
    });
  }

  handleClosePlay = () => {
    this.setState({
      showPlayForm: false
    })
  }

  render (){
  return (
    <div className="container" _id='top'>
      {this.state.showVolunteerFrom ? <BackDrop/> : null}
      {this.state.showPlayForm ? <BackDrop/> : null}
      {this.state.showPlayForm ? <PlayForm hidePlay={this.handleClosePlay} /> :null}
      {this.state.showVolunteerFrom ? <VolunteerForm hideVolunteer={this.handleCloseVolunteer} /> : null} 
      <section className="banner">
        {/* NAVBAR */}
        <nav className="main-nav">
          <a className="logo" href='#top'>
            <img src={logo} alt="logo" />
          </a>
          <ul className="nav-menu">
            {this.displayMenu(this.state.menu)}
          </ul>
          <small className="volunteer" onClick={this.handleOpenVolunteer}>Könüllü Ol</small>
          <div className="play" onClick={this.handleOpenPlay} ><FontAwesomeIcon icon={faPlayCircle} />Oyna</div>
          <FontAwesomeIcon icon={faBars} onClick={()=>{$(".nav-menu").toggle()}} />
        </nav>
        <div className="banner-container">
          <h1 className="banner-heading">Consensus İntellektual mərkəzi</h1>
          <a className="banner-btn" href='#news'>Daha Çox</a>
        </div>
        </section>
      <Supporters />
      <Events _id='events'/>
      <Projects _id='projects'/>
      <News _id='news'/>
      <Organization _id='organization'/>
      <About _id='about'/>
      <Contact _id='contact'/>
    </div>
  );
  }
}

export default Main;
