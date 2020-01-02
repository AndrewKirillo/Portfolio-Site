import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"
import bulletin_board_flyer from "../assets/media/bulletin_board_flyer.png";
import belden_tech_talk from "../assets/media/belden_tech_talk.png";
import student_board_logo from "../assets/media/student_board_logo.png";
import hbsa_logo from "../assets/media/hbsa_logo.png";
import hbsa_cohorts from "../assets/media/hbsa_cohorts.png";

export default class Organizations extends React.Component {
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
                            <img className="logo" src={student_board_logo} alt="M.E.T. Student Board logo"/>
                            <h2 className="company">M.E.T. Student Board</h2>
                        </div>
                        <h3 className="position">VP of External Affairs</h3>
                        <h4 className="time">Summer 2019 - Present</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Launched the Bulletin Board, an M.E.T. Student Board-run consulting program that allows our students to gain invaluable industry experience while providing companies with innovative solutions to both strategic and technical problems.
                            </li>
                            <br/>
                            <li>
                                Hosted events such as tech talks and infosessions with leading figures in the technology sector, creating opportunities for our fellow Berkeley students and facilitating collaboration with other campus organizations.
                            </li>
                            <br/>
                            <li>
                                Cultivated corporate relationships to procure recruitment opportunities for M.E.T. students.
                            </li>
                            <br/>
                            <li>
                                Facilitated the development of mentorships between the M.E.T. board of advisors and the student body.
                            </li>
                        </ul>
                        <div className="media">
                            <a href="/andrew/bulletin_board_flyer.pdf" target="_blank" rel="noopener noreferrer">
                                <img src={bulletin_board_flyer} alt="Bulletin Board flyer" />
                            </a>
                            <a href="https://www.facebook.com/events/1386612691513442/" target="_blank" rel="noopener noreferrer">
                                <img src={belden_tech_talk} alt="Belden tech talk poster" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="meta">
                        <div className="brand">
                            <img className="logo" src={hbsa_logo} alt="HBSA logo"/>
                            <h2 className="company">Haas Business School Asociation (HBSA)</h2>
                        </div>
                        <h3 className="position">Director of M.E.T. Integration</h3>
                        <h4 className="time">Summer 2019 - Present</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Migrated the Haas Undergraduate Cohort Program away from the legacy standard of junior and senior cohorts, and to class-agnostic 4-cohort system that is inclusive to freshman and sophomore Haas students such as M.E.T. and G.M.P. members.
                            </li>
                            <ul>
                                <li>
                                    The new cohorts are Axe, Bear, California, and Oski!
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Oversaw the integration of the M.E.T. program into the operations and culture of the Haas School of Business by ensuring that new policies, initiatives, and organizational changes equitably consider M.E.T. students.
                            </li>
                        </ul>
                        <div className="media">
                            <a href="https://haas.berkeley.edu/undergrad/student-life-services/cohort-program/" target="_blank" rel="noopener noreferrer">
                                <img src={hbsa_cohorts} alt="New Haas cohorts" />
                            </a>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}