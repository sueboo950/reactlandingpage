import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ title }) => {
    return <div className="footer"><p className="text-center">© 2025 Jamaican Oxtails. All rights reserved.</p> {title}</div>;
}
Footer.propTypes = {
    // Add prop-types here
    title: PropTypes.string.isRequired,
};
export default Footer;