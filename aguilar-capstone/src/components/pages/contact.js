import React from 'react';

import thankYou from '../../../static/capstone-pictures/thank-you.jpg';
import ContactForm from '../features/contact-form';

export default function() {
    return (
        <div className="contact-form-wrapper">
            <div className="contact-wrapper">
                <div className="thank-you-picture">
                    <img src={thankYou} />
                </div>

                <div className="contact-text-wrapper">
                    <div className="thank-you-text">
                            <h2>Thank you for your interest in A Whole Lot of Dog,   where you can find all of your doggy needs!</h2>
                    </div>

                    <div className="contact-text">
                        <div className="info">
                            <p>We are located at: <br /> 123 Linden St. Caldwell, ID</p>
                        </div>

                        <div className="info">
                            <p>You can also call us at: <br/> 123-456-7890</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-wrapper">
                <div className="email-text">
                    <h3>You can also fill out the email form below!</h3>
                </div>

                <ContactForm />
            </div>
        </div>
    );
}