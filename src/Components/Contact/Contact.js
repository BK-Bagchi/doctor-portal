import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact-us">
            <h5 className="text-center text-uppercase">Contact Us</h5>
            <h2 className="text-center text-capitalize">Always connect with us</h2>
            <form className="d-flex flex-column mt-4">
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Subject" />
                <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
};

export default Contact;