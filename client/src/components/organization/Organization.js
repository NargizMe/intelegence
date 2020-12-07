import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';
// import axios from 'axios';
import './Organization.css';

import bLogo from '../../assets/img/organizationImg/b.png';

class Organization extends Component{
    state={
        news: []
    }

    render(){
        return(
            <section className="organizations" id="organizations">
                <div className="container-head">
                    <h1 className="heading"><img src={bLogo} alt="" className="letters" />Brendimiz</h1>
                    <div className="title-underline"></div>
                    <div className="organization-container">
                        <div className="organization">
                            <div className="organization-img"> <img src="https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>                       
                            <div className="organization-info">
                                <h1 className="organization-name">İsmayıllı İntellektual Oyunlar Klubu</h1>
                                <p className="organization-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore enim delectus dolorum vel aperiam accusantium quos iusto nesciunt, et id earum in magnam ipsa impedit quasi aliquam rerum doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquid autem. Nobis vero pariatur quae consequuntur corporis assumenda deleniti cumque.</p>
                                <div className="organization-info-icon"><FontAwesomeIcon icon={faMapMarkerAlt} className="organization-icons" /><small class="organization-knowledge">İsmayıllı şəh. Natavan küç.</small></div>
                                <div className="organization-info-icon"><FontAwesomeIcon icon={faPhoneSquareAlt} className="organization-icons" /><small class="organization-knowledge">051 422 49 00</small></div>
                                <div className="organization-info-icon"><FontAwesomeIcon icon={faEnvelope} className="organization-icons" /><small class="organization-knowledge">iofo@iiok.az</small></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Organization;