import React from 'react'

import classes from './Item.module.css';

const Item = (props) => {
    return (
        <div className={classes.Item}>
            <i className={props.classesFw}></i>
            <div>
                <h3>{props.heading1}</h3>
                <h3>{props.heading2}</h3>
                {props.para}
            </div>
        </div>
    )
}

export default Item
