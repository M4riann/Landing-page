import React, {Fragment} from "react";
import "../components/aboutMe.css"
const AboutMe = () =>{
    return(
        <Fragment>
            <div id="aboutMe" className="containerTimeLine">
                <div className="containerDot">
                    <p id="schoolYear">2023</p>
                    <p id="schoolDesc">Graduated "Edmond Nicolau" highschool, computer-science profile. </p>
                </div>
                <div className="containerDot">
                <p id="codersLabYear">2023</p>
                <p id="codersLabDesc">Started the front-end developer at CodersLab academy where I learned about web developing starting with HTML, CSS, Sass, JavaScript and its library React.</p>
                </div>
                <div className="containerDot">
                <p id="ProjectsYear">2024</p>
                <p id="ProjectsDesc">Graduated the CodersLab bootcamp and started using the knowledge I have aquired to build projects.</p>
                </div>
            </div>

        </Fragment>

    )
}

export default AboutMe;