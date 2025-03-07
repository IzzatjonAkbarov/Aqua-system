import React from "react";
import comp from "../../../shared/assets/icons/comp.svg";
const SystemHydro = () => {
  return (
    <div>
      <p className="font-medium text-[35px] tetx-[222834] text-center p-0 m-0 max-[350px]:text-[25px]">
        Где применяют систему ?
        <br />
        <span className="text-[#06f]">AquaSystem Hydro</span>
      </p>

      <div className="flex items-center gap-5 my-5">
        <div className="bg-[#222834] p-10 rounded-2xl text-[white]">
          <img src={comp} alt="" />
          <h1 className="font-bolds mt-10 mb-5">В квартирах</h1>
          <p className="text-[14px]">
            В домашний условиях можно было размещать асики , но потолок
            размещения упирался в выделение шума и тепла асиком в помещение. Что
            бы создать звукоизоляцию необходимо было обшивать помещение и
            полностью изолировать его. С Системой СВО AquaSystem — теперь
            возможно размещать Асики хоть в кладовке конвертируя тепло Асика в
            отопление пола и всей квартиры!
          </p>
        </div>
        <div className="bg-[#222834] p-10 rounded-2xl text-[white]">
          <img src={comp} alt="" />
          <h1 className="font-bolds mt-10 mb-5">Для дачи или дома</h1>
          <p className="text-[14px]">
            В домашний условиях можно было размещать асики , но потолок
            размещения упирался в выделение шума и тепла асиком в помещение. Что
            бы создать звукоизоляцию необходимо было обшивать помещение и
            полностью изолировать его. С Системой СВО AquaSystem — теперь
            возможно размещать Асики хоть в кладовке конвертируя тепло Асика в
            отопление пола и всей квартиры!
          </p>
        </div>{" "}
        <div className="bg-[#222834] p-10 rounded-2xl text-[white]">
          <img src={comp} alt="" />
          <h1 className="font-bolds mt-10 mb-5">Для предприятий</h1>
          <p className="text-[14px]">
            В домашний условиях можно было размещать асики , но потолок
            размещения упирался в выделение шума и тепла асиком в помещение. Что
            бы создать звукоизоляцию необходимо было обшивать помещение и
            полностью изолировать его. С Системой СВО AquaSystem — теперь
            возможно размещать Асики хоть в кладовке конвертируя тепло Асика в
            отопление пола и всей квартиры!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemHydro;
