import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
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
            <button type="button" className="btn btn-success py-3 px-5 fs-1">20% Sale Off</button>
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
            <h1>WelCome To My Dress Store</h1>
            <h3>Buy Your Best dress From Here</h3>
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
            <h1>Yes, You Choose The Right store</h1>
            <h3>Dressed Good Make One Happy</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </div>
  );
};

export default Banner;