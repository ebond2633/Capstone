import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import greenImage from '../assets/greenImage.jpg'; // Example image, add more as needed

const Carousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src={greenImage} alt="Green Plant" />
        <p className="legend">Green Plant</p>
      </div>
      {/* Add more slides as needed */}
      <div>
        <img src={greenImage} alt="Another Plant" />
        <p className="legend">Another Plant</p>
      </div>
    </Carousel>
  );
};

export default Carousel;