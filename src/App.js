import React from 'react';
import headshot from './assets/media/headshot.png';
import SideNav from './components/SideNav/SideNav';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact/Contact';
import contact_banner from './assets/media/contact.png';
import './App.css';

export default function App(props) {

    return (
      <div className="App">
        <SideNav/>
        <section className="scroll-section" id="section-0">
          <div className="bio-wrapper">
            <img className="headshot" src={headshot} alt="Andrew looking fine as hell"/>
            <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        <section className="scroll-section" id="section-1">
          <h1 className="section-title">Experiences</h1>
          <Experiences/>
        </section>
        <section className="scroll-section" id="section-2">
          <Projects/>
        </section>
        <section className="scroll-section" id="section-3">
          <Contact/>
          <div className='banner-wrapper'>
            <img className="contact-banner" src={contact_banner} alt="Get In Touch!"/>
          </div>
        </section>
      </div>
    );
  
}
