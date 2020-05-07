import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"
import dispatch_goods from "../assets/media/dispatch_goods.png";
import blendscore from "../assets/media/blendscore.png";
import bulletin_board_flyer from "../assets/media/bulletin_board_flyer.png";
import belden_tech_talk from "../assets/media/belden_tech_talk.png";
import student_board_logo from "../assets/media/student_board_logo.png";
import hbsa_logo from "../assets/media/hbsa_logo.png";
import hbsa_cohorts from "../assets/media/hbsa_cohorts.png";
import bab_logo from "../assets/media/B@B_logo.png";
import bab_teaching from "../assets/media/teaching.jpg";
import simulator from "../assets/media/basis_simulator.png";

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
                            <img className="logo" src={bab_logo} alt="B@B logo"/>
                            <h2 className="company">Blockchain at Berkeley</h2>
                        </div>
                        <h3 className="position">Instructor & Researcher</h3>
                        <h4 className="time">Spring 2020 - Present</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Built a platform to run <span className="emphasis">simulated market experiments</span> with configurable stablecoin protocols, agent behaviors, orderbook parameters, and asset price feeds.
                            </li>
                            <ul>
                                <li>
                                    Used this to investigate <span className="emphasis">DeFi's Black Thursday</span> event that hit the crypto markets on March 12th, 2020, and specifically the stability implications for the <span className="emphasis">Dai</span> protocol.
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Taught our <span className="emphasis">Blockchain Fundamentals course</span> to a class of 50 students.
                            </li>
                            <ul>
                                <li>
                                    Taught the lectures on <span className="emphasis">game theory</span>, <span className="emphasis">scalability</span>, and <span className="emphasis">enterprise blockchain</span>.
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Organized a series of summer workshops with the <span className="emphasis">UC Berkeley Academic Talent Development Program</span> (ATDP) that taught middle and high schoolers about blockchain technology.
                            </li>
                        </ul>
                        <div className="media">
                            <a href="https://github.com/AndrewKirillo/bab-stablecoin_sims_research" target="_blank" rel="noopener noreferrer">
                                <img src={simulator} alt="Basis stablecoin simulator" />
                            </a>
                            <a href="https://blockchain.berkeley.edu/courses/spring-2020-fundamentals-decal/" target="_blank" rel="noopener noreferrer">
                                <img src={bab_teaching} alt="Me teaching the game theory lecture" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="meta">
                        <div className="brand">
                            <img className="logo" src={student_board_logo} alt="M.E.T. Student Board logo"/>
                            <h2 className="company">M.E.T. Student Board</h2>
                        </div>
                        <h3 className="position">VP of External Affairs</h3>
                        <h4 className="time">Summer 2019 - Spring 2020</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Launched the Bulletin Board, an M.E.T. Student Board-run <span className="emphasis">consulting program</span> that allows our students to gain invaluable industry experience while providing companies with innovative solutions to both strategic and technical problems.
                            </li>
                            <ul>
                                <li>
                                    Piloted the program with <span className="emphasis">Dispatch Goods</span>, for whom our team researched and prototyped a reusable container tracking system; and with <span className="emphasis">Blendoor</span>, for whom our team built out a data collection pipeline for their BlendScore product.
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Hosted events such as tech talks and infosessions with leading figures in the technology sector, creating opportunities for our fellow Berkeley students and facilitating collaboration with other campus organizations.
                            </li>
                            <ul>
                                <li>
                                    Held an "office hours"-styled mentorship event with <span className="emphasis">Greylock Partners</span>.
                                </li>
                                <li>
                                    Held an infosession with <span className="emphasis">Belden</span>
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Cultivated corporate relationships to procure recruitment opportunities for M.E.T. students.
                            </li>
                        </ul>
                        <div className="media">
                            <a href="/andrew/bulletin_board_flyer.pdf" target="_blank" rel="noopener noreferrer">
                                <img src={bulletin_board_flyer} alt="Bulletin Board flyer" />
                            </a>
                            <a href="https://dispatchgoods.com/home" target="_blank" rel="noopener noreferrer">
                                <img src={dispatch_goods} alt="Dispatch Goods" />
                            </a>
                            <a href="https://blendoor.com/blendscore" target="_blank" rel="noopener noreferrer">
                                <img src={blendscore} alt="Blendoor" />
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
                        <h4 className="time">Summer 2019 - Spring 2020</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Migrated the Haas Undergraduate Cohort Program away from the legacy standard of junior and senior cohorts, and to class-agnostic 4-cohort system that is inclusive to freshman and sophomore Haas students such as M.E.T. and G.M.P. members.
                            </li>
                            <ul>
                                <li>
                                    The new cohorts are <span className="emphasis">Axe</span>, <span className="emphasis">Bear</span>, <span className="emphasis">California</span>, and <span className="emphasis">Oski</span>!
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