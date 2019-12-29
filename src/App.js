import React from 'react';
import headshot from './assets/media/headshot.png';
import SideNav from './components/SideNav/SideNav';
import Experience from './components/Experience';
// import Projects from './components/Projects';
import Contact from './components/Contact/Contact';
import contact_banner from './assets/media/contact.png';
import './App.css';

export default function App(props) {

    return (
      <div className="App">
        <section className="scroll-section" id="section-0">
          <div className="bio-wrapper">
            <img className="headshot" src={headshot} alt="Andrew looking fine as hell"/>
            <p className="bio">
              Hey there!
              I'm currently a sophomore in UC Berkeley's <span className="emphasis">Management, Entrepreneurship, and Technology (M.E.T.) program</span>, pursuing a dual degree in Electrical Engineering & Computer Science and Business Administration.
              <br/>
              My goal in life is to create products that <span className="emphasis">empower others to fulfill their ambitions</span>.
              <br/>
              At the moment, my technical interests lie in distributed systems, full-stack engineering, and product management.
              I am also interested in tech entrepreneurship, and am an avid <span className="emphasis">boxer</span> in my free time!
              <br/>
              Please enjoy my site.
            </p>
          </div>
          <div className="bio-action">
            <a href="/andrew/resume.pdf" target="_blank" rel="noopener noreferrer" className="bio-button">View Resume</a>
          </div>
        </section>
        <section className="scroll-section" id="section-1">
          <h1 className="section-title">Experience</h1>
          <Experience/>
        </section>
        {/* <section className="scroll-section" id="section-2">
          <h1 className="section-title">Projects</h1>
          <Projects/>
        </section> */}
        <section className="scroll-section" id="section-2">
          <Contact/>
          <div className='banner-wrapper'>
            <img className="contact-banner" src={contact_banner} alt="Get In Touch!"/>
          </div>
        </section>
        <SideNav/>
      </div>
    );
  
}
