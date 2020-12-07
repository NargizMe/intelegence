import React, {Component} from 'react';
import './Supporters.css';

import cinemaplus from '../../assets/img/supporterImg/cinemaplus.svg';
import genclerIdman from '../../assets/img/supporterImg/gencler-idman.png';
import youthFoundation from '../../assets/img/supporterImg/genclerfondulogo.png';
import oilFund from '../../assets/img/supporterImg/neft.png';
import teasPress from '../../assets/img/supporterImg/TeasPress.png';

class Supporters extends Component{

    render(){
        return(
            <div className="supporters">
                <div className="supporter teas">
                    <a href="http://www.teaspress.az/lang,az/" target="_blank">
                        <img src={teasPress} alt="TeasPress" />
                    </a>
                </div>
                <div className="supporter oil">
                    <a href="https://www.oilfund.az/" target="_blank">
                        <img src={oilFund} alt="oilfund" />
                    </a>
                </div>
                <div className="supporter youth">
                    <a href="https://youthfoundation.az/" target="_blank">
                        <img src={youthFoundation} alt="youthfoundation" />
                    </a>
                </div>
                <div className="supporter cinema">
                    <a href="https://www.cinemaplus.az/ru/" target="_blank">
                        <img src={cinemaplus} alt="cinemaplus" />
                    </a>
                </div>
                <div className="supporter mys">
                    <a href="https://www.mys.gov.az/" target="_blank">
                        <img src={genclerIdman} alt="mys.gov" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Supporters;