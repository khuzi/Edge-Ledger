import React from 'react'
import { Link } from 'react-scroll';

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={classes.ListItem}>
            <Link to={props.link} duration={500} offset={-150} spy={true} smooth={true} activeClass={classes.active}>{props.itemName}</Link>
        </li>        
    );
};

export default NavigationItem;
