import React from 'react';

const AboutUs = () => {
    return (
        <div id='aboutUs' className='bg-dark text-center py-5 bg-opacity-75'>
            <h1 className='text-warning mb-4'>Get To Know Us</h1>
            <div className='row g-0 py-3'>
                <div className='col-lg-4 col-sm-12 px-5'>
                <i class="fs-1 text-white fa-solid fa-people-roof"></i>
                <h4 className='text-warning my-3'>LEADERSHIP</h4>
                <p className='text-white'> Our multicultural leaders have deep start-up and enterprise experience with good quality fabric. </p>
                </div>
                <div className='col-lg-4 col-sm-12 px-5'>
                <i class="fs-1 text-white fa-solid fa-chalkboard-user"></i>
                <h4 className='text-warning my-3'>CAREERS</h4>
                <p className='text-white'> We take great pride i our market leadership position, thanks to the hard work of our incredibly talented.  </p>
                </div>
                <div className='col-lg-4 col-sm-12 px-5'>
                <i class="fs-1 text-white fa-solid fa-handshake"></i>
                <h4 className='text-warning my-3'>PARTNERSHIP</h4>
                <p className='text-white'> From research, to events, to platform partnership, we work with thought leaders to provide more actionable data.</p>
                </div>

            </div>
            
        </div>
    );
};

export default AboutUs;