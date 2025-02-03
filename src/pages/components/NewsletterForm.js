import React from 'react';

const NewsletterForm = () => {
    return (
        <form action="/submit_email" method="post">
            <div className="form-group">
                <label htmlFor="email">Subscribe to our newsletter and get a discount:</label>
                <input type="name" id="name" name="name" className="form-control" placeholder='Name' required />
                <input type="email" id="email" name="email" className="form-control" placeholder='Email' required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default NewsletterForm;
