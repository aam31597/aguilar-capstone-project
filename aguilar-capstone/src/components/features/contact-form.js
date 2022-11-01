import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    function sendEmail(event) {
        event.preventDefault();
    
        emailjs.sendForm('service_24j5q3s', 'template_s9l85qa', form.current, '0HetIxVnKwERhfPhN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset();
    }

    return (
        <form className='form' onSubmit={sendEmail} ref={form}>
            <div className="info">
                <div className="text">
                    <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    />
                </div>

                <div className="text">
                    <input className="last"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    />
                </div>
            </div>

            <div className="info">
                <div className="text">
                    <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    />
                </div>

                <div className="text">
                    <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    />
                </div>
            </div>

            <div className="text-area">
                <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                />
            </div>

            <div className="submit-button">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}