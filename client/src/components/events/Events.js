import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Events.css';

import tLogo from '../../assets/img/eventsImg/t.png';

class Events extends Component{
    state={
        events: []
    }

    componentDidMount(){
        this.getEvents();
    }

    getEvents = () => {
        axios.get('/api/get-event')
            .then((res)=>{
                this.setState({events: res.data});
            })
            .catch((error)=>{
                console.log('error: ', error);                
            });
    }

    displayEvents = (events) => {
        if(!events.length) return null;

        return events.map((event) => {
            if(event.status!==0){
                return <div className="event-card" key={event._id}>
                <div className="event-front">
                    <img className="event-front-img" src={tLogo} alt="" />
                </div>
                <div className="event-back">
                    <div className="event-card-contex">
                        <h4 className="event-name">{event.head}</h4>
                        <p className="event-text">{event.time}</p>
                        <p className="event-extra-text">{event.contex}</p>
                        <a className="more-event" href={event.url}>ƏTRAFLI<FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                    </div>
                </div>
            </div>
        }
    });
    }

    render(){
        return(
            <section className="events" id="events">
                <div className="container-head">
                    <h1 className="heading"><img src={tLogo} alt="" className="letters" />Tədbirlər</h1>
                    <div className="title-underline"></div>
                    <div className="event-container">
                        {this.displayEvents(this.state.events)}
                    </div>
                </div>
            </section>
        );
    }
}

export default Events;