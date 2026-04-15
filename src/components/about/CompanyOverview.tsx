import React from "react";

const CompanyOverview = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-lime-600 mb-2">
            Who We Are
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Driven by passion, powered by technology
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Our Mission */}
          <div className="bg-white rounded-xl p-5 sm:p-6 text-left
            transition-all duration-300 ease-out cursor-pointer
            hover:scale-[1.03]"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              To deliver cutting-edge IT solutions that drive innovation,
              efficiency, and sustainable growth for businesses worldwide.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-xl p-5 sm:p-6 text-left
            transition-all duration-300 ease-out cursor-pointer
            hover:scale-[1.03]"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              To be a global leader in digital transformation, enabling
              organizations to unlock the full potential of technology.
            </p>
          </div>

          {/* Our Values */}
          <div className="bg-white rounded-xl p-5 sm:p-6 text-left
            transition-all duration-300 ease-out cursor-pointer
            hover:scale-[1.03]"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              Our Values
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>✔ Customer-Centric Innovation</li>
              <li>✔ Integrity & Transparency</li>
              <li>✔ Teamwork & Collaboration</li>
              <li>✔ Excellence in Delivery</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;