import React from "react";
import { Rocket, Heart, BadgeCheck, Globe } from "lucide-react";
import CoreValueCard from "./CoreValueCard";

const CoreValuesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
       
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <p className="mt-4 text-gray-500">
            The principles that guide everything we do
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CoreValueCard
            icon={<Rocket className="w-6 h-6 text-white" />}
            title="Innovation First"
            description="We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
            bgColor="bg-indigo-500"
          />

          <CoreValueCard
            icon={<Heart className="w-6 h-6 text-white" />}
            title="Client Success"
            description="Our success is measured by our clients'success.We're committed to delivering exceptional value and lasting partnerships."
            bgColor="bg-pink-500"
          />

          <CoreValueCard
            icon={<BadgeCheck className="w-6 h-6 text-white" />}
            title="Quality Excellence"
            description="We maintain the highest standards of quality in everything we do,from code to client relationships."
            bgColor="bg-green-500"
          />

          <CoreValueCard
            icon={<Globe className="w-6 h-6 text-white" />}
            title="Global Collaboration"
            description="We believe in the power of diverse,global teams working together to solve complex challenges. "
            bgColor="bg-orange-500"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;