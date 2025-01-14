import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './_app.js';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="text-center">Jamaican Oxtails Recipe</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/H6zJic4qjtY?si=sOCZjL6blfQ-RNkK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p>
            Experience the rich and flavorful taste of Jamaican oxtails, slow-cooked to perfection with a blend of traditional spices and herbs. This authentic Caribbean dish brings the essence of Jamaica to your kitchen, making every meal a delightful culinary journey.
          </p>
          <ul>
            <li>Authentic Jamaican recipe</li>
            <li>Slow-cooked for maximum flavor</li>
            <li>Blend of traditional spices and herbs</li>
            <li>Easy-to-follow instructions</li>
            <li>Perfect for family dinners or special occasions</li>
          </ul>
          <form action="/submit_email" method="post">
            <div className="form-group">
              <label htmlFor="email">Subscribe to our newsletter and get a discount:</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <p>
            Thank you for subscribing! Use code <strong>JAMAICA10</strong> to get a 10% discount on your next purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
