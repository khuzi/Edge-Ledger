import React from "react";

import classes from './Map.module.css'

const Mapped = () => {
  return (
  
      <div data-aos="fade-up" className={classes.Map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3276014600924!2d67.04174581437172!3d24.886804750331613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e579921a9b5%3A0x7be9fa1d645fe7fa!2sDefence%20Phase%203%20Jahangir%20Road%20Quarters%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1593698400609!5m2!1sen!2s"
        style={{
            height: '100%',
            width: '100%',
            border: 'none'
        }}
        title="edge"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  
  );
};
export default Mapped;

