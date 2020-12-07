import React, {Component} from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';
// import axios from 'axios';
import './Contact.css';

import eLogo from '../../assets/img/contactImg/e-aq.png';

class Contact extends Component{

    render(){
        return(
            <footer id="contact">
                <div className="container-head">
                <h1 className="heading"><img src={eLogo} alt="" class="letters" />Əlaqə</h1>
                <div className="title-underline"></div>
                <div className="contact-mail">
                    <div className="contact-info">
                        <div className="contact-info-icon"><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icons"/><small className="contact-knowledge">Azərbaycan, Bakı</small></div>
                        <div className="contact-info-icon"><FontAwesomeIcon icon={faPhoneSquareAlt} className="contact-icons"/><small className="contact-knowledge">051 422 49 00</small></div>
                        <div className="contact-info-icon"><FontAwesomeIcon icon={faEnvelope} className="contact-icons"/><small className="contact-knowledge">info@consensuz.az</small></div>
                        <div className="footer-icons">
                            <a href="https://www.facebook.com/iiok.az" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                            <a href="https://www.instagram.com/consensus.az/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.youtube.com/channel/.?view_as=subscriber" target="_blank"><FontAwesomeIcon icon={faYoutubeSquare}/></a>
                        </div>
                        <p className="copyright">&copy; Bütün hüquqlar qorunur</p>
                        </div>
                    <div className="contact-inputs">
                        <input type="text" id="your-name" placeholder="Ad:"/>
                        <input type="text" id="email" placeholder="Soyad:"/>
                        <input type="text" id="your-sms" className="contact-textarea" placeholder="Mesaj:"/>
                        {/* <!-- <textarea name="" id="your-sms" className="contact-textarea" placeholder="Mesaj:"></textarea> --> */}
                        <button type="submit" className="send-mail-btn"><FontAwesomeIcon icon={faPaperPlane} />Göndər</button>
                    </div>
                </div>
                </div>
            </footer>
        );
    }
}

export default Contact;