import React from 'react'

import classes from './Clients.module.css';

import l1 from '../../assets/logos/logo1.png';
import l2 from '../../assets/logos/logo2.png';
import l3 from '../../assets/logos/logo3.png';
import l4 from '../../assets/logos/logo4.png';
import l5 from '../../assets/logos/logo5.png';

const clients = () => {
    return (
        <section id="Clients" className={[classes.Clients , "py-1"].join(' ')}>
            <div className="container">
                <h2 className="m-heading text-center"><span className="text-primary">Our</span> Clients</h2>
                <div className={classes.Items} style={{marginTop: '1.5rem'}}>
                    <img src={l1} alt=""/>
                    <img src={l2} alt=""/>
                    <img src={l3} alt=""/>
                    <img src={l4} alt=""/>
                    <img src={l5}alt=""/>
                </div>
            </div>
        </section>
    )
}

export default clients
