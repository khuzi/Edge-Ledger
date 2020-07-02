import React from 'react'

import Toolbar from '../../Components/Toolbar/Toolbar';
import Showcase from '../../Components/Showcase/Showcase';
import What from '../../Components/WhatWeDo/What';
import Who from '../../Components/WhoWeAre/Who';
import Clients from '../../Components/Clients/Clients';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Toolbar />
            <Showcase />
            <What />
            <Who />
            <Clients />
            <Contact />
            <Footer />
        </div>
    );
};

export default Layout;
