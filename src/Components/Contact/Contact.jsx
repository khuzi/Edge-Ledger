import React from 'react'

import classes from './Contact.module.css';
import Map from './Map/Map';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const Contact = () => {
    return (
        <section id="Contact" className={classes.Contact}>
            <div data-aos="fade-down" className={[classes.ContactForm , "bg-primary p-2"].join(' ')}>
                <h2 className="m-heading">Contact Us</h2>
                <p>Please use the form below to contact us</p>
                <form action="">
                    <Input label="Name" for="name" element="input" type="text" name="name" id="name" placeholder="Enter Name"/>
                    <Input label="Email" for="email" element="input" type="email" name="email" id="email" placeholder="Enter Email"/>
                    <Input label="Phone Number" for="phone" element="input" type="text" name="phone" id="phone" placeholder="Enter Phone Number"/>
                    <Input label="Message" for="message" element="textarea"  name="message" id="massage" placeholder="Enter Message"/>
                    <Button>Send</Button>
                </form>
            </div>
            <Map />
        </section>
    );
};

export default Contact;
