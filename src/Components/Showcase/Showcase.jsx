import React from "react";

import Classes from "./Showcase.module.css";
import Button from '../../UI/Button/Button';

const Showcase = () => {
  return (
    <header>
      <div id="Home" className={Classes.Showcase}>
        <div className={Classes.ShowcaseContent}>
          <h1 data-aos="zoom-in" className="l-heading">The Sky Is The Limit</h1>
          <p  data-aos="zoom-in" className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            natus tempore consequatur necessitatibus eos fuga!
          </p>
          <Button primary>Read More</Button>
        </div>
      </div>
    </header>
  );
};

export default Showcase;
