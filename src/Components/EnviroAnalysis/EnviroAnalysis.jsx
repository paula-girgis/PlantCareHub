


import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function EnviroAnalysis() {
  const [plants, setPlants] = useState([]);
  const [selectedPlantId, setSelectedPlantId] = useState(null);
  const [plantDetails, setPlantDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const detailsRef = useRef(null); 
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


  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/EviroAnalysis")
      .then((response) => {
        setPlants(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the plant data!", error);
        setIsLoading(false);
      });
  }, []);

  const handleImageClick = (id) => {
    setSelectedPlantId(id);
    setIsLoading(true);
    axios
      .get(`/api/EviroAnalysis/${id}`)
      .then((response) => {
        setPlantDetails(response.data);
        setIsLoading(false);
        detailsRef.current?.scrollIntoView({ behavior: "smooth" });
      })
      .catch((error) => {
        console.error("There was an error fetching the plant details!", error);
        setIsLoading(false);
      });
  };

  return <>
  
      <div className="regiserBack  ">
  
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4  font Color animate-bounce">
          "Analyze Your Plant's Environment"
        </h1>
        <p className="text-gray-900 animate-pulse text-xl">
          Track and optimize your plant's environment for healthy growth.
        </p>
 

      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="loader border-t-4 border-green-500 w-16 h-16 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Plant Images Grid */}
      {!isLoading && (
        <div className="grid py-10 container cursor-pointer mx-auto grid-cols-2 md:grid-cols-4 gap-10 my-12">
          {plants.map((plant, index) => (
            <div
              key={index}
              className="group bg-transparent pb-3 text-center rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                onClick={() => handleImageClick(plant.id)}
              />
              <motion.div
                className="text-center py-4 font-semibold text-gray-800 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {plant.plantName}
              </motion.div>
            </div>
          ))}
        </div>
      )}

   
   
      {plantDetails && (
  <motion.div
    ref={detailsRef}
    className="container mx-auto mt-10 flex flex-col md:flex-row gap-8 items-start"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    

  >
    

    {/* Environmental Metrics Section */}
    <div className="w-full md:w-1/2 bg-green-950 Color bg-opacity-90 rounded-lg shadow-2xl p-14">
      <h3 className="font-bold text-2xl text-white mb-6">Environmental Metrics</h3>
      <div className="grid grid-cols-2 gap-6">
        {/* Temperature */}
        <div className="flex flex-col items-center justify-center p-5 bg-red-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <span className="text-red-500 text-4xl font-extrabold mb-2"><i class="fa-solid fa-temperature-three-quarters"></i></span>
          <p className="text-red-600 font-bold">Temperature</p>
          <p className="text-gray-700">Ideal: {plantDetails.tempreture} °C</p>
        </div>
        {/* Humidity */}
        <div className="flex flex-col items-center justify-center p-5 bg-purple-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <span className="text-purple-500 text-4xl font-extrabold mb-2"><i class="fa-solid fa-droplet"></i></span>
          <p className="text-purple-600 font-bold">Humidity</p>
          <p className="text-gray-700">Ideal: {plantDetails.humidity}%</p>
        </div>
        {/* Soil Moisture */}
        <div className="flex flex-col items-center justify-center p-5 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <span className="text-blue-500 text-4xl font-extrabold mb-2"><i class="fa-brands fa-pagelines"></i></span>
          <p className="text-blue-600 font-bold">Soil Moisture</p>
          <p className="text-gray-700">Ideal: {plantDetails.soilHumidity}%</p>
        </div>
        {/* Light Intensity */}
        <div className="flex flex-col items-center justify-center p-5 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <span className="text-yellow-500 text-4xl font-extrabold mb-2"><i class="fa-solid fa-sun"></i></span>
          <p className="text-yellow-600 font-bold">Light Intensity</p>
          <p className="text-gray-700">Ideal: {plantDetails.lightIntensity} Lux</p>
        </div>
      </div>
    </div>

    {/* How to Deal With It */}
    <motion.div
      className="w-full md:w-1/2 bg-transparent bg-opacity-90 rounded-lg p-8 shadow-2xl"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="font-bold text-3xl font  Color mb-6 text-center">
         How to Deal With {plantDetails.plantName}
      </h3>
      <div
        className="text-gray-900 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{
          __html: plantDetails.data,
        }}
      />
    </motion.div>


   
  </motion.div>
      )}

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
 
 
 

}

export default EnviroAnalysis;
