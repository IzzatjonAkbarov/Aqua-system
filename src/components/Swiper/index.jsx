import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import showcaseimg from "../../shared/assets/images/showcaseimg.png";
import temperature from "../../shared/assets/icons/temperature.svg";
import barchart from "../../shared/assets/icons/barchart.svg";
import recording from "../../shared/assets/icons/recording.svg";
import heater from "../../shared/assets/icons/heater.svg";

const SwiperComponent = () => {
  return (
    <div className="h-[600px] rounded-3xl overflow-hidden max-[800px]:h-[350px] max-[450px]:h-[300px] ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full h-full">
        <SwiperSlide key={showcaseimg}>
          <div
            className="w-full h-full bg bg-cover bg-center   text-white text-3xl font-bold"
            style={{ backgroundImage: `url(${showcaseimg})` }}>
            <div className="p-20 max-[562px]:px-10  w-full h-full inset-0 max-[370px]:text-center max-[370px]:p-0 max-[370px]:py-10  bg-[linear-gradient(54deg,#000_0%,rgba(0,0,0,0)_78.55%,rgba(0,0,0,0)_100%)] max-[370px]:bg-[linear-gradient(180deg,#000_23.73%,rgba(0,0,0,0)_53.05%,rgba(0,0,0,0)_100%)]">
              <div className=" text-[20px] font-normal  max-[300px]:text-[16px]">
                AquaSystem
              </div>
              <div className="  text-[50px] max-[1024px]:text-[40px] max-[562px]:text-[30px] max-[300px]:text-[25px] font-medium  pt-5">
                Система водяного <br /> охлаждения <br />
                <span className="text-[#06f]">для Antminer</span>
              </div>

              <div className="pt-16 pb-10 w-[60%] max-[1250px]:w-[70%] max-[1050px]:w-[80%] max-[980px]:w-[90%] max-[875px]:w-full max-[800px]:hidden flex items-start gap-4">
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={temperature} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Снижение температур ASIC-майнера
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={barchart} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Домашний майнинг Bitcoin
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={recording} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Снижение шума до уровня домашнего ПК
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={heater} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Отопление и экономия помещений
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={showcaseimg}>
          <div
            className="w-full h-full bg bg-cover bg-center   text-white text-3xl font-bold"
            style={{ backgroundImage: `url(${showcaseimg})` }}>
            <div className="p-20 max-[562px]:px-10  w-full h-full inset-0 max-[370px]:text-center max-[370px]:p-0 max-[370px]:py-10  bg-[linear-gradient(54deg,#000_0%,rgba(0,0,0,0)_78.55%,rgba(0,0,0,0)_100%)] max-[370px]:bg-[linear-gradient(180deg,#000_23.73%,rgba(0,0,0,0)_53.05%,rgba(0,0,0,0)_100%)]">
              <div className=" text-[20px] font-normal  max-[300px]:text-[16px]">
                AquaSystem
              </div>
              <div className="  text-[50px] max-[1024px]:text-[40px] max-[562px]:text-[30px] max-[300px]:text-[25px] font-medium  pt-5">
                Система водяного <br /> охлаждения <br />
                <span className="text-[#06f]">для Antminer</span>
              </div>

              <div className="pt-16 pb-10 w-[60%] max-[1250px]:w-[70%] max-[1050px]:w-[80%] max-[980px]:w-[90%] max-[875px]:w-full max-[800px]:hidden flex items-start gap-4">
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={temperature} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Снижение температур ASIC-майнера
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={barchart} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Домашний майнинг Bitcoin
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={recording} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Снижение шума до уровня домашнего ПК
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={heater} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Отопление и экономия помещений
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={showcaseimg}>
          <div
            className="w-full h-full bg bg-cover bg-center   text-white text-3xl font-bold"
            style={{ backgroundImage: `url(${showcaseimg})` }}>
            <div className="p-20 max-[562px]:px-10  w-full h-full inset-0 max-[370px]:text-center max-[370px]:p-0 max-[370px]:py-10  bg-[linear-gradient(54deg,#000_0%,rgba(0,0,0,0)_78.55%,rgba(0,0,0,0)_100%)] max-[370px]:bg-[linear-gradient(180deg,#000_23.73%,rgba(0,0,0,0)_53.05%,rgba(0,0,0,0)_100%)]">
              <div className=" text-[20px] font-normal  max-[300px]:text-[16px]">
                AquaSystem
              </div>
              <div className="  text-[50px] max-[1024px]:text-[40px] max-[562px]:text-[30px] max-[300px]:text-[25px] font-medium  pt-5">
                Система водяного <br /> охлаждения <br />
                <span className="text-[#06f]">для Antminer</span>
              </div>

              <div className="pt-16 pb-10 w-[60%] max-[1250px]:w-[70%] max-[1050px]:w-[80%] max-[980px]:w-[90%] max-[875px]:w-full max-[800px]:hidden flex items-start gap-4">
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={temperature} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Снижение температур ASIC-майнера
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={barchart} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Домашний майнинг Bitcoin
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={recording} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Снижение шума до уровня домашнего ПК
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={heater} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Отопление и экономия помещений
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={showcaseimg}>
          <div
            className="w-full h-full bg bg-cover bg-center   text-white text-3xl font-bold"
            style={{ backgroundImage: `url(${showcaseimg})` }}>
            <div className="p-20 max-[562px]:px-10  w-full h-full inset-0 max-[370px]:text-center max-[370px]:p-0 max-[370px]:py-10  bg-[linear-gradient(54deg,#000_0%,rgba(0,0,0,0)_78.55%,rgba(0,0,0,0)_100%)] max-[370px]:bg-[linear-gradient(180deg,#000_23.73%,rgba(0,0,0,0)_53.05%,rgba(0,0,0,0)_100%)]">
              <div className=" text-[20px] font-normal  max-[300px]:text-[16px]">
                AquaSystem
              </div>
              <div className="  text-[50px] max-[1024px]:text-[40px] max-[562px]:text-[30px] max-[300px]:text-[25px] font-medium  pt-5">
                Система водяного <br /> охлаждения <br />
                <span className="text-[#06f]">для Antminer</span>
              </div>

              <div className="pt-16 pb-10 w-[60%] max-[1250px]:w-[70%] max-[1050px]:w-[80%] max-[980px]:w-[90%] max-[875px]:w-full max-[800px]:hidden flex items-start gap-4">
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={temperature} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Снижение температур ASIC-майнера
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={barchart} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Домашний майнинг Bitcoin
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={recording} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Снижение шума до уровня домашнего ПК
                  </p>
                </div>
                <div className="p-4 py-5 bg-[#ffffff25]  rounded h-[140px] w-[150px]">
                  <img src={heater} alt="" />

                  <p className="text-[14px] font-normal py-[15px]">
                    Отопление и экономия помещений
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
