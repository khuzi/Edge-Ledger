import React from 'react'

import classes from './What.module.css';
import Item from './Item/Item';

const para = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>

const What = () => {
    return (
        <section id="What" className={[classes.What , "bg-light py-1"].join(' ')}>
            <div className="container">
                <h2 className="m-heading text-center"><span className="text-primary">What</span> We Do</h2>
                <div className={classes.Items}>
                    <Item classesFw="fas fa-university fa-2x" heading1="Investment" heading2="Banking" para={para}/>
                    <Item classesFw="fas fa-book-reader fa-2x" heading1="Portfolio" heading2="Management" para={para}/>
                    <Item classesFw="fas fa-pencil-alt fa-2x" heading1="Tax & " heading2="Custodial" para={para}/>
                </div>
            </div>
        </section>
    );
};

export default What;
