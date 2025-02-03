import React, { useState } from 'react';

const NewsletterForm = ({ onFormSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        onFormSubmit(); // Call the parent function to show the toast
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Subscribe to our newsletter and get a discount:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default NewsletterForm;

