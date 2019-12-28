import React from 'react';

export default class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (sectionNum) => {
        return () => {
            const section = document.getElementById("section-" + sectionNum);
            window.scrollBy(0, section.getBoundingClientRect().top);
            this.setState({ active: sectionNum });
        }
    }    

    render() {
        return (
            <div>
                <a id="link-0" className="active" onClick={this.handleClick("0")}>0</a>
                <a id="link-1" onClick={this.handleClick("1")}>1</a>
                <a id="link-2" onClick={this.handleClick("2")}>2</a>
                <a id="link-3" onClick={this.handleClick("3")}>3</a>
            </div>
        )
    }
}