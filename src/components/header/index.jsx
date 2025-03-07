import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";

import logo from "../../shared/assets/images/logo.png";
import ukraine from "../../shared/assets/images/ukraine.png";
import tg from "../../shared/assets/icons/telegram.svg";
import tel from "../../shared/assets/icons/telephone.svg";
import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex items-center gap-14">
        <Link to={"/"} className="text-[14px] font-medium text-[#222834]">
          <img src={logo} alt="" />
        </Link>
        <Link className="text-[14px] font-medium text-[#222834] max-[768px]:hidden">
          Выбрать набор
        </Link>
        <Link className="text-[14px] font-medium text-[#222834] max-[768px]:hidden">
          Комплектующие
        </Link>
        <Link className="text-[14px] font-medium text-[#222834] max-[850px]:hidden">
          О нас
        </Link>
      </div>

      <div className="flex items-center gap-10">
        <p className="flex items-start flex-col max-[1172px]:hidden">
          <span className="text-[14px] text-[#767A82] font-normal">
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
            className="!bg-[#eaedf2] flex items-center gap-2 max-[368px]:!hidden"
            size="large">
            <img src={tg} alt="" />
            <img src={tel} alt="" />
          </Button>
          <Button className="!bg-[#eaedf2] max-[446px]:!hidden" size="large">
            <img src={ukraine} alt="" />
          </Button>
          <div className="hidden max-[768px]:block">
            <Button
              size="large"
              type="primary"
              onClick={showDrawer}
              icon={<MenuOutlined />}></Button>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
