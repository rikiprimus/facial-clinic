import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../assets/styles/styles.css';

// import required modules
import { Pagination } from "swiper";

import img1 from "../assets/image/img-1.png";

const Testimonial = () => {
    return (
    <div id='testimoni' className="w-full flex flex-col items-center my-[100px] h-[500px] gap-12 p-8 bg-greys lg:px-[100px]">
        <h1 className="font-bold text-xl lg:text-2xl">Testimonial</h1>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        modules={[Pagination]}
        className="testimonialswiper"
      >
        <SwiperSlide>
            <div className="flex flex-col items-center justify-between gap-4">
                <div className="w-[100px] h-[100px]">
                    <img src={img1} alt="img1" className="h-[100px] rounded-full"/>
                </div>
                <div className="flex flex-col bg-white border-2 drop-shadow-md gap-2 w-[500px] lg:w-[400px] xl:w-[500px]">
                    <p className="text-base text-lightgrey ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugit in dolorem nobis dignissimos harum velit, maxime non ipsum minima aperiam atque similique odit, vero quaerat illum distinctio saepe nisi.</p>
                    <p className="font-bold text-darkgrey">Fiona</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center justify-between gap-4">
                <div className="w-[100px] h-[100px]">
                    <img src={img1} alt="img1" className="h-[100px] rounded-full"/>
                </div>
                <div className="flex flex-col bg-white border-2 drop-shadow-md gap-2 w-[500px] lg:w-[400px] xl:w-[500px]">
                    <p className="text-base text-lightgrey ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugit in dolorem nobis dignissimos harum velit, maxime non ipsum minima aperiam atque similique odit, vero quaerat illum distinctio saepe nisi.</p>
                    <p className="font-bold text-darkgrey">Chila</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center justify-between gap-4">
                <div className="w-[100px] h-[100px]">
                    <img src={img1} alt="img1" className="h-[100px] rounded-full drop-shadow-lg"/>
                </div>
                <div className="flex flex-col bg-white border-2 drop-shadow-md gap-2 w-[500px] lg:w-[400px] xl:w-[500px]">
                    <p className="text-base text-lightgrey ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugit in dolorem nobis dignissimos harum velit, maxime non ipsum minima aperiam atque similique odit, vero quaerat illum distinctio saepe nisi.</p>
                    <p className="font-bold text-darkgrey">Kiana</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center justify-between gap-4">
                <div className="w-[100px] h-[100px]">
                    <img src={img1} alt="img1" className="h-[100px] rounded-full drop-shadow-lg"/>
                </div>
                <div className="flex flex-col bg-white border-2 drop-shadow-md gap-2 w-[500px] lg:w-[400px] xl:w-[500px]">
                    <p className="text-base text-lightgrey ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugit in dolorem nobis dignissimos harum velit, maxime non ipsum minima aperiam atque similique odit, vero quaerat illum distinctio saepe nisi.</p>
                    <p className="font-bold text-darkgrey">Yanti</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial