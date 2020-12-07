import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery';
import axios from 'axios';
import './About.css';

import hLogo from '../../assets/img/aboutImg/h.png';

class About extends Component{
    state={
        about: []
    }

    componentDidMount(){
        this.getAbout();
    }

    getAbout = () => {
        axios.get('/api/get-about')
            .then((res)=>{
                this.setState({about: res.data});
            })
            .catch((error)=>{
                console.log('error: ', error);                
            });
    }

    displayAbout = (about) => {
        if(!about.length) return null;
        
        return about.map((aboutData) => {
            if(aboutData.direction==="left" && aboutData.status!==0){
                return <div className="about about-left" key={aboutData._id}>
                            <div className="about-contex about-contex-right">
                                <h3 className="about-head">{aboutData.name}<br/>{aboutData.job}</h3>
                                <p className="about-text">{aboutData.contex}</p>
                            </div>
                            <img className="about-img" src="img/${aboutData.img}" alt="" />
                        </div>
            }
            else if(aboutData.direction==="right" && aboutData.status!==0){
                return <div className="about about-right" key={aboutData._id}>
                            <img className="about-img" src="img/${aboutData.img}" alt="" />
                            <div className="about-contex about-contex-left">
                                <h3 className="about-head">{aboutData.name}<br/>{aboutData.job}</h3>
                                <p className="about-text">{aboutData.contex}</p>
                            </div>
                        </div>
            }
        });
    }

    render(){
        return(
            <section className="about-us"  id="about-us">
                <div className="container-head">
                <h1 className="heading"><img src={hLogo} alt="" className="letters" />Haqqımızda</h1>
                <div className="title-underline"></div>
                <p className="about-us-info-text">Consensus İntellektual Mərkəzi 2017-ci ilin avqust ayında təsis edilmişdir. Gənclər arasında intellektual oyunların, kvestlərin, təlim və seminarların keçirilməsi mərkəzin əsas istiqamətlərindəndir.
                    Consensus İntellektual Mərkəzi Azərbaycanın  milli dəyərləri, mədəniyyət və tarixi, turizmi və coğrafiyasının müxtəlif sahələrdə təbliğatı ilə məşğul olur.
                    Azərbaycan qanunları çərçivəsində və gənclərin maraqlarını rəhbər tutaraq fəaliyyət göstərir.</p>
                <div className="about-container">
                    {this.displayAbout(this.state.about)}
                </div>
                <div className="line-circle"></div>
                <FontAwesomeIcon icon={faThumbtack} />
                <div className="line"></div>
                <div className="be-part"><p>HEKAYƏMİZİN BİR <br/> PARÇASI <br/> OL!</p></div>
            </div>
            </section>
        );
    }
}

export default About;