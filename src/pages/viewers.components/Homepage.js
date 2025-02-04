import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../_app.js';
import Title from './Title';
import Video from './Video';
import Description from './Description';
import FeaturesList from './FeaturesList';
import NewsletterForm from './NewsletterForm';
import ToastMessage from './ToastMessage';
import HomePageController from '../../controllers/HomePageController';
import Footer from './Footer.js';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }

    componentDidMount() {
        HomePageController.handlePageLoad();
    }

    handleFormSubmit = () => {
        this.setState({ showToast: true });
    }

    handleToastClose = () => {
        this.setState({ showToast: false });
    }

    render() {
        const { title, videoUrl, description, discountCode } = this.props;
        const { showToast } = this.state;

        return (
            <div className="container">
                <Title title={title} />
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Video videoUrl={videoUrl} />
                        <Description description={description} />
                        <FeaturesList />
                        <NewsletterForm onFormSubmit={this.handleFormSubmit} />
                        {showToast && <ToastMessage message="Thank you for subscribing! Use code JAMAICA10 to get a 10% discount on your next purchase." onClose={this.handleToastClose} />}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

// Default Props
HomePage.defaultProps = {
    title: "Jamaican Oxtails Recipe",
    videoUrl: "https://www.youtube.com/embed/H6zJic4qjtY?si=sOCZjL6blfQ-RNkK",
    description: "Experience the rich and flavorful taste of Jamaican oxtails, slow-cooked to perfection with a blend of traditional spices and herbs. This authentic Caribbean dish brings the essence of Jamaica to your kitchen, making every meal a delightful culinary journey.",
    discountCode: "JAMAICA10"
};

export default HomePage;
