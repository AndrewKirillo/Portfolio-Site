import React from 'react';
import "./SideNav.css";
import $ from 'jquery';

export default class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "link-0",
            activeSection: "section-0",
            activeIdx: null,
            prevBottom: null,
            prevTop: null,
            scrollSpyDisabled: false
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.crossedThresh = this.crossedThresh.bind(this);
    }

    componentDidMount = () => {
        window.addEventListener("scroll", this.scrollSpy);
        this.setState({ prevBottom: document.getElementById("section-0").getBoundingClientRect().bottom,
                        prevTop: document.getElementById("section-0").getBoundingClientRect().top,
                        activeIdx: 0 });
    }

    scrollSpy = () => {
        const sectionRect = document.getElementById(this.state.activeSection).getBoundingClientRect();
        const threshold = 128.1;
        let activeSection = this.state.activeSection;
        let activeLink = this.state.activeLink;
        let activeIdx = this.state.activeIdx;
        const delta = this.state.prevTop - sectionRect.top;
        if (!this.state.scrollSpyDisabled) {
            // scroll down
            if (delta > 0 && this.crossedThresh(this.state.prevBottom, sectionRect.bottom, threshold, false)) {
                activeIdx = Math.min(parseInt(this.state.activeSection.split("-")[1]) + 1, 2);
            }
            // scroll up
            else if (delta <= 0 && this.crossedThresh(this.state.prevTop, sectionRect.top, threshold, true)) {
                activeIdx = Math.max(parseInt(this.state.activeSection.split("-")[1]) - 1, 0);
            }
            activeSection = "section-" + activeIdx;
            activeLink = "link-" + activeIdx;
        }
        this.setState({ activeSection, activeLink, activeIdx, prevBottom: sectionRect.bottom, prevTop: sectionRect.top });
    }

    crossedThresh(prevVal, currVal, threshold, scrollUp) {
        if (scrollUp) {
            return prevVal <= threshold && currVal > threshold;
        } else {
            return prevVal > threshold && currVal <= threshold;
        }
    }

    handleClick = (activeIdx) => {
        return (e) => {
            const activeLink = e.target.id;
            const activeSection = "section-" + activeIdx;
            const offset = document.getElementById(activeSection).offsetTop;
            this.setState({ activeLink, activeSection, activeIdx, scrollSpyDisabled: true }, () => {
                $('html, body').animate({
                    scrollTop: offset
                }, 500, "swing", () => {
                    this.setState({ scrollSpyDisabled: false });
                });
            });
            // window.scrollBy(0, section.getBoundingClientRect().top);
        }
    }    

    render() {
        const links = ["link-0", "link-1", "link-2"]
        return (
            <div className="sidebar">
                {
                    links.map((link, index) => (
                        <div id={link} key={index} className={index === this.state.activeIdx ? "active" : ""} onClick={this.handleClick(index)}/>
                    ))
                }
            </div>
        )
    }
}