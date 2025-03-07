import React from "react";
import SwiperComponent from "../../components/Swiper";
import temperature from "../../shared/assets/icons/temperature.svg";
import barchart from "../../shared/assets/icons/barchart.svg";
import recording from "../../shared/assets/icons/recording.svg";
import heater from "../../shared/assets/icons/heater.svg";
import ReadySolution from "./readySolution";
import AquaSystem from "./aquaSystem";
import Hydro from "./hydro";
import Bitmain from "./bitmain";
import SystemHydro from "./systemHydro/idnex";
import BottomBanner from "./lastsection";
const Home = () => {
  return (
    <div>
      <SwiperComponent />
      <div className="max-[800px]:block hidden">
        <div className=" py-10   flex items-start flex-wrap gap-4">
          <div className="p-4 py-5 bg-[#06f] text-white  rounded-lg max-[335px]:w-full max-[335px]:h-auto h-[140px] mx-auto w-[150px]">
            <img src={temperature} alt="" />

            <p className="text-[14px] font-normal py-[15px]">
              Снижение температур ASIC-майнера
            </p>
          </div>
          <div className="p-4 py-5 bg-[#06f] text-white  rounded-lg max-[335px]:w-full max-[335px]:h-auto h-[140px] mx-auto w-[150px]">
            <img src={barchart} alt="" />

            <p className="text-[14px] font-normal py-[15px]">
              Домашний майнинг Bitcoin
            </p>
          </div>
          <div className="p-4 py-5 bg-[#06f] text-white  rounded-lg max-[335px]:w-full max-[335px]:h-auto h-[140px] mx-auto w-[150px]">
            <img src={recording} alt="" />

            <p className="text-[14px] font-normal py-[15px]">
              Снижение шума до уровня домашнего ПК
            </p>
          </div>
          <div className="p-4 py-5 bg-[#06f] text-white  rounded-lg max-[335px]:w-full max-[335px]:h-auto h-[140px] mx-auto w-[150px]">
            <img src={heater} alt="" />

            <p className="text-[14px] font-normal py-[15px]">
              Отопление и экономия помещений
            </p>
          </div>
        </div>
      </div>
      <ReadySolution />
      <AquaSystem />
      <Hydro />
      <Bitmain />
      <SystemHydro />
      <BottomBanner />
    </div>
  );
};

export default Home;
