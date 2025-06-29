import React from 'react';

const Footer = () => {
    return (
        <>
        <div className='border border-gray-500'></div>
 <footer className="footer sm:footer-horizontal  footer-center text-gray-400 p-4 mx-auto max-w-7xl">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
</>
    );
};

export default Footer;