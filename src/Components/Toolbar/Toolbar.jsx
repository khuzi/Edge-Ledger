import React from 'react'


import classes from  './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
    return (
        <nav className={classes.Navbar}>
            <h1 className={classes.Logo}>
                <span className="text-primary">
                    <i className="fas fa-book-open"></i> Edge
                </span>Ledger
            </h1>
            {<NavigationItems />}
        </nav>
    );
};

export default Toolbar
