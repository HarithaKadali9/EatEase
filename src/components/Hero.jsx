import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import burger from '../assets/burger.jpg';

const Hero = () => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFindMe = () => {
    if (location) {
      // Open the location in Google Maps
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
      window.open(googleMapsUrl, "_blank");
    } else {
      alert("Please enter a location");
    }
  };

  return (
    <div className="relative">
      {/* Hero Header */}
      <div className="flex items-center justify-center min-h-screen bg-food-image-4 bg-cover bg-center relative">
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-center relative z-10">
          <img src={burger} className="h-80 w-80 rounded-full shadow-lg" alt="Delicious Burger" />
          <h1 className="text-5xl text-white font-extrabold">Welcome To <span className="text-red-900">EatEase!!!</span></h1>
          <p className="text-2xl text-orange-800 font-semibold mt-2">The secret ingredient is always love.</p>
          <p className="text-lg text-white font-medium max-w-xl mx-auto">
            At EatEase, we believe that great food isn't just a meal, it's an experience. From fresh ingredients to handpicked recipes, every dish tells a story of flavor, passion, and care. Let us bring the joy of eating straight to your table, effortlessly.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className='max-w-1600px hero mx-auto grid sm:grid-cols-2 sm:h-[500px] gap-4 mt-6' id='hero'>
        {/* First Image with Quote */}
        <div className='relative rounded-xl bg-food-image bg-cover bg-center flex justify-center items-center h-[300px] sm:h-full'>
          <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <p className='text-3xl sm:text-4xl font-semibold text-white px-6 text-center' style={{ fontFamily: "'Playfair Display', serif" }}>
              "With every dish, we bring joy to your table—where flavor meets convenience, right at your fingertips."
            </p>
          </div>
        </div>

        {/* Second Image with Location Search */}
        <div className='bg-food-image-2 bg-cover bg-center w-full flex flex-col justify-center text-center text-white p-6 h-[300px] sm:h-full'>
          <h2 className='text-2xl font-bold mb-4'>Find Your Favorite Food</h2>
          <div className='bg-white rounded-xl w-[300px] md:w-[700px] mx-auto grid grid-cols-10 p-4 shadow-lg'>
            <form className='border border-gray-300 shadow-xl col-span-7 sm:col-span-8 flex justify-between items-center max-w-[700px] mx-auto w-full p-1 rounded-md text-black bg-gray-100/90'>
              <input
                className='ml-4 bg-transparent focus:outline-none text-lg placeholder-gray-500'
                type='text'
                value={location}
                onChange={handleLocationChange}
                placeholder='Type your location...'
              />
              <button className='text-3xl text-orange-500 hover:text-red-500 transition-colors duration-200'>
                <AiOutlineSearch />
              </button>
            </form>
            <button
              onClick={handleFindMe}
              className='col-span-2 mx-auto my-auto rounded-lg h-12 w-24 overflow-hidden border border-orange-500 bg-orange-500 text-white shadow-2xl hover:bg-red-500 transition-colors duration-200'
            >
              <span className="relative z-10">Find Me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
