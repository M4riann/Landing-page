import React, { Fragment, useRef } from "react";
import { VscGithub } from "react-icons/vsc";
import "../components/navbar.css"

const Navbar = () =>{
    const redirectToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/marian-sîrbu-20b198176/', '_blank');
      };
      const redirectToGitHub = ()=>{
        window.open('https://github.com/M4riann', '_blank');
      }
return(
    <Fragment>
        <div id="navbar">
            <h1 className="navbar__header">S.M portofolio</h1>
                <div className="navbar__links__container">
                    <a href="#projects" className="navbar__links" >Projects</a>
                    <a  href="#technologies" className="navbar__links" >Technologies</a>
                    <a href="#aboutMe" className="navbar__links" >About me</a>
                </div>
           
                <div className="navbar__logos__container">
                    <p onClick={redirectToLinkedIn} id="navbar__linkedin" className="navbar__links">in</p>
                    <p onClick={redirectToGitHub} id="navbar__gitHub" className="navbar__links"><VscGithub style={{width:"22px", height:"20px"}}/></p>
                </div>
        </div>
        
    </Fragment>


)

}

export default Navbar;