import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import p1 from '../../assets/gradMaterial/p100.jpg';
import p2 from '../../assets/gradMaterial/101.jpg';
import p3 from '../../assets/gradMaterial/102.jpg';

import a1 from '../../assets/gradMaterial/a1.jpg';
import a2 from '../../assets/gradMaterial/a2.jpg';
import a3 from '../../assets/gradMaterial/a3.jpg';
import a4 from '../../assets/gradMaterial/a4.jpg';

import G1 from '../../assets/gradMaterial/G1.png';
import G2 from '../../assets/gradMaterial/G2.png';
import G3 from '../../assets/gradMaterial/G3.png';


import mobile from '../../assets/gradMaterial/mobile.png';
import Library from '../../assets/gradMaterial/library22.png';
import chat from '../../assets/gradMaterial/chat.png';

import Footer from "../Footer/Footer";


const Home = () => {

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


  return <>
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center main">
        
      <h1 className="text-6xl text-center font lg:text-7xl font-extrabold text-gray-100 m-4 animate-bounce transition-all duration-1 ease-in-out">Start your green journey today. <br /> </h1>

    </section>
    
      <section className="pb-32 regiserBack relative ">
          <section className="pt-20 pb-24">
              <h2 className="text-6xl text-center font-extrabold Color mb-6 font">
                Explore Our Services
              </h2>

        <div className="max-w-6xl mx-auto">
          <Swiper
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="rounded-full shadow-lg"
          >
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10 bg-green-900 text-white rounded-lg p-10">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-4 font">Plant Identification</h3>
                  <p className="text-lg mb-4">
                    If you aren’t sure what plant you have, just take a picture of it, and FloraCheck will instantly let you know what it is and what it needs.
                  </p>
                </div>
                <img src={mobile}
                  alt="Plant Identification"
                  className="w-72 h-72 object-cover rounded-full shadow-2xl"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10 bg-gray-100 text-green-800 rounded-lg p-10">
                <img src={Library} alt="Library of Plants"
                  className="w-72 h-72 object-cover rounded-full shadow-2xl"
                />
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-4 font ">Library of Plants</h3>
                  <p className="text-lg text-green-950">Library is a comprehensive and user-friendly resource designed to provide detailed information about various plant diseases and their treatments. It allows users to explore for specific diseases.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10 bg-green-900 text-white rounded-lg p-10">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-4 font">Join ChatBot</h3>
                  <p className="text-lg">Chatbot is an interactive virtual assistant designed to provide real-time plant care support. Users can ask questions about plant diseases, treatments, and general care practices.</p>
                </div>
                <img src={chat} alt="Join ChatBot" className="w-72 h-72 object-cover rounded-full shadow-2xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>


            <div className="absolute inset-0 bg-black bg-opacity-5 z-0"></div>
          
            <div className="container mx-auto text-center relative z-10">
              <h2 className="text-7xl font-bold font Color mb-4">Plant Research & Studies</h2>
              <p className="text-gray-900 mb-20">
                Explore the latest plant research findings and studies on plant diseases and their solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

                <motion.div
                  className="p-10 bg-transparent shadow-2xl hover:scale-105 transition-transform rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={p1}
                    alt="Research 1"
                    className="w-20 h-20 mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-2xl font-semibold text-green-800  mb-2">Plant Disease Research</h3>
                  <p className="text-gray-900">
                    Over 1,200 research papers have been published on plant diseases and their solutions in the last decade.
                  </p>
                </motion.div>

                <motion.div
                  className="p-10 bg-transparent shadow-2xl hover:scale-105 transition-transform rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={p2}
                    alt="Research 1"
                    className="w-20 h-20 mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-2xl font-semibold text-green-800  mb-2">New Treatments</h3>
                  <p className="text-gray-900">
                    A total of 500+ new treatment methods and organic solutions have been developed.
                  </p>
                </motion.div>

                <motion.div
                  className="p-10 bg-transparent shadow-2xl hover:scale-105 transition-transform rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={p3}
                    alt="Research 1"
                    className="w-20 h-20 mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-2xl font-semibold text-green-800  mb-2">Soil Health Studies</h3>
                  <p className="text-gray-900">
                    Ongoing studies on soil health have led to 350+ breakthroughs in sustainable plant.
                  </p>
                </motion.div>

              </div>
            </div>
      </section>

          <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-green-900 text-gray-50  p-8">
        <h1 className="text-4xl text-center p-2  font font-bold mb-10">Artificial Intelligence & Plants</h1>
        <p className="mb-8 text-center text-lg leading-relaxed">
          Artificial intelligence (AI) is revolutionizing agriculture by improving the way we grow plants and manage crops. Through AI-powered systems, farmers can optimize plant health, monitor growth, and predict yield outcomes with remarkable accuracy.
        </p>
    

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 p-10">
          <img
            src={a1}
            alt="AI Monitoring Plants"
            className="object-cover w-full h-40 rounded-full shadow-2xl"
          />
          <img
            src={a2}
            alt="Optimized Agriculture"
            className="object-cover w-full h-40 rounded-full shadow-2xl"
          />
          <img
            src={a3}
            alt="Smart Farming"
            className="object-cover w-full h-40 rounded-full shadow-2xl"
          />
          <img
            src={a4}
            alt="Healthy Plants"
            className="object-cover w-full h-40 rounded-full shadow-2xl"
          />
        </div>
      </div>

      <div className="bg-gray-100">

          <div className=" flex items-center mx-auto justify-center h-screen  relative">
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gray-100 rotate-45 z-10"></div>
          <div className="absolute text-3xl font-bold text-green-800 font z-10">PlantCare</div>

          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-3/4 h-3/4">
            <img src={p1} alt="Tomato Plant" className="w-full h-full object-cover rounded-lg" />
            <img src={G1} alt="Blueberry Plant" className="w-full h-full object-cover rounded-lg" />
            <img src={G2} alt="Grapes Plant" className="w-full h-full object-cover rounded-lg" />
            <img src={G3} alt="Strawberry Plant" className="w-full h-full object-cover rounded-lg" />
          </div>
          </div>
          </div>
          </div>

     <Footer/>

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
   
  
};

export default Home;
