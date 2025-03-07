import { Button } from "antd";
import React from "react";
import maskSwiper from "../../../shared/assets/images/maskSwiper.png";
import smth from "../../../shared/assets/images/smth.png";
const Bitmain = () => {
  return (
    <div>
      <div className="flex items-center gap-10 py-10 max-[850px]:flex-col">
        <div className="w-[50%] max-[850px]:w-full">
          <div className="flex items-center gap-3 max-[400px]:flex-col">
            <Button
              type="primary"
              size="large"
              className=" !rounded-full max-[400px]:!w-full">
              Комплект полный
            </Button>
            <Button size="large" className=" !rounded-full max-[400px]:!w-full">
              Комплект частичный
            </Button>
          </div>
          <h1 className="text-[40px] font-medium text-[#222834] pt-10 max-[375px]:text-[30px]">
            Полный комплект для Bitmain Antminer
          </h1>
          <p className="font-medium text-[#222834] py-5">
            Готовый к установке и експлуатации комплект для домашнего майнинга
            без подключения в системы отопления дома или горячего водоснабжения
          </p>
          <h5 className="text-[#06f] font-bold">В комплекте:</h5>
          <div className="grid grid-cols-2 gap-2 max-[375px]:grid-cols-1">
            <p className=" font-medium text-[#222834]">
              <span className=" font-medium text-[#06f]">01.</span>
              Радиатор
            </p>
            <p className=" font-medium text-[#222834]">
              <span className=" font-medium text-[#06f]">02.</span>
              Помпа
            </p>
            <p className=" font-medium text-[#222834]">
              <span className=" font-medium text-[#06f]">03.</span>
              Патрубки
            </p>
            <p className=" font-medium text-[#222834]">
              <span className=" font-medium text-[#06f]">04.</span>
              Аква блоки на 3 платы ( 3 шт)
            </p>
            <p className=" font-medium text-[#222834]">
              <span className=" font-medium text-[#06f]">05.</span>
              Модифицированный блок питания
            </p>
          </div>
        </div>

        <div className="  w-[50%] max-[850px]:w-full">
          <div className="bg-white shadow rounded-3xl py-10 ">
            <img src={maskSwiper} className="w-fit mx-auto" alt="" />
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="bg-white shadow rounded-lg w-full relative">
              <img src={smth} className="w-fit mx-auto" alt="" />
              <p className="bg-gray-400 rounded px-1 w-fit absolute top-1 left-1 text-[14px]">
                0.1
              </p>
            </div>
            <div className="bg-white shadow rounded-lg w-full relative">
              <img src={smth} className="w-fit mx-auto" alt="" />
              <p className="bg-gray-400 rounded px-1 w-fit absolute top-1 left-1 text-[14px]">
                0.2
              </p>
            </div>
            <div className="bg-white shadow rounded-lg w-full relative">
              <img src={smth} className="w-fit mx-auto" alt="" />
              <p className="bg-gray-400 rounded px-1 w-fit absolute top-1 left-1 text-[14px]">
                0.3
              </p>
            </div>
            <div className="bg-white shadow rounded-lg w-full relative max-[450px]:hidden">
              <img src={smth} className="w-fit mx-auto" alt="" />
              <p className="bg-gray-400 rounded px-1 w-fit absolute top-1 left-1 text-[14px]">
                0.4
              </p>
            </div>
            <div className="bg-white shadow rounded-lg w-full relative max-[550px]:hidden">
              <img src={smth} className="w-fit mx-auto" alt="" />
              <p className="bg-gray-400 rounded px-1 w-fit absolute top-1 left-1 text-[14px]">
                0.5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bitmain;
