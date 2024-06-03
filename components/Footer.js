import React from "react";
import "../components/footer.css"
import { CgMail } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";


const Footer = () =>{
    const redirectToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/marian-sîrbu-20b198176/', '_blank');
      };
      const redirectToGitHub = ()=>{
        window.open('https://github.com/M4riann', '_blank');
      }
    return(
        <div className="footerContainer">
            <h5 id="footerContactMe">Feel free to contact me</h5>
            <div className="footerLogoEmail">
                <p id="footerEmail">sirbumarian350@gmail.com</p>
                <CgMail style={{color:"white"}}/>
            </div>
            
            <div className="footerLogos">
                <p onClick={redirectToGitHub} id="footer__gitHub" className="navbar__links"><VscGithub style={{width:"33px", height:"30px", color:"white"}}/></p>
                <p onClick={redirectToLinkedIn} id="footer__linkedin" className="navbar__links" style={{width:"33px", height:"30px", fontSize:"20px"}}>in</p>
            </div>
           
        </div>
    )
}

export default Footer;