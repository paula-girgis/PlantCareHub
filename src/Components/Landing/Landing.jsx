import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import F1 from '../../assets/gradMaterial/A1.png'; 
import F2 from '../../assets/gradMaterial/A2.png'; 
import F3 from '../../assets/gradMaterial/A3.png'; 
import F4 from '../../assets/gradMaterial/A4.png'; 
import F5 from '../../assets/gradMaterial/A5.png'; 
import F6 from '../../assets/gradMaterial/A6.png'; 
import F7 from '../../assets/gradMaterial/A7.png'; 
import F8 from '../../assets/gradMaterial/A8.png'; 

const images = [
    { id: 1, src: F1, caption: "Fungal disease affects apples. Bright orange spots on leaves. Spread by cedar." },
    { id: 2, src: F2, caption: "Thrives in well-drained soil. Green leaves, firm fruit. No signs of disease." },
    { id: 3, src: F3, caption: "Caused by heat, water stress. Dry, brown edges on leaves. Affects growth and yield." },
    { id: 4, src: F4, caption: "Stunts growth, reduces yield. Spread by whitefly insects. Curling, yellowing leaves." },
    { id: 5, src: F5, caption: "Thrives in warm, moist conditions. Dark, concentric spots on leaves. Fungal disease, reduces yield." },
    { id: 6, src: F6, caption: "Bright green leaves, red berries. No signs of pests or disease. Grows in well-drained soil." },
    { id: 7, src: F7, caption: "Vibrant green leaves, ripe grapes. No signs of pests or disease. Thrives in well-drained soil." },
    { id: 8, src: F8, caption: "Firm, smooth skin, healthy leaves. No pests or disease present. Grows in well-drained soil." },
];

export default function Landing() {
  const navigate = useNavigate();
  const [scrollDirection, setScrollDirection] = useState('down');


  const isUserLoggedIn = () => {
    const userToken = localStorage.getItem('userToken');
    console.log("User Token: ", userToken); // Debugging line
    return userToken !== null; // User is logged in if there is a token
  };
  
  const handleImageClick = () => {
    if (isUserLoggedIn()) {
      // User is logged in, navigate to the library
      navigate('/home');
    } else {
      // User is not logged in, navigate to login page
      navigate('/login');
    }
  };


  const scrollToSection = () => {
    if (scrollDirection === 'down') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      setScrollDirection('up');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setScrollDirection('down');
    }
  };

  return (
    <>
      <div className="FirstLanding flex items-center justify-center">
        <div className="py-32 text-center">
          <motion.h1
            className="font text-white font-extrabold mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Find your plant to <br /> care here
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-white pb-8 font-bold text-xl mb-6">
              Plant care involves several key aspects <br />
              to ensure your plants remain healthy <br /> and thrive.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pt-16 pb-28 regiserBack">
        <h1 className="font Color text-center font-extrabold mb-10">What’s troubling your plant</h1>

        <div className="max-w-7xl mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {images.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer relative group"
              onClick={handleImageClick}
            >
              <img src={image.src} alt={image.caption} className="h-64 w-96 rounded-lg object-cover" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out"
              >
                <p className="text-white text-center font-semibold px-4">{image.caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />

      <motion.button
        onClick={scrollToSection}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-900 via-green-600 to-green-700 text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        {scrollDirection === 'down' ? (
          <span className="text-2xl">↓</span>
        ) : (
          <span className="text-2xl">↑</span>
        )}
      </motion.button>
    </>
  );
}
