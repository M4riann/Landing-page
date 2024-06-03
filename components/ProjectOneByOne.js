import React, {Fragment, useState} from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const ProjectOneByOne = ({imageSRC, projectName="", projectDesc="", workshopVideoUrl=false, netflixPage=false, calculatorGit=false, netflixGit=false, workshopHidden=true}) =>{
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [selectedGitHub, setSelectedGitHub] = useState(0);

 


  function closeModal() {
    setIsOpen(false);
  }

  const mediaFiles=[
    {url:require("../media/workshop.mp4")},
    {url:require("../media/calculator.mp4")}
  ]
  const gitHubLinks=[
    ('https://github.com/M4riann/WorskshopSCSS'),
    ('https://github.com/M4riann/JS-Calculator'),
    ('https://github.com/M4riann/NetflixProject')

  ]
  const toggleVideoWorkshop = () => {
    setSelectedVideoIndex(0);
    setIsOpen(true);
  };
  const toggleVideoCalculator = () => {
    setSelectedVideoIndex(1);
    setIsOpen(true);
  };

  const redirectNetflix = ()=>{
    window.open('https://netflix-clone-8555f.web.app/', "_blank");
  }
  const redirectGitHubWorkshop = () =>{
      window.open(gitHubLinks[0]);

  }
  const redirectGitHubCalculator = () =>{
    window.open(gitHubLinks[1]);

  }
  const redirectGitHubNetflix = () =>{
    window.open(gitHubLinks[2]);

  }
  const currentVideo = mediaFiles[selectedVideoIndex];
  const currentGitHub = gitHubLinks[selectedGitHub];
  return(
        <Fragment>
        <div  className="containerCards">
          <div className="container__card">
            <div className="container__image">
            <img id="workshopImg" src={imageSRC} alt="Workshop Project"></img>
            </div>
              <h4 id="projectName">{projectName}</h4>
              <p id="projectDesc">{projectDesc}</p>
              <div className="container__card__buttons">
                {workshopVideoUrl? <button className="previewButton" onClick={toggleVideoWorkshop}>Live preview</button> :
                                   <button className={netflixPage? "previewButtonNetflixCalc" : "previewButton"} onClick={toggleVideoCalculator}>live preview</button>}
                {netflixPage?    <button className="previewButton" onClick={redirectNetflix}>live preview</button>:null }

                <button onClick={redirectGitHubWorkshop} id={workshopHidden? "gitHubButton" : "gitHubButtonHidden"}>Check on GitHub</button>
                {calculatorGit? <button onClick={redirectGitHubCalculator} id="gitHubButton">Check on GitHub</button>:null}
                {netflixGit? <button onClick={redirectGitHubNetflix} id="gitHubButton">Check on GitHub</button>:null}
              </div>
          </div>
        </div>

        <div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
                position: 'fixed',
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width:"1200px",
                height:"800px",
                backgroundColor:"transparent"  ,        
              },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width:"1200px",
            height:"800px",
            backgroundColor:"rgba(177, 142, 250,0.3)",
            overflow:"hidden",
            border:"1px solid rgb(177, 122, 250)"
          }
          }}

      >
        <button className="closingModal" onClick={closeModal}>Close</button>

        <div className="react-wrapper">
            <ReactPlayer className="react-player"
            url={currentVideo.url}
            height="100%"
            width="100%"
            controls={true}
            playing={true}
            
            >
            
            </ReactPlayer>
            

            
          </div>
       
      </Modal>
    </div>
  </Fragment>
    )
}

export default ProjectOneByOne;