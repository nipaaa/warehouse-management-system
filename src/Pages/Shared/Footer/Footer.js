import React from 'react';

const Footer = () => {
    return (
        <div className='row g-0 py-5 bg-dark text-white'>
            <div className="col-lg-3 col-sm-6 text-center">
                <h2><i className="text-warning fa-solid fa-truck"></i></h2>
                 <h5>COD</h5>
                 <p>Cash on Delivery</p>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
            <h2><i className="text-warning fa-solid fa-gift"></i></h2>
                 <h5>Free Gift Box</h5>
                 <p>Buy a Gift</p>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
            <h2><i className="text-warning fa-solid fa-phone"></i></h2>
                 <h5>Contact Us</h5>
                 <p>Free Support 24/7</p>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
            <h2><i className="text-warning fa-solid fa-life-ring"></i></h2>
                 <h5>+ 88 111 222 333</h5>
                 <p>Free support line</p>
            </div>
            
        </div>
    );
};

export default Footer;