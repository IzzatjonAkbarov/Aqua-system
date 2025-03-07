import React from "react";
import s19hydro from "../../../shared/assets/images/s19hydro.png";
import airfan from "../../../shared/assets/images/airfan.png";
import { Button } from "antd";

const Hydro = () => {
  return (
    <>
      <p className="font-medium text-[35px] tetx-[222834] text-center p-0 m-0 max-[350px]:text-[25px]">
        <span className="text-[#06f]">Чем отличается Hydro</span>
        <br />
        от заводского охлаждения?
      </p>
      <div className="w-full bg-[#222834] pt-10 rounded-3xl  flex p-10 max-[400px]:p-5 max-[410px]:gap-5 items-end justify-between  max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:gap-10">
        <div>
          <h1 className="text-[24px] font-normal pb-5 text-white text-center max-[475px]:text-[20px] max-[410px]:text-[16px]">
            Система водяного охлаждения <br /> Antminer Hydro
          </h1>
          <img className="mx-auto" src={s19hydro} alt="" />
        </div>
        <div className="flex flex-col gap-3 max-[1024px]:w-full">
          <div className="flex items-center gap-3">
            <p className="py-2.5 w-[110px] bg-white text-[#06f] font-bold text-center text-[14px] rounded-lg">
              130 Тн
            </p>

            <div className="py-2.5 w-full bg-[rgba(63,71,92,0.1)] backdrop-blur-[30px] text-[#06f] font-bold text-center rounded-lg">
              Разгон
            </div>
            <p className="py-2.5 w-[110px] bg-white text-[#222834] font-bold text-center rounded-lg text-[14px]">
              110 Тн
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="py-2.5 w-[110px] bg-white text-[#06f] font-bold text-center text-[14px] rounded-lg">
              Да (40 дб)
            </p>

            <div className="py-2.5 w-full bg-[rgba(63,71,92,0.1)] backdrop-blur-[30px] text-[#06f] font-bold text-center rounded-lg">
              Безсушмный
            </div>
            <p
              className="py-2.5 w-[110px] bg-white text-[#222834] font-bold text-center rounded-lg text-[14px]
">
              Нет (90 дб)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="py-2.5 w-[110px] bg-white text-[#06f] font-bold text-center text-[14px] rounded-lg">
              Да
            </p>

            <div className="py-2.5 w-full bg-[rgba(63,71,92,0.1)] backdrop-blur-[30px] text-[#06f] font-bold text-center rounded-lg">
              Отопление
            </div>
            <p
              className="py-2.5 w-[110px] bg-white text-[#222834] font-bold text-center rounded-lg text-[14px]
">
              Нет
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="py-2.5 w-[110px] bg-white text-[#06f] font-bold text-center text-[14px] rounded-lg">
              Да
            </p>

            <div className="py-2.5 w-full bg-[rgba(63,71,92,0.1)] backdrop-blur-[30px] text-[#06f] font-bold text-center rounded-lg">
              Домашний майнинг
            </div>
            <p
              className="py-2.5 w-[110px] bg-white text-[#222834] font-bold text-center rounded-lg text-[14px]
">
              Нет
            </p>
          </div>
          <Button className="w-fit mx-auto my-6" type="primary" size="large">
            Заказать консультацию
          </Button>
        </div>
        <div>
          <h1 className="text-[24px] font-normal pb-5 text-white text-center max-[475px]:text-[20px] max-[410px]:text-[16px] ">
            Стандартное заводское <br /> воздушное охлаждение
          </h1>
          <img className="mx-auto" src={airfan} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hydro;
