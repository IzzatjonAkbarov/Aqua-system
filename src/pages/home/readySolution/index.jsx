import React from "react";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import bitcoin from "../../../shared/assets/icons/bitcoin.svg";
import equihash from "../../../shared/assets/icons/equihash.svg";
import task1 from "../../../shared/assets/images/bgimg.png";
import speed from "../../../shared/assets/icons/speed.svg";
import heater1 from "../../../shared/assets/icons/heater1.svg";
import recording1 from "../../../shared/assets/icons/recording1.svg";
import s19hydro from "../../../shared/assets/images/s19hydro.png";

import "swiper/css/navigation";
import "swiper/css";
const ReadySolution = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="flex items-center justify-between py-10 max-[630px]:flex-col max-[630px]:gap-5 max-[630px]:text-center">
        <p className="font-medium text-[35px] tetx-[222834] p-0 m-0 max-[350px]:text-[25px]">
          Готовые решения
          <br />
          <span className="text-[#06f]">AquaSystem</span>
        </p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 text-white font-bold bg-[#222834] rounded-4xl pl-5 p-1.5 w-fit">
            <p className="max-[2320px]:text-[14px]">Bitcoin</p>
            <div className="p-2 rounded-full bg-white">
              <img src={bitcoin} alt="" />
            </div>{" "}
          </div>
          <div className="flex items-center gap-2.5 bg-white font-bold text-[#222834] rounded-4xl pl-5 p-1.5 w-fit border-2 border-gray-400">
            <p className="max-[2320px]:text-[14px]">Equihash</p>
            <div className="p-2 rounded-full bg-[#06f]">
              <img src={equihash} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
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
            1100: { slidesPerView: 2 },
            280: { slidesPerView: 1 },
          }}
          className="relative">
          <SwiperSlide>
            <div className=" ">
              <div
                className="w-full  h-full  bg-cover bg-center max-[320px]:p-5   p-10 flex items-center justify-between text-[white] rounded-2xl max-[700px]:flex-col-reverse
          "
                style={{ backgroundImage: `url(${task1})` }}>
                <div className="w-[50%] max-[700px]:w-full">
                  <h1 className="text-[28px] font-medium max-[400px]:text-[20px]">
                    Система охлаждения Antminer S19 hydro
                  </h1>
                  <div className="flex flex-col gap-3 pt-5">
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={speed} alt="" />
                      <h1>Разгон: 112Th</h1>
                    </p>
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={heater1} alt="" />
                      <h1>Отопление дома</h1>
                    </p>
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={recording1} alt="" />
                      <h1>Снижение шума до уровня ПК</h1>
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-3">
                    <Button type="primary" size="large">
                      Подробнее
                    </Button>
                    <p>от 800$</p>
                  </div>
                </div>
                <div className="w-[40%] max-[700px]:w-fit max-[700px]:mx-auto">
                  <img src={s19hydro} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" ">
              <div
                className="w-full  h-full  bg-cover bg-center max-[320px]:p-5   p-10 flex items-center justify-between text-[white] rounded-2xl max-[700px]:flex-col-reverse
          "
                style={{ backgroundImage: `url(${task1})` }}>
                <div className="w-[50%] max-[700px]:w-full">
                  <h1 className="text-[28px] font-medium max-[400px]:text-[20px]">
                    Система охлаждения Antminer S19 hydro
                  </h1>
                  <div className="flex flex-col gap-3 pt-5">
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={speed} alt="" />
                      <h1>Разгон: 112Th</h1>
                    </p>
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={heater1} alt="" />
                      <h1>Отопление дома</h1>
                    </p>
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={recording1} alt="" />
                      <h1>Снижение шума до уровня ПК</h1>
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-3">
                    <Button type="primary" size="large">
                      Подробнее
                    </Button>
                    <p>от 800$</p>
                  </div>
                </div>
                <div className="w-[40%] max-[700px]:w-fit max-[700px]:mx-auto">
                  <img src={s19hydro} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" ">
              <div
                className="w-full  h-full  bg-cover bg-center max-[320px]:p-5   p-10 flex items-center justify-between text-[white] rounded-2xl max-[700px]:flex-col-reverse
          "
                style={{ backgroundImage: `url(${task1})` }}>
                <div className="w-[50%] max-[700px]:w-full">
                  <h1 className="text-[28px] font-medium max-[400px]:text-[20px]">
                    Система охлаждения Antminer S19 hydro
                  </h1>
                  <div className="flex flex-col gap-3 pt-5">
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={speed} alt="" />
                      <h1>Разгон: 112Th</h1>
                    </p>
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={heater1} alt="" />
                      <h1>Отопление дома</h1>
                    </p>
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={recording1} alt="" />
                      <h1>Снижение шума до уровня ПК</h1>
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-3">
                    <Button type="primary" size="large">
                      Подробнее
                    </Button>
                    <p>от 800$</p>
                  </div>
                </div>
                <div className="w-[40%] max-[700px]:w-fit max-[700px]:mx-auto">
                  <img src={s19hydro} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" ">
              <div
                className="w-full  h-full  bg-cover bg-center max-[320px]:p-5   p-10 flex items-center justify-between text-[white] rounded-2xl max-[700px]:flex-col-reverse
          "
                style={{ backgroundImage: `url(${task1})` }}>
                <div className="w-[50%] max-[700px]:w-full">
                  <h1 className="text-[28px] font-medium max-[400px]:text-[20px]">
                    Система охлаждения Antminer S19 hydro
                  </h1>
                  <div className="flex flex-col gap-3 pt-5">
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={speed} alt="" />
                      <h1>Разгон: 112Th</h1>
                    </p>
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={heater1} alt="" />
                      <h1>Отопление дома</h1>
                    </p>
                    <p className="flex items-center gap-3 text-[14px]">
                      <img src={recording1} alt="" />
                      <h1>Снижение шума до уровня ПК</h1>
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-3">
                    <Button type="primary" size="large">
                      Подробнее
                    </Button>
                    <p>от 800$</p>
                  </div>
                </div>
                <div className="w-[40%] max-[700px]:w-fit max-[700px]:mx-auto">
                  <img src={s19hydro} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            ref={prevRef}
            className="px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-600 transition-all hover:text-white">
            Prev
          </button>
          <button className="px-4 py-2 border border-gray-800 rounded-lg max-[370px]:hidden hover:bg-gray-600 transition-all hover:text-white">
            Показать еще
          </button>
          <button
            ref={nextRef}
            className="px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-600 transition-all hover:text-white">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ReadySolution;
