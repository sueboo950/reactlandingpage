import React from 'react';

const DiscountMessage = ({ discountCode }) => {
    return (
        <p>
            Thank you for subscribing! Use code <strong>{discountCode}</strong> to get a 10% discount on your next purchase.
        </p>
    );
};

export default DiscountMessage;
