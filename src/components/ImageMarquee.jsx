import React from 'react';
import { Link } from 'react-router-dom';

const images = [
  '/assets/images/kush-a.jpg',
  '/assets/images/kush-b.jpg',
  '/assets/images/kush-c.jpg',
  '/assets/images/kush-d.jpg',
  '/assets/images/kush-q.jpg',
];

const ImageMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black py-12">
      <div className="flex animate-marquee">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-48 mx-4">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={index + images.length} className="flex-shrink-0 w-64 h-48 mx-4">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <Link to="/events">
          <button className="border-2 border-red-600 bg-transparent text-white-marble font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 hover:border-red-700 transition-colors duration-300 flex items-center justify-center gap-1">
            See More Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageMarquee;
