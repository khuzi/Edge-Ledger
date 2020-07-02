import React from 'react'


import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = () => {
    return (
        <ul className={classes.NavList}>
            <NavigationItem itemName="Home"    link="Home"/>
            <NavigationItem itemName="What"    link="What"/>
            <NavigationItem itemName="Who"     link="Who"/>
            <NavigationItem itemName="Contact" link="Contact"/>
        </ul>
    );
};

export default NavigationItems;
