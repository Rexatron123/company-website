import React, { useState } from "react";
import { Row, Dropdown, Menu, Col, Drawer, Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  HomeFilled,
  CodepenCircleFilled,
  ApiFilled,
  BankFilled,
  MenuOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

import UAB from "../assets/UAB.png";

// Reusable UI for all page components
const MainNavigation = () => {
  const [visible, setVisible] = useState(false); // For drawer component
  const [navbar, setNavbar] = useState(false); // For changing navbar shadow on scroll
  const [dropDown, setDropDown] = useState(false); // For menu dropdown on Product

  const menuList = [
    {
      id: 1,
      name: "Home",
      link: "/",
      icon: <HomeFilled />,
    },
    {
      id: 2,
      name: "Solutions",
      link: "/solutions",
      icon: <CodepenCircleFilled />,
    },
    {
      id: 3,
      name: "Work From Home",
      link: "/work-from-home",
      icon: <ApiFilled />,
    },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  // Note: Tailwind CSS uses mobile first approach. In this case, it is a min-width display
  // Example: Element will only display if it display reaches 1150px width
  // Adjustment: Can set max-width in tailwind.js, preferable if you are building from desktop to mobile
  // JSX Layout Structure: <div> 2 <Rows> <MenuOutline /> </div>
  return (
    <div>
      {/* First Menu - Horizontal Menu */}
      <Row
        className={
          navbar
            ? "flex justify-center 1150:space-x-[450px] mlg:justify-between items-center h-[80px] 1150:px-[20px] px-[40px] bg-white shadow-lg"
            : "flex justify-center 1150:space-x-[450px] mlg:justify-between items-center h-[80px] 1150:px-[20px] px-[40px] bg-white"
        }
      >
        <Link href="/">
          <img src={UAB.src} className="w-[120px] cursor-pointer" />
        </Link>
        {/* <Menu className="hidden 1150:flex justify-center items-center 1150:space-x-5">
          {menuList.map((item) => (
            <Menu.Item>
              <Link href={item.link}>
                <a class="link">{item.name}</a>
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item> */}
        <Menu className="hidden 1150:flex justify-center items-center 1150:space-x-8">
          <Menu.Item>
            <Link href="/">
              <a class="link">Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
          >
            <div class="link">
              <a>Our Offerings</a>
              <CaretDownOutlined className="absolute bottom-[10px] left-[97px]" />
            </div>
            {dropDown && (
              <Menu className="absolute rounded-lg shadow-3xl py-[10px] px-[30px] space-y-[15px] bg-white">
                <Menu.Item>
                  <Link href="/solutions">
                    <a className="text-md drop-shadow-lg font-normal hover:text-sky-200">
                      Solutions
                    </a>
                  </Link>
                </Menu.Item>
                {/* <Menu.Item>
                  <Link href="/services">
                    <a className="text-md drop-shadow-lg font-normal hover:text-sky-200">
                      Services
                    </a>
                  </Link>
                </Menu.Item> */}
              </Menu>
            )}
          </Menu.Item>
          <Menu.Item>
            <Link href="/work-from-home">
              <a class="link">Work From Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <a
              target="_blank"
              href="https://www.unitedalliedbusiness.com/_files/ugd/ef563d_2a361503b8974aefbb5140713124d3a0.pdf"
              class="link"
            >
              Business Code of Ethics
            </a>
          </Menu.Item>
        </Menu>
        <Button
          icon={<MenuOutlined />}
          className="1150:hidden flex"
          onClick={() => setVisible(!visible)}
          style={{
            fontSize: "25px",
            color: "#08c",
            border: "2px solid #0088CC",
            borderRadius: "10px",
            padding: "6px",
          }}
        />
      </Row>
      {/* Second Menu - Vertical Menu */}
      <Menu
        className={
          visible
            ? "1150:hidden flex flex-col absolute z-[999] left-[9px] bottom-[-143px] w-[96.7vw] shadow-lg h-[150px] justify-evenly bg-white"
            : "hidden"
        }
      >
        {menuList.map((item) => (
          <Menu.Item className="pl-[10px] transition-all ease-in duration-500">
            <Link href={item.link}>
              <a className="text-sm flex items-center max-w-[200px] space-x-[20px]">
                {item.icon}
                <h1>{item.name}</h1>
              </a>
            </Link>
          </Menu.Item>
        ))}
        <Menu.Item className="pl-[10px]">
          <a
            className="text-sm flex items-center max-w-[200px] space-x-[20px]"
            target="_blank"
            href="https://www.unitedalliedbusiness.com/_files/ugd/ef563d_2a361503b8974aefbb5140713124d3a0.pdf"
          >
            <BankFilled />
            <h1>Business Code of Ethics</h1>
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MainNavigation;
