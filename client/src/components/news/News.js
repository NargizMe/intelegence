import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import $ from 'jquery';
import axios from 'axios';
import './News.css';

import xLogo from '../../assets/img/newsImg/x-aq.png';

class News extends Component{
    state={
        news: []
    }

    componentDidMount(){
        this.getNews();
    }

    getNews = () => {
        axios.get('/api/get-news')
            .then((res)=>{
                this.setState({news: res.data});
            })
            .catch((error)=>{
                console.log('error: ', error);                
            });
    }

    displayNews = (news) => {
        if(!news.length) return null;
        const neww= news.slice(news.length-4, news.length);
        return neww.map((newsData) => {
            if(newsData.status!==0){
            return <article className="news-item" data-id="${newsData._id}" key={newsData._id}>
                <div className="front-text"> 
                <img src="img/${newsData.img}" alt="" className="news-front-img" />           
                </div>
                <div className="back-text">
                    <h1 className="back-text-heading">{newsData.date}</h1>
                    <p className="back-text-contex">{newsData.contex}</p>
                    <NavLink to="/news" className="news-button">ƏTRAFLI</NavLink>
                </div>
            </article>
        }
    });
    }

    render(){
        return(
            <section id="news">
                <div className="container-head">
                <h1 className="heading"><img src={xLogo} alt="" className="letters" />Xəbərlər</h1>
                <div className="title-underline"></div>
                <div className="news-container">
                    {this.displayNews(this.state.news)}
                </div>
            </div>
            </section>
        );
    }
}

export default News;