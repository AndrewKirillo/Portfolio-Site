import React from 'react';
import Slider from 'react-slick';
import kpcb_logo from "../assets/media/kpcb_logo.png";
import kpcb_fellows from "../assets/media/kpcb_fellows.png";
import pathlight from "../assets/media/pathlight.png";
import zoom_logo from "../assets/media/zoom_logo.png";
import zoom_showcase from "../assets/media/zoom_showcase.png";
import zoom_qualtrics from "../assets/media/zoom_qualtrics.png";
import zoom_groove from "../assets/media/zoom_groove.png";
import zoom_blog_post from "../assets/media/zoom_blog_post.png";
import progress_logo from "../assets/media/progress.png";
import progress_nativechat from "../assets/media/progress_nativechat.png";
import progress_nativescript from "../assets/media/progress_nativescript.png";
import scet_logo from "../assets/media/scet_logo.png";
import begin_homepage from "../assets/media/begin_homepage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

export default class Experience extends React.Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider className="slider" {...settings}>
                <div>
                    <div className="meta">
                        <div className="brand">
                            <img className="logo" src={kpcb_logo} alt="KPCB logo"/>
                            <h2 className="company">Kleiner Perkins</h2>
                        </div>
                        <h3 className="position">Engineering Fellow</h3>
                        <h4 className="time">Summer 2020</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Selected as one of less than 50 Kleiner Perkins Engineering Fellows for the summer of 2020.
                            </li>
                            <br/>
                            <li>
                                Interned at KP-backed startup <span className="emphasis">Pathlight</span> as a Software Engineer.
                            </li>
                        </ul>
                        <div className="media">
                            <a href="https://fellows.kleinerperkins.com/" target="_blank" rel="noopener noreferrer">
                                <img src={kpcb_fellows} alt="KPCB Fellows" />
                            </a>
                            <a href="https://www.pathlight.com/" target="_blank" rel="noopener noreferrer">
                                <img src={pathlight} alt="Pathlight" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="meta">
                        <div className="brand">
                            <img className="logo" src={zoom_logo} alt="Zoom logo"/>
                            <h2 className="company">Zoom</h2>
                        </div>
                        <h3 className="position">Marketplace Developer Intern</h3>
                        <h4 className="time">Summer 2019</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Architected a video content management system (CMS) and discovery platform for Zoom Webinars with an integrated social network made up of brand-able channels, including 3rd party marketing integrations and a video analytics suite.
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
                            <a href="https://zoom.us/events" target="_blank" rel="noopener noreferrer">
                                <img src={zoom_showcase} alt="Zoom Webinar Showcase" />
                            </a>
                            <a href="https://marketplace.zoom.us/apps/CdoL7sL9RA2M8Ff78Bvy7g" target="_blank" rel="noopener noreferrer">
                                <img src={zoom_qualtrics} alt="Zoom Qualtrics chatbot" />
                            </a>
                            <a href="https://marketplace.zoom.us/apps/xwOk57N_ThK-sXajOmJ-Fw" target="_blank" rel="noopener noreferrer">
                                <img src={zoom_groove} alt="Zoom Qualtrics chatbot" />
                            </a>
                            <a href="https://www.linkedin.com/pulse/meet-zoom-interns-plus-tips-setting-up-your-own-thiya-ramalingam/?trackingId=%2FfJ6T%2FkRpLbeQdrefngprg%3D%3D" target="_blank" rel="noopener noreferrer">
                                <img src={zoom_blog_post} alt="Blog post by my former manager about his time with us interns" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="meta">
                        <div className="brand">
                            <img className="logo" src={progress_logo} alt="Progress logo"/>
                            <h2 className="company">Progress</h2>
                        </div>
                        <h3 className="position">Technical Marketing Intern</h3>
                        <h4 className="time">Spring 2019</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Tested NativeChat, Progress' chatbot development service, to ensure readiness for an upcoming marketing push.
                            </li>
                            <ul>
                                <li>
                                    This consisted of cross-platform testing using the <span className="emphasis">NativeChat JSON-based chatbot framework</span> to ensure a consistent user experience.
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Fixed bugs in the <span className="emphasis">vanilla JS NativeScript API</span> tutorial for NativeScript, Progress' scripting framework for native mobile apps.
                            </li>
                            <br/>
                            <li>
                                Performed market research on competitor positioning and segmentation in the chatbot and micro-app PaaS categories to advise the redevelopment of Progress' marketing materials.
                            </li>
                        </ul>
                        <div className="media">
                            <a href="https://www.progress.com/nativechat" target="_blank" rel="noopener noreferrer">
                                <img src={progress_nativechat} alt="Progress NativeChat homepage" />
                            </a>
                            <a href="https://www.progress.com/nativescript" target="_blank" rel="noopener noreferrer">
                                <img src={progress_nativescript} alt="Progress NativeScript homepage" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="meta">
                        <div className="brand">
                            <img className="logo" src={scet_logo} alt="SCET logo"/>
                            <h2 className="company">Sutardja Center for Entrepreneurship and Technology (SCET)</h2>
                        </div>
                        <h3 className="position">Full Stack Developer & Marketing Specialist</h3>
                        <h4 className="time">Fall 2018 - Present</h4>
                    </div>
                    <div className="slide-content">
                        <ul className="story">
                            <li>
                                Managing all aspects of the Berkeley Gateway to Innovation (BEGIN) website, which serves to consolidate all of the resources across UC Berkeley's Innovation and Entrepreneurship ecosystem into one user-friendly and well-curated platform.
                            </li>
                            <ul>
                                <li>
                                    This included creating <span className="emphasis">a custom Wordpress plugin</span> with <span className="emphasis">PHP</span> that leverages the UC Berkeley Courses API and the Innovation Resource Database created in partnership with WITI and CS 169, our Software Engineering course.
                                </li>
                            </ul>
                            <br/>
                            <li>
                                Migrating the site off of Wordpress onto a <span className="emphasis">Gatsby</span> site deployed on <span className="emphasis">Netlify</span>.
                            </li>
                            <br/>
                            <li>
                                Automated content feeds, event scraping, and SEO implementation to generate a weekly newsletter that grew from 0 to 4000 subscribers, also bringing 5000 new users to the site.
                            </li>
                            <br/>
                            <li>
                                Spearheaded collaborations with myriad organizations such as the CatalistX, WITI, IPIRA, OnRamp, and QB3.
                            </li>
                        </ul>
                        <div className="media">
                            <a href="https://begin.berkeley.edu" target="_blank" rel="noopener noreferrer">
                                <img src={begin_homepage} alt="BEGIN homepage" />
                            </a>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}