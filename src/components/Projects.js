import React from 'react';
import Slider from 'react-slick';
import tutorous_screenshot from "../assets/media/tutorous_sceenshot.png";
import tutorous_logo from "../assets/media/tutorous_logo.png";
import attendy_logo from "../assets/media/attendy_logo.png";
import attendy_mockup from "../assets/media/attendy_mockup.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"

export default class Projects extends React.Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider className="slider" {...settings}>
                <div>
                    <div className="meta">
                        <div className="brand">
                            <img className="logo" src={tutorous_logo} alt="Tutorous logo"/>
                            <h2 className="company">Tutorous</h2>
                        </div>
                        <h3 className="position">Co-founder</h3>
                        <h4 className="time">Spring 2017 - Spring 2018</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Created an online tutoring platform, Tutorous, to provide accessible tutoring to disadvantaged populations, geared towards high-school tutors.
                            </li>
                            <ul>
                                <li>
                                    Tutorous featured video conferencing, instant messaging, and real-time collaborative document viewing and annotation.
                                </li>
                                <li>
                                    This was a full-stack application built with <span className="emphasis">Angular</span> and <span className="emphasis">Node</span>, served from <span className="emphasis">Microsoft Azure</span>.
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Partnered with local schools and NGO Paper Airplanes to get Tutorous in the hands of students and Syrian refugees, to empower their pursuit of higher education.
                            </li>
                        </ul>
                        <div className="media">
                            <img src={tutorous_screenshot} alt="Tutorous in-call screenshot"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="meta">
                        <div className="brand">
                            <img className="logo" src={attendy_logo} alt="Attendy logo"/>
                            <h2 className="company">Attendy</h2>
                        </div>
                        <h3 className="position">Developer</h3>
                        <h4 className="time">Fall 2018</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Devised an ungameable blockchain-based attendance tracking system.
                            </li>
                            <ul>
                                <li>
                                    Stored attendance records on a dsitributed ledger.
                                </li>
                                <li>
                                    Used the <span className="emphasis">Google Nearby API</span> to have classmates' in-earshot devices validate incoming attendance requests, ensuring in-person attendance.
                                </li>
                                <li>
                                    Built on top of a <span className="emphasis">Node</span> backend managing a <span className="emphasis">MongoDB</span> database.
                                </li>
                                <li>
                                    Native applications built using <span className="emphasis">Swift</span> and <span className="emphasis">Android Studio</span>.
                                </li>
                            </ul>
                        </ul>
                        <div className="media">
                            <img src={attendy_mockup} alt="Tutorous in-call screenshot"/>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}