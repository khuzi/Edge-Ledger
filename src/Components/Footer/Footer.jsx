import React from 'react'

const Footer = () => {
    return (
        <section className="bg-dark text-center py-1">
            <div className="container">
               <p>Copyright &copy; {new Date().getFullYear()}, EdgeLedger, All Rights Reserved</p>
            </div>
        </section>
    );
};

export default Footer;
