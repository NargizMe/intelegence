import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import './Projects.css';

import lLogo from '../../assets/img/projectsImg/l.png';

class Projects extends Component{
    state={
        projects: []
    }

    componentDidMount(){
        this.getProjects();
    }

    getProjects = () => {
        axios.get('/api/get-project')
            .then((res)=>{
                this.setState({projects: res.data});
            })
            .catch((error)=>{
                console.log('error: ', error);                
            });
    }

    handleMoreProject=(e)=>{
        $(e.target).siblings('.project-extra-text').toggle(300);
    }

    displayProjects = (projects) => {
        if(!projects.length) return null;
        
        return projects.map((project) => {
            if(project.status!==0){
            return <div className="project" key={project._id}>
                <img className="project-img" src="img/${projectsData.img}"/>
                <h1 className="project-name">{project.head}</h1>
                <p className="project-date"><span>Tarix:</span> {project.time}</p>
                <p className="project-place"><span>Məkan:</span> {project.place}</p>
                <p className="project-support"><span>Dəstəkçi:</span> {project.support}</p>
                <p className="project-extra-text">{project.hideContex}</p>
                <button type="submit" className="more-project" onClick={this.handleMoreProject}>ƏTRAFLI</button>
            </div>
        }
    });
    }

    render(){
        return(
            <section className="projects" id="projects">
                <div className="container-head">
                <h1 className="heading"><img src={lLogo} alt="logo" className="letters"/>Layihələr</h1>
                <div className="title-underline"></div>
                <div className="projects-container">
                    {this.displayProjects(this.state.projects)}
                </div>
            </div>
            </section>
        );
    }
}

export default Projects;