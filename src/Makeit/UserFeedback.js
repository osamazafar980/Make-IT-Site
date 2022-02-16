import React, { useState } from "react";
import Header from "./Header";

import './UserFeedback.css'
import Feedback from '../pages/Feedback'
const Form = () => {
    const [userCredentials, setCredentials] = useState({
        displayName: "",
        email: "",
        message: "",
    });
    const [showFeedback, setFeedback] = useState({
        showFeedbackComponent: false
    });
    const { email, displayName, message } = userCredentials;
    const { showFeedbackComponent } = showFeedback;

    const handleSubmit = e => {
        e.preventDefault();
        if (email && displayName && message) {
            setFeedback({ showFeedbackComponent: true })
        }
    };

    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    };
    return (
        <div><Header />
            <div className="form">
                {
                    showFeedbackComponent ?
                        <Feedback
                            userCredentials={userCredentials}
                        /> :
                        <section >
                            <div className="form-header">
                                <h1>Hey There, We Are Collectng Feedback!</h1>
                            </div>
                            <div className="form-content">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="displayName">Name *</label>
                                        <input
                                            required
                                            type="text"
                                            name="displayName"
                                            value={displayName}
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Feedback *</label>
                                        <textarea
                                            name="message"
                                            className="form-input"
                                            type="text"
                                            value={message}
                                            onChange={handleChange}
                                            required
                                            rows="10"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit"
                                        >Submit Feedback</button>
                                    </div>
                                </form>
                            </div>
                        </section >
                }
            </div></div>
    )
}

export default Form;