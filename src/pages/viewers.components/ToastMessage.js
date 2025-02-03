import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// ToastMessage component
const ToastMessage = ({ message, discountCode, onClose }) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
        onClose(); // Call the parent function to handle toast visibility
    };

    if (!visible) {
        return null;
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="mr-auto">Notification</strong>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    {message}
                    <br />
                    <p>
                        Thank you for subscribing! Use code <strong>{discountCode}</strong> to get a 10% discount on your next purchase.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ToastMessage;
