import React from "react";
import workshop from "../media/workshop.PNG"
import workshopCalculator from "../media/workshopCalculator.png"
import binaryCalculator from "../media/binary project.PNG"
import netflixClone from "../media/netflix.PNG"
import "../components/projects.css"
import ProjectOneByOne from "./ProjectOneByOne";
const Projects = () =>{
    return(
        <div className="cards__container">
            {/* <h3>Projects</h3> */}
            <ProjectOneByOne workshopHidden={true} id="projects" workshopVideoUrl={true} netflixPage={false}  imageSRC={workshop} projectName="Best shop workshop" projectDesc="Responsive HTML/CSS layout for online subscriptions store. HTML5, CSS3 (SCSS)."/>
            <ProjectOneByOne workshopHidden={false} id="projects" netflixGit={false} calculatorGit={true} workshopVideoUrl={false} netflixPage={false} imageSRC={workshopCalculator} projectName="Best shop workshop calculator" projectDesc="Subscription calculation algorithm. Javascript, CSS3 (SCSS)"/>
            <ProjectOneByOne  workshopHidden={false}id="projects" netflixGit={true} calculatorGit={false} workshopVideoUrl={false} netflixPage={true}  imageSRC={netflixClone} projectName="Netflix clone" projectDesc="Netflix alike application created with ReactJS."/>
        </div>
       

    )
}

export default Projects;