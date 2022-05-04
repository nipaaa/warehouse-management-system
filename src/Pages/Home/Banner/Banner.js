import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);}
    return (
        <div>
             <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={600}
          src="https://i.ibb.co/6HD9RLc/banner-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>WelCome To My Photo Studio</h1>
          <h3>We make your young one's journey to past and future with smile and bring the images to life</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={600}
          src="https://i.ibb.co/hdW0c6D/banner-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='text-dark'>
          <h1>We'll Help You To Create a Great Memory</h1>
          <h3>We make your young one's journey to past and future with smile and bring the images to life</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={600}
          src="https://i.ibb.co/bBVshr5/banner-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='text-dark'>
          <h1>Come Here To Capture Your Moment</h1>
          <h3>
          We make your young one's journey to past and future with smile and bring the images to life
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            
        </div>
    );
};

export default Banner;