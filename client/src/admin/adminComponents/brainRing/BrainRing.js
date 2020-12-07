import React, {Component} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import './BrainRing.css';


class BrainRing extends Component {

    state={
        brainRing:[],
        brainRingId:0,
        clickedBrainRing:0
    }

    componentDidMount=()=>{
        this.getBrainRinQuestions();
    }

    getBrainRinQuestions=()=>{
        axios.get('/admin/get-brainRing')
         .then((res)=>{
            this.setState({brainRing: res.data})
         })
         .catch((error)=>{
            console.log('Error '+error);
         })
    }

    displayQuestions=(questions)=>{
        if(!questions.length) return null;

        let brainRingGamersCount=1;
        return questions.map((question)=>{
            return <tr key={question._id} onClick={this.chooseQuestion}>
                        <td className='brainRing-td' data-id={question._id}>{brainRingGamersCount++}</td>
                        <td className='brainRing-td brainRingGamers-question' data-id={question._id}>{question.question}</td>
                        <td className='brainRing-td brainRingGamers-answer' data-id={question._id}>{question.answer}</td>
                        <td className='brainRing-td brainRingGamers-level' data-id={question._id}>{question.level}</td>
                    </tr>
        });
    }
    
    chooseQuestion=(event)=>{
        $("tr").css("background-color","");
        $(event.target).parent().css("background-color","grey");
        $(".brainRing-question").val(`${$(event.target).parent().children(".brainRingGamers-question").text()}`);
        $(".brainRing-answer").val(`${$(event.target).parent().children(".brainRingGamers-answer").text()}`);
        $(".brainRing-level").val(`${$(event.target).parent().children(".brainRingGamers-level").text()}`)
        this.setState({brainRingId:$(event.target).data("id")});
        this.setState({clickedBrainRing:$(event.target)});
    }

    deleteQuestion= ()=>{
        let formData={};
        formData._id=this.state.brainRingId;
        formData.status=0;  
        axios.put(`/admin/delete-brainRing`, formData)
            .then((data)=>{
                $(this.state.clickedBrainRing).parent().toggle(200);
                alert('Sual silindi.');
            })
            .catch((error)=>{
                console.log('Internal server error'+ error);  
            })
    }

    render (){
    return (
        <div className="questions-list">
            <h1 className="list-head">Brain-Ring Suallar</h1>
            <form className="brainRing-question-contex">
                <textarea name="" id="" className="brainRing-question" placeholder="Question:"></textarea>
                <input type="text" className="brainRing-answer" placeholder="Answer:"/>
                <input type="text" className="brainRing-level" placeholder="Level:"/>
                <div className="questions-buttons">
                    <button type="button" className="add-brainRing">add</button>
                    <button type="button" className="edit-brainRing">edit</button>
                    <button type="button" className="delete-brainRing red-btn" onClick={this.deleteQuestion}>del</button>
                </div>
            </form>
            <table className="brainRing-list">
                <tr>
                    <th>Count</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Level</th>
                </tr>
                {this.displayQuestions(this.state.brainRing)}
            </table>
        </div>
    );
    }
}

export default BrainRing;
