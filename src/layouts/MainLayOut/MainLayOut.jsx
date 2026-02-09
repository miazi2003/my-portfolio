import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../pages/Shared/navbar/Navbar';
import Footer from '../../pages/Shared/navbar/footer/Footer';
import Lenis from 'lenis';

const MainLayOut = () => {
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;