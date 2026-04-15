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
          src="https://www.google.com/maps?q=Qream%20Solutions%20Private%20Limited%20Bangalore&output=embed"
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
