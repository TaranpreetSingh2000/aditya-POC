import React from "react";

const Herobanner = () => {

    return (
    <div className="bg-[#ededf0] w-full p-10 flex flex-col md:flex-row-reverse items-center justify-between">
      <div className="banner-image w-full md:w-1/2">
        <img src='/hero.png' className="w-full" alt="" />
      </div>
      <div className="banner-content font-sans flex flex-col space-y-8 w-full md:w-1/2">
        <div className="banner-title">
          <h2 className="text-[#2a2e34] font-bold text-5xl mb-2">Learn, Plan, Grow</h2>
          <span className="text-[#2a2e34] text-5xl">Manage Your Money Wisely</span>
        </div>
        <div className="banner-description mb-2">
          <p className="text-gray-500 text-lg font-medium">
            Financial literacy isn't one-size-fits-all. Whether you're a
            student, gig worker, or retiree, we offer tailored resources to
            guide your journey.
          </p>
        </div>

        <div className="banner-cta">
          <button className="bg-[#2a2e34] text-white px-8 py-4 rounded-full">
            Start Learning Today
          </button>
        </div>
      </div>

    </div>
  );
};

export default Herobanner;
