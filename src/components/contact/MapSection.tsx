import React from "react";

const MapSection = () => {
  return (
    <section className="mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Find Us <span className="text-purple-500">Here</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Visit our office for in-person consultations
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.2944461328127!2d-121.36461994631732!3d38.803269380086974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b24700acfaa2d%3A0xd087dfde6bfb5af0!2s9105%20Osterville%20Dr%2C%20Roseville%2C%20CA%2095747%2C%20USA!5e0!3m2!1sen!2sin!4v1776336562590!5m2!1sen!2sin" 
          width="100%"
          height="450"
          loading="lazy"
          className="border-0"
        />
      </div>
    </section>
  );
};

export default MapSection;
