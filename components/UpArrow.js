import React, {useRef, useEffect, useState, Fragment} from "react";
import "../components/upArrow.css"
import { TiArrowUpThick } from "react-icons/ti";
const UpArrow = () =>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollThreshold = 600; // Adjust this value as needed
  
        if (scrollTop > scrollThreshold) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return(
        <Fragment>
              {isVisible && 
        <a href="#navbar" className={`arrowContainer ${isVisible? "containerArrowVisible" : null}`}>
            <TiArrowUpThick className="containerArrow"/>

        </a>}
        </Fragment>
        
    )


}

export default UpArrow;