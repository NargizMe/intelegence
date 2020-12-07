import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';
import axios from 'axios';
import './MoreNews.css';
import Contact from '../contact/Contact';
import VolunteerForm from '../forms/volunteerForm/VolunteerForm';
import PlayForm from '../forms/playForm/PlayForm';
import logo from '../../assets/img/logo.jpg';
import BackDrop from '../UI/Backdrop/Backdrop';

class MoreNews extends Component{

    state={
        moreNews:[],
        showPlayForm: false,
        showVolunteerFrom: false
    }

    componentDidMount=()=>{
        this.getMoreNews();
    }

    getMoreNews=()=>{
        axios.get('/api/get-news')
         .then((res)=>{
            this.setState({moreNews: res.data});
            console.log('Data has been received');
         })
         .catch((error)=>{
            console.log('Error: ', error);            
         })
    }

    handleOpenVolunteer=()=>{
    // $("body").css("background", "rgba(0,0,0, 0.75)");
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

    displayMoreNews=(moreNews)=>{

        if(!moreNews.length) return null;

        return moreNews.map((newsData)=>{
            if(newsData.direction==="right" && newsData.status!==0){  
                return <div class="news-more" key={newsData._id}>
                    <div class="news-more-img"><img src="img/${newsData.img}" alt=""/></div>
                    <div class="news-more-container">
                        <h1 class="news-more-container-head">{newsData.head}</h1>
                        <p class="news-more-container-text">{newsData.hideContex}</p>
                        <small class="news-more-container-date">{newsData.date}</small>
                    </div>
                </div>
            }
            else if(newsData.direction==="left" && newsData.status!==0){
                return <div class="news-more" key={newsData._id}>
                    <div class="news-more-container">
                        <h1 class="news-more-container-head">{newsData.head}</h1>
                        <p class="news-more-container-text">{newsData.hideContex}</p>
                        <small class="news-more-container-date">{newsData.date}</small>
                    </div>
                    <div class="news-more-img"><img src="img/${newsData.img}" alt=""/></div>
                </div>
            }
        });
    }

    render(){
        return(
            <div class="container">
                {this.state.showVolunteerFrom ? <BackDrop/> : null}
                {this.state.showPlayForm ? <BackDrop/> : null}
                {this.state.showPlayForm ? <PlayForm hidePlay={this.handleClosePlay} /> :null}
                {this.state.showVolunteerFrom ? <VolunteerForm hideVolunteer={this.handleCloseVolunteer} /> : null} 
            {/* <!-- NAVBAR --> */}
            <nav class="all-nav scroll">
                <div class="logo"><a href="#"><img src={logo} alt=""/></a></div>
                <small class="volunteer" onClick={this.handleOpenVolunteer}>Könüllü Ol</small>
                <div class="play" onClick={this.handleOpenPlay}><FontAwesomeIcon icon={faPlayCircle} />Oyna</div>
            </nav>
            {/* <!-- NEWS --> */}
            <section id="news-page">
                <div class="container-head">
                <h1 class="heading"><img src="img/x.png" alt="" class="letters"/>Xəbərlər</h1>
                <div class="title-underline"></div>
                <div class="news-page-container">
                    {this.displayMoreNews(this.state.moreNews)}
                </div>
            </div>
            </section>
            <Contact/>
        </div>
        )
    }
}

export default MoreNews;