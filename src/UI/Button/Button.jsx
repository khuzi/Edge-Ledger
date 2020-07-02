import React from 'react'
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <a data-aos="zoom-in" className={props.primary ? classes.ButtonPrimary : classes.ButtonDark} href={props.link} onClick={props.clicked}>{props.children}</a>
    );
};

export default Button;
