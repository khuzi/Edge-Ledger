import React from "react";

import classes from "./Who.module.css";
import AOS from 'aos';

AOS.init();
const Who = () => {
  return (
    <section id="Who" className={classes.Who}>
      <div data-aos="flip-left" className={classes.WhoImg}></div>
      <div  data-aos="flip-right" className={[classes.WhoText , "bg-dark p-2"].join(' ')}>
        <h2>
          <span className="text-primary m-heading">Who</span> We Are
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum
          aspernatur quia aut non optio illum, tempore maiores esse eum, vel
          officia? Quisquam, doloremque. Porro ipsum incidunt aut tempora
          tenetur?
        </p>
        <h3>Our Team</h3>
        <ul className="list">
            <li>Muhammad Mohsin Mustafa: CEO</li>
            <li>Muhammad Khuzaima Yaseen: CEO</li>
            <li>Abdul Qadir: Accountant</li>
            <li>Sheroz Asif: Lead Accountant</li>
            <li>Salman Siddique: Investmant Manager</li>
            <li>Maaz Bin Tausif: Senior Accountant</li>
        </ul>
      </div>
    </section>
  );
};

export default Who;
