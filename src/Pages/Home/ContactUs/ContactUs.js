import React from 'react';

const ContactUs = () => {
    return (
        <div id='contactUs' className='row g-0 my-1'>
            <div className='col-lg-6 col-sm-12'>
            <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7289.142505088145!2d90.31701162295458!3d24.010912738321167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dda343fb798b%3A0x8eb85c599592cb2b!2sKonabari!5e0!3m2!1sen!2sbd!4v1651840092241!5m2!1sen!2sbd" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-lg-6 col-sm-12 bg-warning bg-opacity-25 text-center pt-5'>
                <h2 className='text-success text-center pt-lg-5 pb-3'>Contact Us</h2>
                <p><i className="text-success fs-5 pe-2 fa-solid fa-location-dot"></i> Konabari, Gazipur</p>
                <p><i className="text-success fs-5 pe-2 fa-solid fa-envelope"></i> nipa<i className="text-success fa-solid fa-at"></i>gmail.com</p>
                <p><i className="text-success fs-5 pe-2 fa-solid fa-phone-volume"></i> +880 17568651</p>
                <div className='text-success'>
                <i className="fs-2 p-3 fa-brands fa-facebook-square"></i>
                <i className="fs-2 p-3 fa-brands fa-instagram-square"></i>
                <i className="fs-2 p-3 fa-brands fa-linkedin"></i>
                <i className="fs-2 p-3 fa-brands fa-twitter-square"></i>
                </div>
            </div>
          
        </div>
    );
};

export default ContactUs;