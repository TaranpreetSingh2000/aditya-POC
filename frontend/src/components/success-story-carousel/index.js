"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    text: "What are the best investment strategies for beginners?",
    name: "Manish Kumar",
    responses: 102,
  },
  {
    text: "How can I start budgeting effectively?",
    name: "Manish Kumar",
    responses: 102,
  },
  {
    text: "What are the best ways to save money on a low income?",
    name: "Manish Kumar",
    responses: 102,
  },
];

const SuccessStoryCarousel = () => {
  return (
    <div className="w-[400px] h-[350px] my-10 flex flex-col items-center justify-center relative overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        direction="vertical"
        slidesPerView={2.6} 
        spaceBetween={-30} 
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`relative flex flex-col p-6 shadow-lg border border-gray-300 rounded-xl transition-all duration-300 overflow-hidden 
                ${isActive ? "bg-white scale-100 z-10 -translate-y-10" : "bg-gray-100 scale-90 translate-y-10 opacity-80 z-0"}`}
              >
                <p className="text-lg font-semibold text-gray-900">{item.text}</p>
                <p className="text-sm text-gray-500 mt-2">- Author</p>
                <p className="text-md font-bold">{item.name}</p>
                
                {/* Responses & Button Section */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="w-5 h-5 bg-gray-400 rounded-full"></span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{item.responses} Responses</span>
                  </div>
                  <button className="bg-gray-900 text-white px-4 py-2 text-sm rounded-lg">Respond</button>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessStoryCarousel;
