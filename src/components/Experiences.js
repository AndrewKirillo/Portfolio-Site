import React from 'react';
import Slider from 'react-slick';
import zoom_logo from "../assets/media/zoom_logo.png";
import zoom_showcase from "../assets/media/zoom_showcase.png";
import zoom_qualtrics from "../assets/media/zoom_qualtrics.png";
import zoom_groove from "../assets/media/zoom_groove.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"

export default class Experiences extends React.Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 4000
        };
        return (
            <Slider className="slider" {...settings}>
                <div>
                    Pathlight / KP
                </div>
                <div>
                    <div className="experience-meta">
                        <div className="experience-brand">
                            <img className="experience-logo" src={zoom_logo} alt="Zoom logo"/>
                            <h2 className="experience-company">Zoom</h2>
                        </div>
                        <h3 className="experience-position">Marketplace Developer Intern</h3>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Architected a video content management system (CMS) and discovery platform for Zoom Webinars with a integrated social network consisting of brand-able channels, including 3rd party marketing integrations and a video analytics suite.
                            </li>
                            <ul>
                                <li>
                                    This was a prototype for a new product offering that was pitched to the CEO, Eric Yuan, and now a limited set of the proposed features is being experimented with on the Zoom website.
                                </li>
                                <li>
                                    Built using a <span className="emphasis">Node</span> backend communicating with the <span className="emphasis">Zoom Webinar API</span>, <span className="emphasis">AWS DynamoDB</span>, and <span className="emphasis">AWS S3</span>; linked to a <span className="emphasis">React</span> frontend, hosted on <span className="emphasis">AWS EC2</span>.
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Developed 2 of the first 100 apps for the Zoom App Marketplace, each of which were chatbot-based integrations for 3rd-party SaaS products.
                            </li>
                            <ul>
                                <li>
                                    These were created using a <span className="emphasis">Node</span> backend that utilized <span className="emphasis">AWS DynamoDB</span> and the <span className="emphasis">Zoom Chat API</span> to trigger 3rd-party API actions. Each bot also included a <span className="emphasis">React</span> configuration page, was hosted on <span className="emphasis">AWS Lambda</span>, and was deployed through a <span className="emphasis">Jenkins</span> pipeline.
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Deliberated with product specialists from our integration partners, such as Qualtrics, to hash out appropriate use cases, feature sets, and product roadmaps.
                            </li>
                        </ul>
                        <div className="media">
                            <a href="https://zoom.us/events" target="_blank">
                                <img src={zoom_showcase} alt="Zoom Webinar Showcase" />
                            </a>
                            <a href="https://marketplace.zoom.us/apps/CdoL7sL9RA2M8Ff78Bvy7g" target="_blank">
                                <img src={zoom_qualtrics} alt="Zoom Qualtrics chatbot" />
                            </a>
                            <a href="https://marketplace.zoom.us/apps/xwOk57N_ThK-sXajOmJ-Fw" target="_blank">
                                <img src={zoom_groove} alt="Zoom Qualtrics chatbot" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    Progress
                </div>
                <div>
                    SCET
                </div>
            </Slider>
        )
    }
}