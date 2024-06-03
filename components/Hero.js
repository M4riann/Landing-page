import React, {Fragment, useState, useEffect}from "react";
import "../components/hero.css"



const Hero = ({text="", text2="", description=""}) =>{
const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayTextParagraph, setDisplayTextParagraph] = useState('');
  const [currentIndexParagraph, setCurrentIndexParagraph] = useState(0);
  const [displayDescription, setDisplayDescription] = useState("");
  const [currentIndexDesc, setCurrentIndexDesc] = useState(0)
  useEffect(() => {
    if (text && text.length > currentIndex) {
        const typingInterval2 = setInterval(() => {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100); 
        return () => clearInterval(typingInterval2);
      }
    }, [currentIndex, text]);
  
    
        useEffect(() => {
          
                if ( text2 && text2.length > currentIndexParagraph){
                const typingInterval2 = setInterval(() => {
                    setDisplayTextParagraph((prevText) => prevText + text2[currentIndexParagraph]);
                    setCurrentIndexParagraph((prevIndex) => prevIndex + 1);
                    clearInterval(typingInterval2); 
                }, 200);
                return () => clearInterval(typingInterval2)}; 
             
          
            
            }, [currentIndexParagraph, text2]);

            useEffect(() => {
          
              if ( description && description.length > currentIndexDesc){
              const typingInterval3 = setInterval(() => {
                  setDisplayDescription((prevText) => prevText + description[currentIndexDesc]);
                  setCurrentIndexDesc((prevIndex) => prevIndex + 1);
                  clearInterval(typingInterval3); 
              }, 60);
              return () => clearInterval(typingInterval3)}; 
          }, [currentIndexDesc, description]);
    
            const downloadPdf = () => {
              const pdfUrl = process.env.PUBLIC_URL + "/Sîrbu_Marian_CV.pdf";          
              const link = document.createElement('a');
              link.href = pdfUrl;
              link.download = 'Sîrbu_Marian_CV.pdf'; 
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            };
      
  return(
        <Fragment>
        <div className="container">
            <div className="container__content">
                <h2 id="container__header">{displayText}</h2>
                <span className="blinking-cursor">|</span>
                <h3 id="container__header__subText">{displayTextParagraph}</h3>

                <p id="container__paragraph">{displayDescription}</p>
                
                <button onClick={downloadPdf} id="container__button">Download CV</button>
            </div>
           
            <div id="photo__container">
            <div id="container__photo"></div>
        </div>
        </div>
        
        </Fragment>
       
)
}

export default Hero