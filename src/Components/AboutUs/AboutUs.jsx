import React, { useState } from "react";
import { motion } from 'framer-motion';
import Web from '../../assets/gradMaterial/WEB2.jpeg'; 
import A from '../../assets/gradMaterial/ashraf.jpg'; // ✅ image import

export default function AboutUs() {
  const [scrollDirection, setScrollDirection] = useState('down');

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
      <div className="regiserBack"> 
        <div className="container regiserBack mx-auto min-h-screen py-20">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="text-6xl font-extrabold font text-green-950 text-center py-8"
          >
            "Minds Behind PlantCare"
          </motion.h1>

          {/* Content Section */}
          <section className="max-w-7xl mx-auto py-16 grid grid-cols-1 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1.5 }} 
              className="flex flex-col justify-center px-8"
            >
              <p className="text-gray-900 text-xl container mx-auto text-center leading-relaxed mb-6">
                PlantCare leverages cutting-edge AI to diagnose plant diseases, explain their causes, and provide tailored solutions. With our vast library of plant care tips and remedies, we make it easier to grow healthy plants and nurture a greener world. Let us help you bring your plants to life.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1.5 }}
            >
              <img 
                src={Web} 
                alt="Team working" 
                className="w-full h-full container mx-auto object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </section>

          {/* Team Section */}
          <section className="max-w-7xl mx-auto px-10 py-10">
            <h2 className="text-6xl text-center text-green-950 font-semibold py-6 font">Our Team</h2>

            <div className="grid grid-cols-1 mt-6 gap-12">
              <motion.div 
                className="text-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
              >
                <img 
                  src={A} 
                  alt="AUC Team" 
                  className="w-64 h-64 object-cover object-center mx-auto rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">PlantCare Team</h3>
                <p className="text-sm text-gray-600">Developers & Designers from AUC</p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      <motion.button
        onClick={scrollToSection}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-900 via-green-600 to-green-700 text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
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
