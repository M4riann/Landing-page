import React from "react";
import "../components/aditionalTechnologies.css"

const AdditionTechnologies = () =>{
    return(
        <ul className="listContainer">
           <div style={{display:"flex", gap:"30px", flexDirection:"column", verticalAlign:"baseline", transform: "translate(-0.1em, 0.2em)"}}>
            <li>Git</li>
            <li>RWD</li>
           </div>
            <div style={{display:"flex", gap:"30px",flexDirection:"column"}}>
                <li>B2 english</li>
                <li>Teamwork</li>
                <li>Quick learning</li>
            </div>
           <div style={{display:"flex", gap:"30px",flexDirection:"column"}}>
           <li>Seriousness</li>
            <li>Analytical thinking</li>
            <li>Communicative</li>
            <li>Desire to learn</li>
           </div>
           
        </ul>
    )
}

export default AdditionTechnologies;