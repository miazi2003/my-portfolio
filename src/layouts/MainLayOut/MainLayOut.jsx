import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../pages/Shared/navbar/Navbar';
import Footer from '../../pages/Shared/navbar/footer/Footer';

const MainLayOut = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;