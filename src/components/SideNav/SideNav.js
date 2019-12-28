import React from 'react';
import "./SideNav.css";

export default class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "link-0"
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (sectionNum) => {
        return (e) => {
            document.getElementById(this.state.active).classList.remove("active");
            const targetId = e.target.id;
            document.getElementById(targetId).classList.add("active");
            this.setState({active: targetId});
            const section = document.getElementById("section-" + sectionNum);
            window.scrollBy(0, section.getBoundingClientRect().top);
            
        }
    }    

    render() {
        return (
            <div className="sidebar">
                <div id="link-0" className="active" onClick={this.handleClick("0")}/>
                <div id="link-1" onClick={this.handleClick("1")}/>
                <div id="link-2" onClick={this.handleClick("2")}/>
                <div id="link-3" onClick={this.handleClick("3")}/>
            </div>
        )
    }
}