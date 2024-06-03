import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import AdditionTechnologies from './components/AdditionalTechnologies';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import UpArrow from './components/UpArrow';
function App() {

  return (
    <Fragment>
      <Navbar />
      <UpArrow/>

      <Hero description='Enthusiastic junior front end developer with JavaScript, HTML/CSS and React.' text="Hello, I'm Marian," text2='Junior JavaScript developer.' />
      <h1 id="projects" style={{marginLeft:"10%", marginTop:"5%", fontFamily:" Poppins, sans-serif", color:"white"}}>Projects</h1>
      <Projects/>
      <h1 id="technologies" style={{marginLeft:"10%", marginTop:"5%", fontFamily:" Poppins, sans-serif", color:"white"}}>Technologies</h1>
      <Technologies language='HTML' experience='Advanced' barWidth='80%'/>
      <Technologies language='CSS & Sass' experience='Advanced' barWidth='80%'/>
      <Technologies language='JavaScript' experience='Intermediary' barWidth='40%'/>
      <Technologies language='React' experience='Intermediary' barWidth='40%'/>
      <Technologies language='React native' experience='Intermediary' barWidth='40%'/>
      <h2 style={{marginLeft:"10%", marginTop:"5%", fontFamily:" Poppins, sans-serif", color:"white"}}>Additional technologies and skills</h2>
      <AdditionTechnologies/>
      <AboutMe/>
      <Footer/>
    </Fragment>
  );
}

export default App;
