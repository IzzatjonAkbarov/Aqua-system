import React from "react";
import { Link } from "react-router-dom";

import logo from "../../shared/assets/images/logo.png";

import tg from "../../shared/assets/icons/telegram.svg";
import tel from "../../shared/assets/icons/telephone.svg";
import { Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <div className="flex items-center justify-between py-5 max-[1116px]:grid grid-cols-1 max-[1116px]:gap-5">
      <div className="flex items-center gap-14 max-[646px]:flex-wrap max-[646px]:gap-6">
        <Link to={"/"} className="text-[14px] font-medium text-[#222834]">
          <img src={logo} alt="" />
        </Link>
        <Link className="text-[14px] font-medium text-[#222834]">
          Выбрать набор
        </Link>
        <Link className="text-[14px] font-medium text-[#222834]">
          Комплектующие
        </Link>
        <Link className="text-[14px] font-medium text-[#222834]">О нас</Link>
      </div>

      <div className="flex items-center gap-10 max-[366px]:flex-wrap max-[366px]:gap-5">
        <p className="flex items-start flex-col">
          <span className="text-[14px] text-[#767A82] font-normal ">
            Связаться с нами:
          </span>
          <Link className="text-[16px] font-bold text-[#222834]">
            +38 (068) 011 39 42
          </Link>
        </p>
        <div className="flex items-center gap-2 ">
          <Button type="primary" size="large">
            <p className="max-[970px]:hidden">Заказать звонок</p>
            <p className="hidden max-[970px]:block">
              <PhoneOutlined className="mx-auto max-[]:" />
            </p>
          </Button>
          <Button
            className="!bg-[#eaedf2] flex items-center gap-2"
            size="large">
            <img src={tg} alt="" />
            <img src={tel} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
