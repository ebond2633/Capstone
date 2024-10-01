import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import pictureOne from '../assets/plants.jpeg';
import pictureTwo from '../assets/officeplants.jpeg';
import pictureThree from '../assets/greenImage.jpg';

const slides = [
  { image: pictureOne, text: 'Discover Our Plant Collection', link: '/products' },
  { image: pictureTwo, text: 'Transform Your Office Space', link: '/products' },
  { image: pictureThree, text: 'Bring Nature Indoors', link: '/products' },
  { image: pictureOne, text: 'Sustainable Green Solutions', link: '/products' }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full relative">
            <img 
              className="w-full h-96 object-cover filter brightness-75" 
              src={slide.image} 
              alt={slide.text} 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black bg-opacity-50">
              <Leaf className="text-white mb-4" size={48} />
              <h2 className="text-3xl font-bold text-white mb-4 text-center px-4">{slide.text}</h2>
              <Link 
                to={slide.link} 
                className="text-center text-green-900 px-8 py-3 rounded-full bg-white hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                Explore Now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 focus:outline-none transition duration-300 ease-in-out"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 focus:outline-none transition duration-300 ease-in-out"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;