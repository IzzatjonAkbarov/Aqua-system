import React from "react";
import aquasystem from "../../../shared/assets/images/aquasystem.png";
import aquasystem2 from "../../../shared/assets/images/aquasystem2.png";

import dot from "../../../shared/assets/icons/dot.svg";
const AquaSystem = () => {
  return (
    <div className="flex items-center gap-20  max-[1024px]:flex-col max-[1024px]:gap-10 max-[600px]:gap-5 py-5 max-[1024px]:py-10">
      <div className="w-[40%] max-[1024px]:w-full">
        <p className="font-medium text-[30px] tetx-[222834] p-0 m-0 max-[350px]:text-[20px]">
          ГотоЧто такое система водяного охлаждения
          <br />
          <span className="text-[#06f]">AquaSystem</span>
        </p>
        <p className="pt-5 text-[#222834] font-medium">
          Разрабокта компании AquaSystems - модификации стандартного охлаждения
          асик майнеров 19 15 и 11 серий , что заменяет шумные куллера асиков и
          стандартный радиатор на водоблоки.
        </p>
        <img
          className="mx-auto hidden w-fit max-[490px]:block my-5"
          src={aquasystem2}
          alt=""
        />
        <div className="px-[30px] py-[20px] flex mt-2.5 items-center gap-3 rounded-xl bg-[#eaedf2]">
          <img src={dot} alt="" />
          <p className="text-[#222834] max-[375px]:text-[14px] font-medium">
            Модификация снижает выделение шума практически на 100-150%.{" "}
          </p>
        </div>
        <div className="px-[30px] py-[20px] flex mt-2.5 items-center gap-3 rounded-xl bg-[#eaedf2]">
          <img src={dot} alt="" />
          <p className="text-[#222834] max-[375px]:text-[14px] font-medium ">
            Уровень шума снижается до уровня домашнего Пк и позволяет установить
            асик майнер у Вас дома либо в любом другом помещение с возможностью
            отапливать и экономить на этом.
          </p>
        </div>
      </div>
      <div className="max-[490px]:hidden">
        <img className="mx-auto w-fit " src={aquasystem} alt="" />{" "}
      </div>
    </div>
  );
};

export default AquaSystem;
