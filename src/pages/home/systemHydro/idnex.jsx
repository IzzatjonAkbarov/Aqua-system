import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import comp from "../../../shared/assets/icons/comp.svg";

const SystemHydro = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      title: "В квартирах",
      text: "В домашних условиях можно было размещать асики, но потолок размещения упирался в выделение шума и тепла...",
    },
    {
      title: "Для дачи или дома",
      text: "В домашних условиях можно было размещать асики, но потолок размещения упирался в выделение шума и тепла...",
    },
    {
      title: "Для предприятий",
      text: "В домашних условиях можно было размещать асики, но потолок размещения упирался в выделение шума и тепла...",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      <p className="font-medium text-[35px] text-[#222834] max-[350px]:text-[25px]">
        Где применяют систему ?
        <br />
        <span className="text-[#06f]">AquaSystem Hydro</span>
      </p>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-5">
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#222834] p-10 rounded-2xl text-white">
                <img src={comp} alt="" />
                <h1 className="font-bold mt-5 mb-3 text-start">
                  {slide.title}
                </h1>
                <p className="text-[14px] text-start">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SystemHydro;
