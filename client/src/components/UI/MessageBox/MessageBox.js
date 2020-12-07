import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './MessageBox.css';

class MessageBox extends Component{
    render(){
        return(
        <div class="message-box">
            <FontAwesomeIcon icon={faCheck} />
            {/* <p>{this.props.message}</p> */}
        </div>
        );
    }
}

export default MessageBox;