import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            message: "",
            name: "",
            email: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        window.emailjs.send("contact_service", "contact_form", {
            subject: this.state.subject,
            message: this.state.message,
            name: this.state.name,
            email: this.state.email
        }, "user_qpDRqjHonOxQc3WjyTvZR");
        this.setState({ subject: "", message: "", name: "", email: ""});
    }

    handleChange = (field) => {
        return (event) => {
            let newState = {};
            newState[field] = event.target.value;
            this.setState(newState);
        }
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" required placeholder="Name" value={this.state.name} onChange={this.handleChange("name")}/>
                    <input type="text" required placeholder="Email" value={this.state.email} onChange={this.handleChange("email")}/>
                </div>
                <input type="text" required placeholder="Subject" value={this.state.subject} onChange={this.handleChange("subject")}/>
                <textarea rows='4' required placeholder="Message" value={this.state.message} onChange={this.handleChange("message")}/>
                <input type="submit" value="Send"/>
            </form>
        )
    }
}