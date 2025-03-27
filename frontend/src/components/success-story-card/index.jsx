"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    image: "https://dummyimage.com/300X300/fff",
    text: "I used to live paycheck to paycheck with no real savings plan. After going through ABC's Financial Planning resources, I learned how to budget effectively and set achievable financial goals. Within a year, I built an emergency fund and started investing in mutual funds. Today, I feel financially secure and confident about my future!.",
    name: "S. Mehta",
    title: "Small Business Owner",
  },
  {
    image: "https://dummyimage.com/300X300/fff",
    text: "I used to live paycheck to paycheck with no real savings plan. After going through ABC's Financial Planning resources, I learned how to budget effectively and set achievable financial goals. Within a year, I built an emergency fund and started investing in mutual funds. Today, I feel financially secure and confident about my future.",
    name: "A. Sharma",
    title: "Entrepreneur",
  },
  {
    image: "https://dummyimage.com/300X300/fff",
    text: "I used to live paycheck to paycheck with no real savings plan. After going through ABC's Financial Planning resources, I learned how to budget effectively and set achievable financial goals. Within a year, I built an emergency fund and started investing in mutual funds. Today, I feel financially secure and confident about my future.",
    name: "K. Patel",
    title: "Freelancer",
  },
  {
    image: "https://dummyimage.com/300X300/fff",
    text: "I used to live paycheck to paycheck with no real savings plan. After going through ABC's Financial Planning resources, I learned how to budget effectively and set achievable financial goals. Within a year, I built an emergency fund and started investing in mutual funds. Today, I feel financially secure and confident about my future.",
    name: "K. Patel",
    title: "Freelancer",
  },
  {
    image: "https://dummyimage.com/300X300/fff",
    text: "I used to live paycheck to paycheck with no real savings plan. After going through ABC's Financial Planning resources, I learned how to budget effectively and set achievable financial goals. Within a year, I built an emergency fund and started investing in mutual funds. Today, I feel financially secure and confident about my future.",
    name: "K. Patel",
    title: "Freelancer",
  },
];

const SuccessStoryCard = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="flex flex-col mt-10 max-w-7xl bg-[#f9f9fb] p-6">
      <div className="navigation-buttons md:text-right mb-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-8 h-8 md:w-12 md:h-12 bg-white rounded-md md:rounded-xl inline-block mx-3 transition-all duration-500 ${
              activeIndex === i ? " bg-gray-400 border border-gray-200 scale-150 shadow-sm text-white" : ""
            }`}
          >
          </button>
        ))}
      </div>

      <div className="w-full pb-8">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} 
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col md:flex-row gap-8 mt-9 px-6">
                <div className="success-image md:w-1/4 flex items-center">
                  <img
                    src={item.image}
                    className="border-2 border-gray-200 bg-white rounded-3xl"
                    alt="Profile"
                  />
                </div>

                <div className="success-content md:w-3/4 p-10 bg-white shadow-lg border-2 border-gray-200 rounded-3xl">
                  <p className="text-lg text-[#302f2f] leading-8">
                    {item.text}
                  </p>

                  <div className="mt-4">
                    <p className="text-lg font-semibold text-black">
                      {item.name}
                    </p>
                    <p className="text-md text-gray-500">{item.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
