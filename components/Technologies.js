import React, {Fragment} from "react";
import "../components/technologies.css"
const Technologies = ({language="", experience="", barWidth=""}) =>{

    return(
        <Fragment>
            
            <h5  className="experienceLanguage">{language}</h5>
            <div className="containerExperiences">
                <div className="experienceBar" style={{width:`${barWidth}`}}></div>
                <p className="experienceLevel">{experience}</p>
            </div>
           


        </Fragment>
    )
}

export default Technologies;