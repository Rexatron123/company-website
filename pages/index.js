import React, { useState } from "react";
import { Layout, Row, Col, Form, Input, Checkbox, Button, message } from "antd";
import { Slide } from "react-slideshow-image";
import { useRouter } from "next/router";
import APIHelpers from "./api/apiHelper";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
// import "../styles/Home.module.css";

import MainNavigation from "../components/header";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.png";
import Mail from "../assets/svg/Mail.svg";
import BlobBg1 from "../assets/svg/svgBg/BlobBg1.svg";
import BlobBg2 from "../assets/svg/svgBg/BlobBg2.svg";
import Developer from "../assets/services/Developer.svg";
import Consult from "../assets/services/Consult.svg";
import Support from "../assets/services/Support.svg";
import Sangfor from "../assets/logo/Sangfor.png";
import Outsystem from "../assets/logo/Outsystem1.png";

const { Footer, Content, Header } = Layout;
const { TextArea } = Input;

const indicators = (index) => <div className="indicator"></div>;

const HomePage = () => {
  const [name, setName] = useState(""); // Used in Form Input
  const [email, setEmail] = useState(""); // Used in Form Input
  const [phone, setPhone] = useState(""); // Used in Form Input
  const [address, setAddress] = useState(""); // Used in Form Input
  const [subject, setSubject] = useState(""); // Used in Form Input
  const [textArea, setTextArea] = useState(""); // Used in Form Input

  const router = useRouter();
  const [form] = Form.useForm();

  // Array with object for solution provider --> To be placed in section 4
  const solutionProvider = [
    {
      id: 2,
      title: "Deskera",
      desc: "Deskera is a leading cloud-based business software provider which include CRM, Project Management, Enterprise Resources Planning & Human Resources Management.",
      image: Image2,
    },
    {
      id: 3,
      title: "Hightech Payment Systems",
      desc: "HPS, an innovative payment software company at the forefront of the international payment industry. PowerCARD is HPS’ pioneering suite of solutions and can process any card type.",
      image: Image3,
    },
    {
      id: 4,
      title: "TekMonks",
      desc: "TekMonks is a Global leader in software services and IT consulting. With offices across 6 countries, with core strengths lie in the domain of Enterprise Software Solutions Development and Innovative Enterprise Mobile Application Development.",
      image: Image4,
    },
    {
      id: 5,
      title: "Rubrik",
      desc: "Rubrik is a Cloud Data Management Company that enables enterprises to maximize value from data that is increasingly fragmented across data centers and the cloud.",
      image: Image5,
    },
    {
      id: 6,
      title: "Google",
      desc: "Google is an open source platform that enables enterprises to quickly and efficiently integrate business processes with Google services",
      image: Image6,
    },
    {
      id: 7,
      title: "OutSystems",
      desc: "OutSystems is a low-code platform which provide tools for organizations to quickly develop, deploy and manage enterprise applications",
      image: Outsystem,
    },
    {
      id: 8,
      title: "Sangfor",
      desc: "Sangfor takes its commitment to create next-level solutions seriously – and has built a foundation on the idea of creation, individualism, and growth through IT.",
      image: Sangfor,
    },
  ];

  // Array with object for services provided
  const ourServices = [
    {
      id: 1,
      title: "IT & Business Consultancy with Appdev Capability",
      desc: "With years of experience, our staff has the capabilities and expertise to take your business to the next level.",
      image: <Consult />,
    },
    {
      id: 2,
      title: "Mobile, Web & Portal Design, Development & Deployment",
      desc: "We examine what organizations are doing to stay relevant and competitive in this fast-paced world, and which ones are doing it best.",
      image: <Developer />,
    },
    {
      id: 3,
      title: <p className="px-[40px]">7 X 24 X 365 Support</p>,
      desc: "Looking to develop your business and need help planning or executing your next project? Let us guide you.",
      image: <Support />,
    },
  ];

  //Custom properties of Slide slideshow (Desktop View)
  const slideInPropertiesDesktop = {
    indicators: true,
    scale: 1,
    duration: 5000,
    slidesToShow: 3,
    transitionDuration: 500,
    infinite: true,
    //custom arrow btn
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
          className="hidden"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
          className="hidden"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

  //Custom properties of Slide slideshow (Mobile View)
  const slideInPropertiesMobile = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    slidesToShow: 1,
    transitionDuration: 500,
    infinite: true,
    //custom arrow btn
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
          className="hidden"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
          className="hidden"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

  //Custom properties of Slide slideshow (iPad View)
  const slideInPropertiesIpad = {
    indicators: true,
    scale: 1,
    duration: 5000,
    slidesToShow: 2,
    transitionDuration: 500,
    infinite: true,
    //custom arrow btn
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
          className="hidden"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
          className="hidden"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

  // On form submission, function sends data to API end point
  // For now it is a dummy function with no API end point
  // If button submits, data is undefined
  // Reset field after submission
  const submitForm = () => {
    console.log("I ran");
    // form.resetFields();
    APIHelpers.POST("	https://dummy.restapiexample.com/api/v1/create", data)
      .then((res) => {
        console.log(res);
        message.success({
          content: "Message Received!",
          style: {
            fontSize: "20px",
          },
        });
      })
      .catch(() => {
        message.error({
          content: "Unsuccessful post",
          style: {
            fontSize: "20px",
          },
        });
      });
  };

  const blobs = {
    one: {
      d: "M300.007 0.0616234C397.343 -1.47215 495.012 25.4701 559.635 98.275C628.47 175.825 675.232 285.425 639.799 382.877C607.01 473.058 490.608 479.999 405.048 523.44C315.133 569.093 234.753 672.442 140.597 636.339C43.8518 599.242 26.6436 473.827 9.26897 371.68C-6.52409 278.832 -7.59317 180.477 50.4405 106.299C109.054 31.38 204.896 1.56033 300.007 0.0616234Z",
    },
    two: {
      d: "M344.843 1.10919C437.987 -8.98476 525.417 51.1543 580.507 126.936C632.718 198.757 648.2 293.677 618.31 377.288C591.809 451.423 510.387 477.478 441.542 515.669C363.531 558.945 290.112 630.861 204.14 607.043C104.401 579.41 9.61143 496.564 0.472325 393.472C-8.08449 296.948 101.644 244.732 165.565 171.902C222.847 106.638 258.512 10.4648 344.843 1.10919Z",
    },
  };

  // const test = (indexs) => {
  //   return(
  //   {names.map((val, index) => val[index])}
  // };

  // Note: section tag used to separate types of content shown. Total 5 sections (excluding header and footer)
  // Note: To freely manipulate container, use absolute under a parent container with relative CSS
  // Note: Hover effect and slight animation (ease-in-out)
  // Note: To align items vertically in flex col, use items-center. Justify content will only work horizontally
  // BG image put in pubilc to display
  // JSX Layout Structure: <Layout> <Header></Header> FIVE <section></section> <Footer></Footer>
  return (
    <Layout className="min-h-full">
      <Head>
        <link rel="shortcut icon" href="UABfav.png" />
        <title>United Allied Business | Wilayah Persekutuan Kuala Lumpur</title>
        <meta
          name="description"
          content="United Allied Business United Allied Business | Business IT Consulting Services"
        />
      </Head>
      <Header className="sticky top-[-1px] z-50">
        <MainNavigation />
      </Header>
      <Content className="relative min-h-85/100 flex justify-center items-center flex-col bg-no-repeat bg-cover overflow-hidden">
        {/* FIRST SECTION --> The first thing user sees */}
        <section className="relative bg-cover bg-center max-w-[1150px] pt-[40px] px-[15px]">
          <Row className="flex justify-between msm:justify-center h-96 bg-cover bg-center">
            <Row className="flex flex-col justify-center items-start">
              <h1 className="text-white font-bold text-left msm:text-center text-4xl drop-shadow-lg max-w-[300px]">
                Business IT Consulting Services
              </h1>
              {/* BLOB ANIMATION */}
              <div class="blob">
                <svg
                  viewBox="0 0 650 650"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={blobs.one}
                    animate={blobs.two}
                    transition={{
                      yoyo: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="57.3913"
                      y1="214.187"
                      x2="489.792"
                      y2="330.049"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6FB8E1" />
                      <stop offset="1" stop-color="#4664FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </Row>
            {/* Below is the svg with class identifier for CSS animation */}
            <div className="max-w-[806px]">
              <svg
                className="w-[450px] h-full max-w-[806px] mlg:w-[250px] mssm:hidden"
                viewBox="0 0 1124 710"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SoftwareEngineer">
                  <path
                    id="Vector"
                    d="M989.762 649.32L990.856 624.717C1002.27 618.62 1015 615.4 1027.94 615.335C1010.13 629.889 1012.35 657.942 1000.28 677.513C992.556 689.819 979.653 697.946 965.214 699.6L950.311 708.72C946.173 685.659 952.344 661.943 967.2 643.821C971.368 638.838 976.147 634.399 981.424 630.61C984.993 640.017 989.762 649.32 989.762 649.32Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_2"
                    d="M236.4 622.36L200.436 611.476C195.719 592.323 195.752 572.308 200.53 553.17C215.34 584.957 257.656 592.236 282.045 617.442C297.331 633.485 304.488 655.606 301.494 677.558L309.366 703.007C273.711 700.435 240.971 682.386 219.771 653.616C213.973 645.583 209.211 636.852 205.596 627.629C220.849 625.9 236.4 622.36 236.4 622.36H236.4Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_3"
                    d="M865.147 704.697C865.141 705.442 864.845 706.155 864.32 706.685C863.796 707.207 863.086 707.499 862.346 707.497H851.086C849.545 707.502 848.291 706.257 848.286 704.716V364.352C848.286 356.849 845.765 350.76 842.67 350.746H141.769C138.66 350.76 136.153 356.849 136.14 364.352V702.611C136.135 704.052 135.04 705.256 133.605 705.397C131.336 705.621 129.067 705.817 126.813 705.999C126.757 705.999 126.701 706.013 126.645 706.013C125.412 706.125 124.18 706.209 122.947 706.307H122.933C122.289 705.145 121.673 703.955 121.043 702.765C120.841 702.361 120.735 701.915 120.735 701.463V346.7C120.735 344.629 120.819 342.543 120.959 340.485C121.159 337.66 121.509 334.847 122.009 332.059C124.376 319.055 129.726 310.25 135.803 310.222H848.622C849.509 310.228 850.385 310.413 851.198 310.768C852.393 311.296 853.473 312.052 854.378 312.993C855.606 314.27 856.656 315.706 857.5 317.263C860.497 322.54 862.64 330.407 863.396 339.561C863.396 339.645 863.41 339.729 863.41 339.813C863.606 342.081 863.704 344.391 863.69 346.7L863.886 376.698L864.013 394.587L864.391 450.719L864.531 470.652L865.147 704.697Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_4"
                    d="M605.018 206.45H533.589C531.484 206.453 529.781 208.16 529.783 210.264V323.05H608.834V210.264C608.835 208.159 607.128 206.451 605.022 206.45H605.018ZM569.544 270.534C564.894 270.512 561.131 266.751 561.109 262.103V249.094C561.109 244.438 564.885 240.664 569.544 240.664C574.202 240.664 577.978 244.438 577.978 249.094V262.103C577.957 266.751 574.193 270.513 569.544 270.534Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_5"
                    d="M529.538 319.443V330.324C529.54 331.498 530.492 332.449 531.666 332.451H606.951C608.124 332.446 609.073 331.497 609.079 330.324V319.443H529.538Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_6"
                    d="M723.299 30.4341H417.965C412.504 30.4428 408.078 34.8663 408.069 40.3256V246.272C408.075 251.733 412.502 256.159 417.965 256.164H723.299C728.763 256.159 733.19 251.733 733.195 246.272V40.3256C733.187 34.8663 728.761 30.4428 723.299 30.4341Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_7"
                    d="M720.751 37.5786H420.516C417.592 37.5849 415.224 39.9563 415.224 42.8796V243.722C415.229 246.641 417.596 249.007 420.516 249.012H720.751C723.672 249.007 726.038 246.641 726.043 243.722V42.8795C726.043 39.9563 723.675 37.5849 720.751 37.5786Z"
                    fill="white"
                  />
                  <path
                    id="Vector_8"
                    d="M662.27 336.238H483.647C481.832 336.238 480.361 334.767 480.361 332.954C480.361 332.726 480.385 332.5 480.432 332.277L483.203 319.119C483.528 317.603 484.867 316.517 486.418 316.512H659.499C661.051 316.517 662.389 317.603 662.714 319.119L665.486 332.277C665.86 334.052 664.723 335.794 662.947 336.168C662.725 336.214 662.498 336.238 662.27 336.238Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_9"
                    d="M492.504 318.881H488.37C487.993 318.881 487.687 319.187 487.687 319.564V321.497C487.687 321.874 487.993 322.18 488.37 322.18H492.504C492.882 322.18 493.188 321.874 493.188 321.497V319.564C493.188 319.187 492.882 318.881 492.504 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_10"
                    d="M503.507 318.881H499.373C498.996 318.881 498.689 319.187 498.689 319.564V321.497C498.689 321.874 498.996 322.18 499.373 322.18H503.507C503.885 322.18 504.191 321.874 504.191 321.497V319.564C504.191 319.187 503.885 318.881 503.507 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_11"
                    d="M514.51 318.881H510.376C509.998 318.881 509.692 319.187 509.692 319.564V321.497C509.692 321.874 509.998 322.18 510.376 322.18H514.51C514.888 322.18 515.194 321.874 515.194 321.497V319.564C515.194 319.187 514.888 318.881 514.51 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_12"
                    d="M525.513 318.881H521.379C521.001 318.881 520.695 319.187 520.695 319.564V321.497C520.695 321.874 521.001 322.18 521.379 322.18H525.513C525.891 322.18 526.197 321.874 526.197 321.497V319.564C526.197 319.187 525.891 318.881 525.513 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_13"
                    d="M536.516 318.881H532.382C532.004 318.881 531.698 319.187 531.698 319.564V321.497C531.698 321.874 532.004 322.18 532.382 322.18H536.516C536.893 322.18 537.199 321.874 537.199 321.497V319.564C537.199 319.187 536.893 318.881 536.516 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_14"
                    d="M547.519 318.881H543.385C543.007 318.881 542.701 319.187 542.701 319.564V321.497C542.701 321.874 543.007 322.18 543.385 322.18H547.519C547.896 322.18 548.202 321.874 548.202 321.497V319.564C548.202 319.187 547.896 318.881 547.519 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_15"
                    d="M558.521 318.881H554.387C554.01 318.881 553.704 319.187 553.704 319.564V321.497C553.704 321.874 554.01 322.18 554.387 322.18H558.521C558.899 322.18 559.205 321.874 559.205 321.497V319.564C559.205 319.187 558.899 318.881 558.521 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_16"
                    d="M569.524 318.881H565.39C565.013 318.881 564.707 319.187 564.707 319.564V321.497C564.707 321.874 565.013 322.18 565.39 322.18H569.524C569.902 322.18 570.208 321.874 570.208 321.497V319.564C570.208 319.187 569.902 318.881 569.524 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_17"
                    d="M580.527 318.881H576.393C576.016 318.881 575.709 319.187 575.709 319.564V321.497C575.709 321.874 576.016 322.18 576.393 322.18H580.527C580.905 322.18 581.211 321.874 581.211 321.497V319.564C581.211 319.187 580.905 318.881 580.527 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_18"
                    d="M591.53 318.881H587.396C587.018 318.881 586.712 319.187 586.712 319.564V321.497C586.712 321.874 587.018 322.18 587.396 322.18H591.53C591.908 322.18 592.214 321.874 592.214 321.497V319.564C592.214 319.187 591.908 318.881 591.53 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_19"
                    d="M602.533 318.881H598.399C598.021 318.881 597.715 319.187 597.715 319.564V321.497C597.715 321.874 598.021 322.18 598.399 322.18H602.533C602.91 322.18 603.216 321.874 603.216 321.497V319.564C603.216 319.187 602.91 318.881 602.533 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_20"
                    d="M613.536 318.881H609.402C609.024 318.881 608.718 319.187 608.718 319.564V321.497C608.718 321.874 609.024 322.18 609.402 322.18H613.536C613.913 322.18 614.219 321.874 614.219 321.497V319.564C614.219 319.187 613.913 318.881 613.536 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_21"
                    d="M624.538 318.881H620.404C620.027 318.881 619.721 319.187 619.721 319.564V321.497C619.721 321.874 620.027 322.18 620.404 322.18H624.538C624.916 322.18 625.222 321.874 625.222 321.497V319.564C625.222 319.187 624.916 318.881 624.538 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_22"
                    d="M635.541 318.881H631.407C631.03 318.881 630.724 319.187 630.724 319.564V321.497C630.724 321.874 631.03 322.18 631.407 322.18H635.541C635.919 322.18 636.225 321.874 636.225 321.497V319.564C636.225 319.187 635.919 318.881 635.541 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_23"
                    d="M646.544 318.881H642.41C642.032 318.881 641.726 319.187 641.726 319.564V321.497C641.726 321.874 642.032 322.18 642.41 322.18H646.544C646.922 322.18 647.228 321.874 647.228 321.497V319.564C647.228 319.187 646.922 318.881 646.544 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_24"
                    d="M657.547 318.881H653.413C653.035 318.881 652.729 319.187 652.729 319.564V321.497C652.729 321.874 653.035 322.18 653.413 322.18H657.547C657.925 322.18 658.231 321.874 658.231 321.497V319.564C658.231 319.187 657.925 318.881 657.547 318.881Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_25"
                    d="M492.374 324.38H488.24C487.863 324.38 487.557 324.686 487.557 325.063V326.996C487.557 327.373 487.863 327.679 488.24 327.679H492.374C492.752 327.679 493.058 327.373 493.058 326.996V325.063C493.058 324.686 492.752 324.38 492.374 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_26"
                    d="M503.377 324.38H499.243C498.866 324.38 498.56 324.686 498.56 325.063V326.996C498.56 327.373 498.866 327.679 499.243 327.679H503.377C503.755 327.679 504.061 327.373 504.061 326.996V325.063C504.061 324.686 503.755 324.38 503.377 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_27"
                    d="M514.38 324.38H510.246C509.868 324.38 509.562 324.686 509.562 325.063V326.996C509.562 327.373 509.868 327.679 510.246 327.679H514.38C514.758 327.679 515.064 327.373 515.064 326.996V325.063C515.064 324.686 514.758 324.38 514.38 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_28"
                    d="M525.383 324.38H521.249C520.871 324.38 520.565 324.686 520.565 325.063V326.996C520.565 327.373 520.871 327.679 521.249 327.679H525.383C525.761 327.679 526.067 327.373 526.067 326.996V325.063C526.067 324.686 525.761 324.38 525.383 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_29"
                    d="M536.386 324.38H532.252C531.874 324.38 531.568 324.686 531.568 325.063V326.996C531.568 327.373 531.874 327.679 532.252 327.679H536.386C536.763 327.679 537.069 327.373 537.069 326.996V325.063C537.069 324.686 536.763 324.38 536.386 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_30"
                    d="M547.389 324.38H543.255C542.877 324.38 542.571 324.686 542.571 325.063V326.996C542.571 327.373 542.877 327.679 543.255 327.679H547.389C547.766 327.679 548.072 327.373 548.072 326.996V325.063C548.072 324.686 547.766 324.38 547.389 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_31"
                    d="M558.391 324.38H554.257C553.88 324.38 553.574 324.686 553.574 325.063V326.996C553.574 327.373 553.88 327.679 554.257 327.679H558.391C558.769 327.679 559.075 327.373 559.075 326.996V325.063C559.075 324.686 558.769 324.38 558.391 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_32"
                    d="M569.394 324.38H565.26C564.883 324.38 564.576 324.686 564.576 325.063V326.996C564.576 327.373 564.883 327.679 565.26 327.679H569.394C569.772 327.679 570.078 327.373 570.078 326.996V325.063C570.078 324.686 569.772 324.38 569.394 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_33"
                    d="M580.397 324.38H576.263C575.885 324.38 575.579 324.686 575.579 325.063V326.996C575.579 327.373 575.885 327.679 576.263 327.679H580.397C580.775 327.679 581.081 327.373 581.081 326.996V325.063C581.081 324.686 580.775 324.38 580.397 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_34"
                    d="M591.4 324.38H587.266C586.888 324.38 586.582 324.686 586.582 325.063V326.996C586.582 327.373 586.888 327.679 587.266 327.679H591.4C591.778 327.679 592.084 327.373 592.084 326.996V325.063C592.084 324.686 591.778 324.38 591.4 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_35"
                    d="M602.403 324.38H598.269C597.891 324.38 597.585 324.686 597.585 325.063V326.996C597.585 327.373 597.891 327.679 598.269 327.679H602.403C602.78 327.679 603.086 327.373 603.086 326.996V325.063C603.086 324.686 602.78 324.38 602.403 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_36"
                    d="M613.406 324.38H609.272C608.894 324.38 608.588 324.686 608.588 325.063V326.996C608.588 327.373 608.894 327.679 609.272 327.679H613.406C613.783 327.679 614.089 327.373 614.089 326.996V325.063C614.089 324.686 613.783 324.38 613.406 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_37"
                    d="M624.408 324.38H620.274C619.897 324.38 619.591 324.686 619.591 325.063V326.996C619.591 327.373 619.897 327.679 620.274 327.679H624.408C624.786 327.679 625.092 327.373 625.092 326.996V325.063C625.092 324.686 624.786 324.38 624.408 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_38"
                    d="M635.411 324.38H631.277C630.9 324.38 630.594 324.686 630.594 325.063V326.996C630.594 327.373 630.9 327.679 631.277 327.679H635.411C635.789 327.679 636.095 327.373 636.095 326.996V325.063C636.095 324.686 635.789 324.38 635.411 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_39"
                    d="M646.414 324.38H642.28C641.902 324.38 641.596 324.686 641.596 325.063V326.996C641.596 327.373 641.902 327.679 642.28 327.679H646.414C646.792 327.679 647.098 327.373 647.098 326.996V325.063C647.098 324.686 646.792 324.38 646.414 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_40"
                    d="M657.417 324.38H653.283C652.905 324.38 652.599 324.686 652.599 325.063V326.996C652.599 327.373 652.905 327.679 653.283 327.679H657.417C657.795 327.679 658.101 327.373 658.101 326.996V325.063C658.101 324.686 657.795 324.38 657.417 324.38Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_41"
                    d="M583.698 330.979H541.054C540.676 330.979 540.37 331.285 540.37 331.662V333.595C540.37 333.972 540.676 334.278 541.054 334.278H583.698C584.076 334.278 584.382 333.972 584.382 333.595V331.662C584.382 331.285 584.076 330.979 583.698 330.979Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_42"
                    d="M705.659 65.2502H424.73C424.113 65.2366 423.624 64.7257 423.638 64.109C423.651 63.5113 424.132 63.03 424.73 63.0168H705.659C706.276 63.0304 706.765 63.5414 706.751 64.1581C706.738 64.7557 706.256 65.237 705.659 65.2502Z"
                    fill="#CACACA"
                  />
                  <path
                    id="Vector_43"
                    d="M443.854 57.3154C447.469 57.3154 450.401 54.3202 450.401 50.6254C450.401 46.9306 447.469 43.9354 443.854 43.9354C440.238 43.9354 437.306 46.9306 437.306 50.6254C437.306 54.3202 440.238 57.3154 443.854 57.3154Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_44"
                    d="M466.471 57.3154C470.087 57.3154 473.018 54.3202 473.018 50.6254C473.018 46.9306 470.087 43.9354 466.471 43.9354C462.855 43.9354 459.924 46.9306 459.924 50.6254C459.924 54.3202 462.855 57.3154 466.471 57.3154Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_45"
                    d="M489.088 57.3154C492.704 57.3154 495.636 54.3202 495.636 50.6254C495.636 46.9306 492.704 43.9354 489.088 43.9354C485.473 43.9354 482.541 46.9306 482.541 50.6254C482.541 54.3202 485.473 57.3154 489.088 57.3154Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_46"
                    d="M564.907 82.1817L563.999 79.5319L680.036 19.2681L680.942 21.9179L564.907 82.1817Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_47"
                    d="M915.014 193.804L914.106 191.154L983.929 131.195L984.835 133.844L915.014 193.804Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_48"
                    d="M780.867 207.761L664.83 147.497L665.738 144.848L781.773 205.111L780.867 207.761Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_49"
                    d="M840.266 165.826L772.24 54.1985L774.39 52.4026L842.414 164.03L840.266 165.826Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_50"
                    d="M893.353 20.3726L827.103 20.0674V17.2678L893.353 17.573V20.3726Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_51"
                    d="M985.782 219.141L919.532 218.838V216.038L985.782 216.342V219.141Z"
                    fill="#3F3D56"
                  />
                  <g id="Downsize">
                    <path
                      id="Vector_52"
                      d="M1013.37 37.7376H939.143C929.089 37.7376 920.938 29.5904 920.938 19.5404C920.938 9.49028 929.089 1.34308 939.143 1.34308H1013.37C1023.42 1.34308 1031.57 9.49028 1031.57 19.5404C1031.57 29.5904 1023.42 37.7376 1013.37 37.7376Z"
                      fill="#6C63FF"
                    />
                    <path
                      id="Vector_53"
                      d="M888.728 223.966H814.505C804.451 223.966 796.3 215.819 796.3 205.769C796.3 195.719 804.451 187.572 814.505 187.572H888.728C898.783 187.572 906.934 195.719 906.934 205.769C906.934 215.819 898.783 223.966 888.728 223.966Z"
                      fill="#6C63FF"
                    />
                  </g>
                  <g id="Upsize">
                    <path
                      id="Vector_54"
                      d="M1105.79 144.122H1031.57C1021.52 144.122 1013.37 135.975 1013.37 125.924C1013.37 115.874 1021.52 107.727 1031.57 107.727H1105.79C1115.85 107.727 1124 115.874 1124 125.924C1124 135.975 1115.85 144.122 1105.79 144.122Z"
                      fill="#6C63FF"
                    />
                    <path
                      id="Vector_55"
                      d="M1105.79 236.508H1031.57C1021.52 236.508 1013.37 228.361 1013.37 218.311C1013.37 208.261 1021.52 200.113 1031.57 200.113H1105.79C1115.85 200.113 1124 208.261 1124 218.311C1124 228.361 1115.85 236.508 1105.79 236.508Z"
                      fill="#6C63FF"
                    />
                    <path
                      id="Vector_56"
                      d="M787.897 36.3946H713.674C703.62 36.3946 695.469 28.2474 695.469 18.1973C695.469 8.1472 703.62 0 713.674 0H787.897C797.952 0 806.103 8.1472 806.103 18.1973C806.103 28.2474 797.952 36.3946 787.897 36.3946Z"
                      fill="#6C63FF"
                    />
                  </g>
                  <path
                    id="Vector_57"
                    d="M433.128 348.8H349.103C342.915 348.8 337.899 353.814 337.899 359.998C337.899 366.183 342.915 371.197 349.103 371.197H379.912V457.984H402.319V371.197H433.128C439.316 371.197 444.332 366.183 444.332 359.998C444.332 353.814 439.316 348.8 433.128 348.8Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_58"
                    d="M488.587 506.048H263.842C218.806 505.884 180.704 472.733 174.332 428.17L166.376 398.92C149.91 338.309 124.829 280.373 91.8995 226.882C76.8486 202.45 69.102 178.801 86.6971 156.031C86.8469 155.837 86.9943 155.646 87.1391 155.457C101.251 137.098 171.493 133.123 194.392 132.35C195.296 132.319 196.204 132.304 197.116 132.304H336.905C337.817 132.304 338.725 132.319 339.629 132.35C364.778 133.083 387.495 147.556 398.778 170.034C410.817 192.983 409.281 220.686 394.778 242.165C345.674 315.893 330.64 362.123 346.032 392.061C360.92 421.019 406.559 435.825 489.658 438.653C511.989 439.413 522.238 456.795 522.31 472.622C522.38 488.04 512.526 505.063 490.727 506.003C490.018 506.033 489.305 506.048 488.587 506.048Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_59"
                    d="M302.021 705.518H386.047C392.234 705.518 397.25 700.505 397.25 694.32C397.25 688.135 392.234 683.122 386.047 683.122H355.238V494.15H332.831V683.122H302.021C295.834 683.122 290.818 688.135 290.818 694.32C290.818 700.505 295.834 705.518 302.021 705.518Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_60"
                    d="M378.073 629.335L392.547 637.193L430.866 584.238L409.501 572.638L378.073 629.335Z"
                    fill="#A0616A"
                  />
                  <path
                    id="Vector_61"
                    d="M385.04 610.464L411.318 618.689L407.135 629.693L425.154 655.833C427.46 659.177 426.617 663.756 423.272 666.06C421.281 667.431 418.744 667.737 416.484 666.879L385.894 655.262L384.758 642.375L378.562 652.478L367.028 648.098L385.04 610.464V610.464Z"
                    fill="#2F2E41"
                  />
                  <g id="Hand">
                    <path
                      id="Vector_62"
                      d="M414.645 95.2916C415.942 104.176 409.787 112.43 400.898 113.726C399.95 113.864 398.992 113.918 398.035 113.888L342.226 232.583L324.722 208.185L382.173 95.9486C383.056 86.9643 391.058 80.3962 400.047 81.2785C407.568 82.0168 413.603 87.81 414.645 95.2915V95.2916Z"
                      fill="#A0616A"
                    />
                    <path
                      id="Vector_63"
                      d="M229.439 256.582C229.439 256.582 227.943 277.318 251.405 281.385C274.866 285.452 337.586 245.81 347.886 239.723C358.187 233.636 377.382 157.05 377.382 157.05L360.688 128.828C340.078 154.888 323.892 178.918 322.91 195.976L229.439 256.582H229.439Z"
                      fill="#6C63FF"
                    />
                  </g>
                  <path
                    id="Vector_64"
                    d="M256.524 328.009L261.591 349.77C261.591 349.77 261.641 369.836 265.196 373.536C268.727 377.219 346.359 369.825 346.359 369.825C346.359 369.825 338.128 337.49 338.237 313.023L256.524 328.009Z"
                    fill="#A0616A"
                  />
                  <path
                    id="Vector_65"
                    d="M420.525 606.362L392.516 590.964C391.983 554.535 413.905 505.236 439.906 453.599C381.756 463.595 326.897 466.798 279.446 454.705C263.237 450.427 253.468 433.932 257.511 417.67C257.696 416.902 257.91 416.143 258.152 415.392C263.831 398.073 251.097 387.217 262.809 368.169C293.614 357.653 322.877 354.684 349.636 363.969L366.402 401.024L449.507 390.275C466.312 388.267 481.563 400.255 483.572 417.052C483.581 417.129 483.59 417.205 483.599 417.282C483.711 418.183 483.783 419.089 483.818 419.998C467.014 498.74 448.172 569.592 420.525 606.362Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_66"
                    d="M245.243 190.237L277.258 188.348C280.026 188.185 282.593 189.794 283.65 192.356L292.697 214.279L330.299 245.343C330.299 245.343 345.187 264.28 345.221 288.735C345.256 313.191 350.503 369.797 350.503 369.797C350.503 369.797 328.775 339.228 315.365 347.358C313.083 348.741 312.281 351.57 309.891 353C308.699 353.713 305.945 353.019 304.741 353.734C286.261 364.699 266.988 375.412 265.187 373.533C261.652 369.845 257.363 351 257.363 351L228.057 243.374C224.84 231.908 226.92 219.605 233.728 209.833C235.775 206.951 237.92 204.808 239.914 204.453C244.39 203.501 242.009 193.473 245.243 190.237Z"
                    fill="#6C63FF"
                  />
                  <g id="Leg">
                    <path
                      id="Vector_67"
                      d="M517.583 674.923L531.097 665.532L500.483 607.799L480.538 621.66L517.583 674.923Z"
                      fill="#A0616A"
                    />
                    <path
                      id="Vector_68"
                      d="M519.626 636.186L498.447 655.108C464.769 617.6 439.31 564.996 417.735 505.257C361.206 488.708 318.575 462.02 281.359 430.331C268.733 419.653 259.269 405.935 270.037 392.927C270.54 392.319 271.066 391.731 271.614 391.163C284.327 378.103 316.568 380.592 335.451 368.627L377.634 413.695L374.981 425.777L454.213 452.604C470.163 458.192 478.562 475.645 472.972 491.588C472.945 491.666 472.917 491.744 472.889 491.822C472.592 492.681 472.259 493.526 471.89 494.358L519.626 636.186V636.186Z"
                      fill="#2F2E41"
                    />
                    <path
                      id="Vector_69"
                      d="M509.704 671.116L531.337 654.088L538.059 663.753L569.818 663.656C573.881 663.644 577.184 666.925 577.197 670.986C577.205 673.402 576.025 675.668 574.04 677.047L547.17 695.717L535.889 689.374L540.73 700.191L530.599 707.23L509.704 671.116Z"
                      fill="#2F2E41"
                    />
                  </g>
                  <path
                    id="Vector_70"
                    d="M292.519 461.473C284.25 457.965 280.392 448.421 283.902 440.156C284.276 439.274 284.727 438.428 285.251 437.626L212.772 328.3L242.722 326.024L308.826 433.398C316.048 438.819 317.506 449.065 312.082 456.284C307.544 462.324 299.457 464.469 292.519 461.473V461.473Z"
                    fill="#A0616A"
                  />
                  <path
                    id="Vector_71"
                    d="M250.847 219.502C250.847 219.502 233.897 207.453 218.232 225.379C202.568 243.304 203.876 317.466 203.729 329.426C203.683 333.171 209.093 341.252 216.547 350.586C219.893 354.777 223.652 359.22 227.513 363.636C229.748 366.192 227.822 371.512 230.066 373.996C232.298 376.467 238.699 376.103 240.821 378.396C250.896 389.28 259.081 397.564 259.081 397.564L291.879 397.968C292.249 373.597 275.552 351.844 254.102 330.819L250.847 219.502Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_72"
                    d="M217.787 113.394C214.681 115.634 211.415 117.942 207.626 118.497C203.837 119.052 199.401 117.221 198.352 113.54C197.07 109.039 201.137 104.94 204.791 102.015L216.381 92.7382C218.504 90.8568 220.9 89.3084 223.487 88.1459C226.12 86.9881 229.136 87.0888 231.686 88.4199C234.219 90.1295 235.683 93.0296 235.555 96.0817C235.39 99.0902 234.397 101.995 232.685 104.475C228.337 111.248 221.412 115.953 213.512 117.502"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_73"
                    d="M305.689 354.399H221.664C215.476 354.399 210.46 359.413 210.46 365.598C210.46 371.782 215.476 376.796 221.664 376.796H252.473V463.583H274.88V376.796H305.689C311.877 376.796 316.893 371.782 316.893 365.598C316.893 359.413 311.877 354.399 305.689 354.399Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_74"
                    d="M222.935 89.8995C223.273 81.5033 214.322 74.855 205.934 75.3806C197.546 75.9061 190.336 81.8035 185.579 88.7315C180.824 95.6536 177.967 103.671 174.221 111.187C170.474 118.703 165.485 126.062 158.041 129.957C150.598 133.846 140.238 133.152 135.093 126.512C131.849 131.429 131.143 137.598 133.193 143.121C135.299 148.572 139.227 153.127 144.31 156.014C146.334 157.213 148.495 158.163 150.747 158.843C151.675 156.338 152.982 153.99 154.621 151.879C153.88 154.378 153.598 156.989 153.786 159.588C157.257 160.253 160.828 160.196 164.276 159.422C171.142 157.887 176.882 153.208 179.767 146.794C182.913 139.351 181.311 130.864 181.984 122.812C182.651 114.758 187.506 105.564 195.59 105.433C201.747 105.332 200.932 105.839 204.833 110.601"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_75"
                    d="M278.841 134.019C278.841 154.119 262.539 170.413 242.43 170.413C222.321 170.413 203.218 147.12 203.218 127.02C203.218 106.92 222.321 97.6241 242.43 97.6241C262.539 97.6241 278.841 113.918 278.841 134.019Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_76"
                    d="M260.373 177.633C279.168 173.789 291.288 155.443 287.442 136.656C283.596 117.869 265.241 105.755 246.445 109.599C227.65 113.443 215.53 131.79 219.376 150.577C223.222 169.364 241.577 181.477 260.373 177.633Z"
                    fill="#A0616A"
                  />
                  <path
                    id="Vector_77"
                    d="M297.047 138.218C286.763 141.025 276.381 143.967 272.371 138.218C271.592 134.406 270.115 130.771 268.016 127.496C267.621 131.164 266.76 134.767 265.453 138.218C252.461 141.041 240.319 141.715 229.826 138.218C228.384 140.826 227.546 143.725 227.375 146.701C226.857 146.375 226.313 146.09 225.751 145.847C225.076 145.466 224.27 145.394 223.538 145.651C223.032 145.956 222.696 146.478 222.628 147.065C222.558 147.649 222.587 148.24 222.712 148.814C222.859 150.817 223.457 152.76 224.463 154.498C225.266 155.708 226.542 156.526 227.978 156.751C229.434 164.94 241.03 176.012 241.03 176.012C206.019 177.412 206.019 153.672 206.019 131.219L210.22 122.82H224.224V104.623H263.437C281.997 104.628 297.042 119.666 297.047 138.218V138.218Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_78"
                    d="M616.114 709.57L1.67617 710C0.755261 710.005 0.00482664 709.262 2.31709e-05 708.342C-0.0047803 707.421 0.737867 706.671 1.65878 706.667H1.67617L616.114 706.236C617.035 706.239 617.779 706.988 617.776 707.908C617.773 708.825 617.031 709.567 616.114 709.57Z"
                    fill="#CACACA"
                  />
                  <path
                    id="Vector_79"
                    d="M1026.44 709.57L708.893 710C707.972 710.005 707.221 709.262 707.217 708.342C707.212 707.421 707.954 706.671 708.875 706.667H708.893L1026.44 706.236C1027.36 706.233 1028.11 706.977 1028.11 707.898C1028.12 708.818 1027.37 709.567 1026.45 709.57H1026.44Z"
                    fill="#CACACA"
                  />
                  <path
                    id="Vector_80"
                    d="M630.157 207.169H509.786C499.331 207.157 490.859 198.689 490.847 188.239V108.517C490.859 98.0667 499.331 89.5982 509.786 89.5866H630.157C640.612 89.5982 649.084 98.0667 649.096 108.517V188.239C649.084 198.689 640.612 207.157 630.157 207.169ZM509.786 92.3861C500.877 92.3963 493.658 99.6122 493.648 108.517V188.239C493.658 197.143 500.877 204.359 509.786 204.369H630.157C639.065 204.359 646.285 197.143 646.295 188.239V108.517C646.285 99.6122 639.065 92.3963 630.157 92.3862L509.786 92.3861Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_81"
                    d="M545.452 114.783H513.254V117.582H545.452V114.783Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_82"
                    d="M584.676 125.981H513.254V128.781H584.676V125.981Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_83"
                    d="M584.676 135.78H513.254V138.579H584.676V135.78Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_84"
                    d="M604.282 145.578H513.254V148.378H604.282V145.578Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_85"
                    d="M560.869 155.377H513.254V158.176H560.869V155.377Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_86"
                    d="M600.081 165.175H513.254V167.975H600.081V165.175Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_87"
                    d="M528.659 174.974H513.254V177.773H528.659V174.974Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_88"
                    d="M512.205 54.5335C512.069 54.5335 511.934 54.4809 511.831 54.3761L508.843 51.3229C508.644 51.1195 508.644 50.7944 508.843 50.5909L511.831 47.538C512.034 47.3315 512.366 47.3282 512.572 47.5298C512.778 47.732 512.782 48.0635 512.58 48.27L509.95 50.9569L512.58 53.6441C512.782 53.8506 512.778 54.1821 512.572 54.3843C512.47 54.484 512.338 54.5335 512.205 54.5335V54.5335Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_89"
                    d="M517.227 54.5335C517.094 54.5335 516.962 54.4839 516.86 54.3843C516.654 54.1821 516.65 53.8509 516.852 53.6441L519.482 50.9569L516.852 48.27C516.65 48.0635 516.654 47.732 516.86 47.5298C517.067 47.3274 517.399 47.3312 517.601 47.538L520.589 50.5909C520.788 50.7944 520.788 51.1195 520.589 51.3229L517.601 54.3761C517.498 54.4809 517.363 54.5335 517.227 54.5335V54.5335Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_90"
                    d="M673.547 46.9558H667.991C667.357 46.9558 666.844 47.4688 666.844 48.1022V53.661C666.844 54.2944 667.357 54.8073 667.991 54.8073H673.547C674.181 54.8073 674.699 54.2944 674.699 53.661V48.1022C674.699 47.4688 674.181 46.9558 673.547 46.9558Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_91"
                    d="M659.932 46.9558H654.376C653.742 46.9558 653.229 47.4688 653.229 48.1022V53.661C653.229 54.2944 653.742 54.8073 654.376 54.8073H659.932C660.565 54.8073 661.084 54.2944 661.084 53.661V48.1022C661.084 47.4688 660.565 46.9558 659.932 46.9558Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_92"
                    d="M686.377 47.2175H680.821C680.187 47.2175 679.674 47.7305 679.674 48.3638V53.9227C679.674 54.556 680.187 55.069 680.821 55.069H686.377C687.011 55.069 687.529 54.556 687.529 53.9227V48.3638C687.529 47.7305 687.011 47.2175 686.377 47.2175Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_93"
                    d="M602.631 49.3322H558.218C557.443 49.3322 556.82 49.9603 556.82 50.7298C556.82 51.4992 557.443 52.1273 558.218 52.1273H602.631C603.401 52.1273 604.029 51.4992 604.029 50.7298C604.029 49.9603 603.401 49.3322 602.631 49.3322Z"
                    fill="#CCCCCC"
                  />
                </g>
              </svg>
              {/* <SoftwareEngineerV2 className="w-[450px] h-full max-w-[806px]" /> */}
            </div>
          </Row>
        </section>
        {/* SECOND SECTION - ABOUT US */}
        <section className="relative flex justify-center mlg:flex-col mlg:items-center bg-cover max-w-[1150px] py-[40px] px-[15px]">
          {/* SVG Animation for About Us Picture */}
          <Row className="w-[450px] h-full max-w-[806px] mlg:w-[250px] mssm:hidden">
            {/* <Vision className="w-[450px] h-full max-w-[806px] mlg:w-[250px] mssm:hidden" /> */}
            <svg
              viewBox="0 0 565 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Vision 1" clip-path="url(#clip0_2_2)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M496.138 436.616L484.396 436.615L478.81 391.325L496.14 391.326L496.138 436.616Z"
                    fill="#FFB6B6"
                  />
                  <path
                    id="Vector_2"
                    d="M496.551 448.865L460.444 448.863V448.407C460.444 440.645 466.736 434.353 474.498 434.353H474.499L481.094 429.349L493.4 434.354L496.551 434.354L496.551 448.865V448.865Z"
                    fill="#2F2E41"
                  />
                </g>
                <g id="Group_2">
                  <path
                    id="Vector_3"
                    d="M444.083 436.616L432.341 436.615L426.756 391.325L444.085 391.326L444.083 436.616Z"
                    fill="#FFB6B6"
                  />
                  <path
                    id="Vector_4"
                    d="M444.496 448.865L408.389 448.863V448.407C408.389 440.645 414.681 434.353 422.443 434.353H422.444L429.039 429.349L441.345 434.354L444.497 434.354L444.496 448.865V448.865Z"
                    fill="#2F2E41"
                  />
                </g>
                <path
                  id="Vector_5"
                  d="M438.488 183.865L506.23 185.291C506.23 185.291 518.409 205.257 509.111 233.424L510.152 241.267L505.874 253.39L503.734 290.47L505.874 296.175L504.448 306.871C504.448 306.871 510.152 377.466 495.891 413.12L478.777 412.407L472.359 319.383L475.924 312.575L475.211 309.723L466.654 266.938L458.097 289.044V301.326L450.254 310.436C450.254 310.436 453.106 394.58 445.262 411.693H426.102L418.878 297.601L426.009 231.284L424.583 227.006L426.722 224.867L425.296 217.736L438.488 183.865L438.488 183.865V183.865Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_6"
                  d="M467.367 53.7276L488.047 48.7361L493.751 62.2846C493.751 62.2846 523.266 77.9723 524.692 99.3647C524.692 99.3647 528.692 116.479 525.127 124.322C521.561 132.166 506.587 157.124 506.587 157.124C506.587 157.124 520.135 200.622 516.57 202.761C513.004 204.9 428.148 200.622 428.148 196.343C428.148 192.065 442.27 147.141 442.27 147.141L445.262 70.1284L464.515 62.9977L467.367 53.7276L467.367 53.7276V53.7276Z"
                  fill="#3F3D56"
                />
                <g id="SecondRHand">
                  <path
                    id="Vector_7"
                    d="M522.497 229.263C518.169 227.082 516.428 221.805 518.609 217.477C518.829 217.041 519.087 216.639 519.365 216.258L507.858 137.365L523.789 137.874L532.122 214.743C535.143 217.305 536.144 221.682 534.283 225.375C532.102 229.703 526.826 231.444 522.497 229.263H522.497V229.263Z"
                    fill="#FFB6B6"
                  />
                  <path
                    id="Vector_8"
                    d="M493.468 117.466C488.967 102.002 496.443 86.2255 512.548 86.3017C517.203 86.3237 520.82 87.6745 521.822 91.4135C525.33 104.5 527.243 124.254 527.243 124.254L531.404 145.286L528.884 149.653L534.139 163.748L531.59 170.416L531.039 204.468L518.203 203.755L504.061 177.796L498.653 174.58C498.653 174.58 502.995 132.608 494.358 120.523L493.468 117.466H493.468V117.466Z"
                    fill="#3F3D56"
                  />
                </g>
                <g id="SecondLHand">
                  <path
                    id="Vector_9"
                    d="M371.338 192.028C369.596 187.505 371.849 182.426 376.372 180.684C376.827 180.508 377.289 180.384 377.751 180.288L422.203 114.103L433.665 125.178L388.221 187.733C388.738 191.659 386.541 195.575 382.683 197.061C378.16 198.804 373.081 196.55 371.338 192.028V192.028Z"
                    fill="#FFB6B6"
                  />
                  <path
                    id="Vector_10"
                    d="M435.975 79.4096C443.481 65.16 462.695 61.7847 474.226 73.0281C477.559 76.2778 479.222 79.7618 477.346 83.1475C470.777 94.9975 455.553 107.756 455.553 107.756L436.804 137.898L431.957 139.288L425.945 153.076L413.061 168.224L395.997 177.223L386.013 167.24L388.133 154.407L413.824 120.177C413.824 120.177 432.308 96.9197 434.491 82.227L435.975 79.4096V79.4095V79.4096Z"
                    fill="#3F3D56"
                  />
                </g>
                <path
                  id="Vector_11"
                  d="M471.297 49.56C471.769 49.6167 472.24 49.6593 472.708 49.6807C474.166 49.7606 475.605 49.6775 476.993 49.4423C481.209 48.7665 485.039 46.7696 487.995 43.8412C491.119 40.7512 493.258 36.6269 493.836 31.9317C495.19 20.8489 487.298 10.7532 476.215 9.39905C465.292 8.05644 455.334 15.6968 453.744 26.5252C453.719 26.6928 453.694 26.8534 453.676 27.0202C452.322 38.1101 460.206 48.1994 471.297 49.5599V49.56V49.56Z"
                  fill="#FFB6B6"
                />
                <path
                  id="Vector_12"
                  d="M449.187 25.7833C452.058 27.203 456.749 22.7396 458.545 25.3076C458.837 24.7527 459.16 24.216 459.478 23.7084C459.766 23.2543 460.178 22.2848 460.655 22.1187C460.052 23.575 460.185 25.5473 460.811 27.237C463.643 28.2952 467.35 25.9529 469.971 23.1824C474.087 18.8383 480.807 29.9779 479.218 35.7429C481.241 33.2734 485.629 34.6662 487.116 37.4898C488.602 40.3063 486.091 42.563 485.554 45.7047L489.608 45.1899C492.166 42.6987 491.987 38.5008 494.093 35.6135C497.611 30.7814 498.975 25.8511 496.33 20.8642C493.984 16.4548 493.764 10.748 489.46 8.20582C491.341 7.2864 484.653 8.72276 486.44 5.72646C488.234 2.73645 478.671 2.37354 478.047 3.97542C475.314 0.704839 472.558 -1.45152 469.196 1.16915C465.895 3.74747 466.236 6.45758 462.359 6.21471C460.539 6.10198 460.739 9.49433 459.658 10.9733C458.582 12.4444 454.402 13.3888 454.199 13.2314C453.095 12.3676 449.338 19.7211 449.338 19.7211C449.338 19.7211 446.293 24.3446 449.187 25.7833H449.187V25.7833Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_13"
                  d="M196.155 154.13C264.086 154.13 319.155 209.199 319.155 277.13C319.155 345.061 264.086 400.13 196.155 400.13C128.224 400.13 34.2103 332.779 73.1553 277.13C112.1 221.482 128.224 154.13 196.155 154.13V154.13Z"
                  fill="#F2F2F2"
                />
                <path
                  id="Vector_14"
                  d="M360.782 159.982C359.679 159.982 358.782 160.879 358.782 161.982V225.982C358.782 227.085 359.679 227.982 360.782 227.982C361.885 227.982 362.782 227.085 362.782 225.982V161.982C362.782 160.879 361.885 159.982 360.782 159.982Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_15"
                  d="M24.7818 111.982C23.6788 111.982 22.7818 112.879 22.7818 113.982V129.982C22.7818 131.085 23.6788 131.982 24.7818 131.982C25.8848 131.982 26.7818 131.085 26.7818 129.982V113.982C26.7818 112.879 25.8848 111.982 24.7818 111.982Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_16"
                  d="M24.7818 159.982C23.6788 159.982 22.7818 160.879 22.7818 161.982V192.982C22.7818 194.085 23.6788 194.982 24.7818 194.982C25.8848 194.982 26.7818 194.085 26.7818 192.982V161.982C26.7818 160.879 25.8848 159.982 24.7818 159.982Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_17"
                  d="M24.7818 203.982C23.6788 203.982 22.7818 204.879 22.7818 205.982V236.982C22.7818 238.085 23.6788 238.982 24.7818 238.982C25.8848 238.982 26.7818 238.085 26.7818 236.982V205.982C26.7818 204.879 25.8848 203.982 24.7818 203.982Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_18"
                  d="M204.155 48.9817C203.052 48.9817 202.155 49.8786 202.155 50.9817V81.9817C202.155 83.0847 203.052 83.9817 204.155 83.9817C205.258 83.9817 206.155 83.0847 206.155 81.9817V50.9817C206.155 49.8786 205.258 48.9817 204.155 48.9817V48.9817Z"
                  fill="#3F3D56"
                />
                <g id="Group_3">
                  <path
                    id="Vector_19"
                    d="M510.551 432.608C512.617 432.737 513.759 430.17 512.196 428.675L512.041 428.056C512.061 428.007 512.082 427.957 512.102 427.908C514.192 422.926 521.272 422.961 523.344 427.95C525.182 432.378 527.523 436.814 528.099 441.496C528.358 443.562 528.242 445.668 527.783 447.696C532.091 438.286 534.358 428.01 534.358 417.675C534.358 415.079 534.216 412.482 533.925 409.892C533.686 407.774 533.357 405.668 532.931 403.582C530.625 392.305 525.632 381.564 518.431 372.592C514.969 370.7 512.082 367.742 510.338 364.196C509.711 362.917 509.22 361.541 508.988 360.14C509.382 360.191 510.473 354.191 510.176 353.823C510.725 352.99 511.708 352.576 512.308 351.763C515.29 347.719 519.399 348.425 521.544 353.92C526.126 356.233 526.17 360.068 523.359 363.757C521.57 366.104 521.324 369.279 519.755 371.791C519.916 371.998 520.084 372.198 520.246 372.405C523.207 376.203 525.768 380.285 527.927 384.574C527.316 379.808 528.217 374.065 529.753 370.364C531.501 366.147 534.778 362.595 537.664 358.949C541.13 354.57 548.237 356.481 548.848 362.032C548.853 362.086 548.859 362.14 548.865 362.194C548.436 362.435 548.016 362.692 547.606 362.964C545.267 364.511 546.075 368.137 548.847 368.565L548.91 368.575C548.755 370.119 548.49 371.649 548.103 373.154C551.805 387.47 543.813 392.684 532.401 392.918C532.149 393.048 531.904 393.177 531.652 393.3C532.808 396.555 533.732 399.894 534.416 403.278C535.03 406.269 535.456 409.292 535.695 412.327C535.992 416.157 535.967 420.007 535.644 423.831L535.663 423.695C536.483 419.484 538.77 415.55 542.09 412.825C547.035 408.762 554.022 407.266 559.358 404C561.926 402.428 565.217 404.46 564.769 407.438L564.747 407.58C563.953 407.903 563.178 408.278 562.428 408.697C562 408.939 561.58 409.196 561.17 409.467C558.83 411.015 559.639 414.641 562.411 415.069L562.474 415.079C562.519 415.085 562.558 415.092 562.603 415.098C561.24 418.334 559.341 421.338 556.964 423.927C554.65 436.425 544.708 437.61 534.074 433.971H534.068C532.905 439.035 531.206 443.982 529.023 448.697H511.003C510.938 448.497 510.88 448.29 510.822 448.09C512.488 448.193 514.168 448.097 515.808 447.793C514.471 446.152 513.134 444.499 511.797 442.858C511.765 442.826 511.739 442.794 511.713 442.762C511.035 441.922 510.351 441.089 509.672 440.249L509.672 440.248C509.63 437.671 509.939 435.101 510.551 432.608L510.551 432.608L510.551 432.608H510.551Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_20"
                    d="M0 448.751C0 449.411 0.53003 449.941 1.19006 449.941H563.48C564.14 449.941 564.67 449.411 564.67 448.751C564.67 448.091 564.14 447.561 563.48 447.561H1.19006C0.53003 447.561 0 448.091 0 448.751Z"
                    fill="#CCCCCC"
                  />
                </g>
                <path
                  id="Vector_21"
                  d="M142.376 268.839H73.1553V266.839H142.376C148.389 266.839 153.281 261.947 153.281 255.933V209.13H155.281V255.933C155.281 263.049 149.492 268.839 142.376 268.839H142.376Z"
                  fill="#6C63FF"
                />
                <path
                  id="Vector_22"
                  d="M274.455 370.294H117.019V372.294H274.455V370.294Z"
                  fill="#6C63FF"
                />
                <g id="Group_4">
                  <path
                    id="Vector_23"
                    d="M374.343 255.466H290.251C285.713 255.466 282.021 251.774 282.021 247.236V164.17C282.021 159.632 285.713 155.94 290.251 155.94H374.343C378.881 155.94 382.573 159.632 382.573 164.17V247.236C382.573 251.774 378.881 255.466 374.343 255.466Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_24"
                    d="M305.912 158.392C294.072 158.392 284.473 167.99 284.473 179.831V245.474C284.473 249.638 287.849 253.014 292.014 253.014H343.433C363.695 253.014 380.121 236.588 380.121 216.326V165.932C380.121 161.768 376.745 158.392 372.581 158.392H305.912V158.392V158.392Z"
                    fill="white"
                  />
                  <g id="Group_5">
                    <path
                      id="Vector_25"
                      d="M354.819 182.532H309.599C308.736 182.532 308.034 181.83 308.034 180.967C308.034 180.104 308.736 179.403 309.599 179.403H354.819C355.682 179.403 356.384 180.104 356.384 180.967C356.384 181.83 355.682 182.532 354.819 182.532Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_26"
                      d="M354.819 215.895H309.599C308.736 215.895 308.034 215.193 308.034 214.331C308.034 213.468 308.736 212.766 309.599 212.766H354.819C355.682 212.766 356.384 213.468 356.384 214.331C356.384 215.193 355.682 215.895 354.819 215.895Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_27"
                      d="M373.182 199.224H291.236C290.373 199.224 289.671 198.522 289.671 197.66C289.671 196.797 290.373 196.095 291.236 196.095H373.182C374.045 196.095 374.747 196.797 374.747 197.66C374.747 198.522 374.045 199.224 373.182 199.224V199.224Z"
                      fill="#E6E6E6"
                    />
                  </g>
                  <path
                    id="Vector_28"
                    d="M374.019 229.461H344.416C343.553 229.461 342.851 228.759 342.851 227.896C342.851 227.033 343.553 226.332 344.416 226.332H374.019C374.882 226.332 375.584 227.033 375.584 227.896C375.584 228.759 374.882 229.461 374.019 229.461Z"
                    fill="#E6E6E6"
                  />
                </g>
                <g id="Group_6">
                  <path
                    id="Vector_29"
                    d="M197.711 420.97H130.937C127.333 420.97 124.402 418.039 124.402 414.435V348.475C124.402 344.872 127.333 341.94 130.937 341.94H197.711C201.315 341.94 204.246 344.872 204.246 348.475V414.435C204.246 418.039 201.315 420.97 197.711 420.97H197.711V420.97Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_30"
                    d="M143.372 343.887C133.97 343.887 126.349 351.509 126.349 360.911V413.036C126.349 416.342 129.029 419.023 132.336 419.023H173.167C189.256 419.023 202.299 405.98 202.299 389.891V349.875C202.299 346.568 199.619 343.887 196.312 343.887H143.372L143.372 343.887H143.372Z"
                    fill="white"
                  />
                  <g id="Group_7">
                    <path
                      id="Vector_31"
                      d="M182.208 363.055H146.3C145.615 363.055 145.057 362.498 145.057 361.813C145.057 361.128 145.615 360.571 146.3 360.571H182.208C182.893 360.571 183.45 361.128 183.45 361.813C183.45 362.498 182.893 363.055 182.208 363.055Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_32"
                      d="M182.208 389.548H146.3C145.615 389.548 145.057 388.991 145.057 388.306C145.057 387.621 145.615 387.064 146.3 387.064H182.208C182.893 387.064 183.45 387.621 183.45 388.306C183.45 388.991 182.893 389.548 182.208 389.548Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_33"
                      d="M196.79 376.311H131.718C131.033 376.311 130.476 375.753 130.476 375.068C130.476 374.383 131.033 373.826 131.718 373.826H196.79C197.475 373.826 198.032 374.383 198.032 375.068C198.032 375.753 197.475 376.311 196.79 376.311Z"
                      fill="#E6E6E6"
                    />
                  </g>
                  <path
                    id="Vector_34"
                    d="M197.454 400.32H173.947C173.262 400.32 172.704 399.763 172.704 399.078C172.704 398.393 173.262 397.836 173.947 397.836H197.454C198.139 397.836 198.696 398.393 198.696 399.078C198.696 399.763 198.139 400.32 197.454 400.32Z"
                    fill="#E6E6E6"
                  />
                </g>
                <g id="Group_8">
                  <path
                    id="Vector_35"
                    d="M151.04 208.626H101.657C98.9923 208.626 96.8243 206.458 96.8243 203.793V155.012C96.8243 152.347 98.9923 150.179 101.657 150.179H151.04C153.705 150.179 155.873 152.347 155.873 155.012V203.793C155.873 206.458 153.705 208.626 151.04 208.626V208.626V208.626Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_36"
                    d="M110.854 151.619C103.901 151.619 98.2643 157.256 98.2643 164.209V202.758C98.2643 205.203 100.247 207.186 102.692 207.186H132.888C144.787 207.186 154.433 197.54 154.433 185.641V156.047C154.433 153.602 152.451 151.619 150.005 151.619H110.854V151.619L110.854 151.619Z"
                    fill="white"
                  />
                  <g id="Group_9">
                    <path
                      id="Vector_37"
                      d="M139.575 165.795H113.019C112.512 165.795 112.1 165.383 112.1 164.876C112.1 164.37 112.512 163.958 113.019 163.958H139.575C140.081 163.958 140.493 164.37 140.493 164.876C140.493 165.383 140.081 165.795 139.575 165.795Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_38"
                      d="M139.575 185.388H113.019C112.512 185.388 112.1 184.976 112.1 184.469C112.1 183.962 112.512 183.55 113.019 183.55H139.575C140.081 183.55 140.493 183.962 140.493 184.469C140.493 184.976 140.081 185.388 139.575 185.388Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_39"
                      d="M150.358 175.598H102.235C101.729 175.598 101.316 175.186 101.316 174.679C101.316 174.172 101.729 173.76 102.235 173.76H150.358C150.865 173.76 151.277 174.172 151.277 174.679C151.277 175.186 150.865 175.598 150.358 175.598Z"
                      fill="#E6E6E6"
                    />
                  </g>
                  <path
                    id="Vector_40"
                    d="M150.85 193.354H133.465C132.959 193.354 132.546 192.942 132.546 192.435C132.546 191.929 132.959 191.517 133.465 191.517H150.85C151.356 191.517 151.769 191.929 151.769 192.435C151.769 192.942 151.356 193.354 150.85 193.354Z"
                    fill="#E6E6E6"
                  />
                </g>
                <path
                  id="Vector_41"
                  d="M154.155 219.13C159.678 219.13 164.155 214.653 164.155 209.13C164.155 203.608 159.678 199.13 154.155 199.13C148.632 199.13 144.155 203.608 144.155 209.13C144.155 214.653 148.632 219.13 154.155 219.13Z"
                  fill="#6C63FF"
                />
                <g id="VisionBalls">
                  <path
                    id="Vector_42"
                    d="M295.155 270.13C300.678 270.13 305.155 265.653 305.155 260.13C305.155 254.608 300.678 250.13 295.155 250.13C289.632 250.13 285.155 254.608 285.155 260.13C285.155 265.653 289.632 270.13 295.155 270.13Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_43"
                    d="M202.155 356.13C207.678 356.13 212.155 351.653 212.155 346.13C212.155 340.608 207.678 336.13 202.155 336.13C196.632 336.13 192.155 340.608 192.155 346.13C192.155 351.653 196.632 356.13 202.155 356.13Z"
                    fill="#6C63FF"
                  />
                </g>
                <g id="Group_10">
                  <path
                    id="Vector_44"
                    d="M223.756 78.8528C230.64 78.8528 236.22 73.3904 236.22 66.6521C236.22 59.9139 230.64 54.4514 223.756 54.4514C216.873 54.4514 211.293 59.9139 211.293 66.6521C211.293 73.3904 216.873 78.8528 223.756 78.8528Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_45"
                    d="M323.669 62.4782H256.584C254.283 62.4782 252.41 60.6057 252.41 58.3043C252.41 56.0028 254.283 54.1303 256.584 54.1303H323.669C325.971 54.1303 327.843 56.0028 327.843 58.3043C327.843 60.6057 325.971 62.4782 323.669 62.4782V62.4782Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_46"
                    d="M376.023 76.6053H256.584C254.283 76.6053 252.41 74.7328 252.41 72.4314C252.41 70.1299 254.283 68.2574 256.584 68.2574H376.023C378.324 68.2574 380.196 70.1299 380.196 72.4314C380.196 74.7328 378.324 76.6053 376.023 76.6053Z"
                    fill="#F2F2F2"
                  />
                </g>
                <g id="Group_11">
                  <path
                    id="Vector_47"
                    d="M43.3591 130.13C47.8139 130.13 51.4252 126.595 51.4252 122.234C51.4252 117.873 47.8139 114.338 43.3591 114.338C38.9044 114.338 35.2931 117.873 35.2931 122.234C35.2931 126.595 38.9044 130.13 43.3591 130.13Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_48"
                    d="M108.021 119.533H64.6049C63.1154 119.533 61.9035 118.321 61.9035 116.832C61.9035 115.342 63.1154 114.13 64.6049 114.13H108.021C109.511 114.13 110.723 115.342 110.723 116.832C110.723 118.321 109.511 119.533 108.021 119.533H108.021Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_49"
                    d="M141.904 128.676H64.6049C63.1154 128.676 61.9035 127.464 61.9035 125.975C61.9035 124.485 63.1154 123.273 64.6049 123.273H141.904C143.393 123.273 144.605 124.485 144.605 125.975C144.605 127.464 143.393 128.676 141.904 128.676Z"
                    fill="#F2F2F2"
                  />
                </g>
                <g id="Group_12">
                  <path
                    id="Vector_50"
                    d="M285.359 411.13C289.814 411.13 293.425 407.595 293.425 403.234C293.425 398.873 289.814 395.338 285.359 395.338C280.904 395.338 277.293 398.873 277.293 403.234C277.293 407.595 280.904 411.13 285.359 411.13Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_51"
                    d="M350.021 400.533H306.605C305.115 400.533 303.904 399.321 303.904 397.832C303.904 396.342 305.115 395.13 306.605 395.13H350.021C351.511 395.13 352.723 396.342 352.723 397.832C352.723 399.321 351.511 400.533 350.021 400.533V400.533Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_52"
                    d="M383.904 409.676H306.605C305.115 409.676 303.904 408.464 303.904 406.975C303.904 405.485 305.115 404.273 306.605 404.273H383.904C385.393 404.273 386.605 405.485 386.605 406.975C386.605 408.464 385.393 409.676 383.904 409.676V409.676Z"
                    fill="#F2F2F2"
                  />
                </g>
                <path
                  id="Vector_53"
                  d="M188.405 155.97H186.405V250.97H188.405V155.97Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_54"
                  d="M187.405 256.97C190.719 256.97 193.405 254.284 193.405 250.97C193.405 247.657 190.719 244.97 187.405 244.97C184.091 244.97 181.405 247.657 181.405 250.97C181.405 254.284 184.091 256.97 187.405 256.97Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_55"
                  d="M278.405 325.97C281.719 325.97 284.405 323.284 284.405 319.97C284.405 316.657 281.719 313.97 278.405 313.97C275.091 313.97 272.405 316.657 272.405 319.97C272.405 323.284 275.091 325.97 278.405 325.97Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_56"
                  d="M116.405 243.97C119.719 243.97 122.405 241.284 122.405 237.97C122.405 234.657 119.719 231.97 116.405 231.97C113.091 231.97 110.405 234.657 110.405 237.97C110.405 241.284 113.091 243.97 116.405 243.97Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_57"
                  d="M114.188 237.98L81.3749 238.973L81.4355 240.973L114.248 239.98L114.188 237.98Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_58"
                  d="M327.216 342.94H277.46V319.97H279.46V340.94H327.216V342.94Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_59"
                  d="M113.942 309.486C117.256 309.486 119.942 306.799 119.942 303.486C119.942 300.172 117.256 297.486 113.942 297.486C110.629 297.486 107.942 300.172 107.942 303.486C107.942 306.799 110.629 309.486 113.942 309.486Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_60"
                  d="M162.161 326.455H112.405V303.486H114.405V324.455H162.161V326.455Z"
                  fill="#E6E6E6"
                />
                <path
                  id="Vector_61"
                  d="M314.405 280.655H75.4227V282.655H314.405V280.655Z"
                  fill="#E6E6E6"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_2">
                  <rect width="564.81" height="449.941" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Row>
          <Row className="flex flex-col justify-center align-middle h-full space-y-4 1150:px-[30px] mlg:px-[2px] max-w-[540px] mssm:max-w-[300px]">
            <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-center text-transparent bg-clip-text text-3xl font-bold">
              Why United Allied Business?
            </h1>
            <p className="text-justify tracking-tight text-md">
              United Allied Business Sdn. Bhd. (UAB) was propelled in year 2018
              becoming an IT company to provide business IT Consultancy,
              Transformation Advisory & AppDev Services for our clients who are
              embarking towards Digitalization Transformation 2.0.
            </p>
            <p className="text-justify tracking-tight text-md">
              It is formed by a group of experienced team members who previously
              worked in IT multinational companies, as well as conglomerate
              companies with ASEAN exposure. We have been through the high / low
              peak of IT industry evolvement, which gain us deep understanding
              of how important{" "}
              <span className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text font-bold">
                LISTENING
              </span>{" "}
              is. As your vision and success is our business drivers, we are
              here to assist you solving IT operational challenges and we are
              committed to deliver on time, on budget, without compromising
              quality of deliverables. Our resources derived from multiple
              backgrounds ranging from Enterprise Architect, Project Manager,
              Business Analyst, Application / Mobile Developers, Testers to
              Onsite-Support Engineers.
            </p>
          </Row>
        </section>
        {/* THIRD SECTION - OUR SERVICES */}
        {/* Loop the cards */}
        <section className="relative z-30 flex flex-col w-[100%] box-border justify-center items-center pt-[40px] pb-[80px] px-[15px]">
          <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text drop-shadow-lg relative z-50 text-3xl font-bold text-center mb-3">
            Our Services
          </h1>
          {/* Cards are looped for easier class manipulation + inclusion of wavy SVG */}
          <Row className="flex mt-[11px] relative z-50 flex-row justify-between 1150:space-x-3 px-8 mlg:flex-col mlg:items-center mlg:space-y-5">
            {ourServices.map((item) => (
              <div>
                <article className="flex flex-col items-center justify-center rounded-lg shadow-3xl bg-white max-w-[320px] mlg:max-w-[550px] max-h-[550px] h-full">
                  <div className="w-[150px] h-[150px] pt-[15px]">
                    {item.image}
                  </div>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-[20px] text-center font-bold leading-tight mb-2">
                      {item.title}
                    </h5>
                    <p className="text-gray-700 text-justify">{item.desc}</p>
                  </div>
                </article>
              </div>
            ))}
          </Row>
        </section>
        {/* FOURTH SECTION - PARTNERS & TECHNOLOGIES */}
        <section className="pb-[80px] msm:max-w-[350px] px-[15px]">
          <Row className="flex flex-col justify-center items-center">
            <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text text-3xl font-bold text-center ">
              Technology & Solution Partner
            </h1>
            {/* Using zoom tag provided by 3rd party package and map each image */}
            {/* Due to complication with package & NextJS, created 2 <Slide> for different screen displays (w1150px) */}
            <Slide
              {...slideInPropertiesDesktop}
              className="max-w-[1100px] mlg:max-w-[500px] mlg:hidden"
              indicators={indicators}
            >
              {solutionProvider.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center p-[25px]"
                >
                  <img
                    className="rounded-full shadow-3xl max-h-[300px] w-[200px] hover:scale-90 ease-in duration-500 cursor-pointer p-1"
                    src={item.image.src}
                    width={300}
                    onClick={() => router.push("/solutions")}
                  />
                  <h1 className="text-center font-bold text-[20px] py-3">
                    {item.title}
                  </h1>
                  <p className="text-justify tracking-tighter font-normal max-w-[300px]">
                    {item.desc}
                  </p>
                  {/* <h1>{projectName()}</h1> */}
                </div>
              ))}
            </Slide>
            <Slide
              {...slideInPropertiesMobile}
              className="max-w-[1100px] mlg:max-w-[350px] 500:hidden"
              indicators={indicators}
            >
              {solutionProvider.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center py-[25px]"
                >
                  <img
                    className="w-3/4 object-cover rounded-full shadow-3xl max-h-[300px] max-w-[200px] hover:scale-90 ease-in duration-500 cursor-pointer"
                    src={item.image.src}
                    width={300}
                    onClick={() => router.push("/solutions")}
                  />
                  <h1 className="text-center font-bold texl-xl py-3">
                    {item.title}
                  </h1>
                  <p className="text-justify tracking-tighter font-normal max-w-[300px]">
                    {item.desc}
                  </p>
                  {/* <h1>{projectName()}</h1> */}
                </div>
              ))}
            </Slide>
            <Slide
              {...slideInPropertiesIpad}
              className="max-w-[1100px] mlg:max-w-[550px] 1150:hidden mssm:hidden"
              indicators={indicators}
            >
              {solutionProvider.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center p-[30px]"
                >
                  <img
                    className="w-3/4 object-cover rounded-full shadow-3xl max-h-[300px] max-w-[200px] hover:scale-90 ease-in duration-500 cursor-pointer"
                    src={item.image.src}
                    width={300}
                    onClick={() => router.push("/solutions")}
                  />
                  <h1 className="text-center font-bold texl-xl py-3">
                    {item.title}
                  </h1>
                  <p className="text-justify tracking-[-0.10em] font-normal max-w-[300px]">
                    {item.desc}
                  </p>
                  {/* <h1>{projectName()}</h1> */}
                </div>
              ))}
            </Slide>

            {/* {names.map((val, index) => val[index])} */}
          </Row>
        </section>
        {/* FIFTH SECTION - ADDRESS AND FORM */}
        <section
          id="fifth-section"
          className="relative z-[1] flex justify-center bg-gradient-to-b from-[#0D73D5] to-[#073590] w-full max-w-[100%] px-[30px] overflow-hidden"
        >
          <article className="flex relative z-40 justify-center mlg:flex-col mlg:items-center bg-cover py-[30px]">
            {/* CONTACT INFORMATION STARTS HERE */}
            <Row className="flex flex-col bg-white bg-opacity-50 w-[320px] backdrop-blur-xl drop-shadow-lg 1150:rounded-l-lg mlg:rounded-t-lg msm:space-x-[0px] 1150:w-[330px] justify-center items-start p-[10px] space-y-[40px]">
              <div className="self-center">
                <h1 className="text-3xl text-center text-white drop-shadow-lg font-bold">
                  Contact Us
                </h1>
                <Mail className="w-[250px] h-full fill-white max-w-[806px] mlg:hidden" />
              </div>
              <div className="mlg:flex mlg:flex-col mlg:justify-center mlg:items-start px-[20px]">
                <h2 className="text-md drop-shadow-lg text-white font-bold max-w-[300px] hover:text-sky-200">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/United+Allied+Business+Sdn.+Bhd./@3.1294269,101.7214292,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc350ed3e74a23:0x557ea63f9fb58285!8m2!3d3.1294215!4d101.7236179"
                  >
                    V03-08-15, Designer Office, Lingkaran SV Sunway Velocity,
                    55100 Kuala Lumpur Malaysia
                  </a>
                </h2>
                <h3 className="text-md drop-shadow-lg text-white font-normal hover:text-sky-200">
                  <a href="mailto: frank.lee@unitedalliedbusiness.com">
                    frank.lee@unitedalliedbusiness.com
                  </a>
                </h3>
                <h3 className="text-md drop-shadow-lg text-white font-normal hover:text-sky-200">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=0122190198"
                  >
                    Mobile / Whatsapp: +6012 2190198
                  </a>
                </h3>
                <h3 className="text-md drop-shadow-lg text-white font-normal">
                  Office Tel / Fax: +603 9775 9599
                </h3>
              </div>
            </Row>
            {/* FORM STARTS HERE */}
            <Row className="flex relative bg-white/30 backdrop-blur-xl w-[320px] flex-col place-content-center 1150:rounded-r-lg mlg:rounded-b-lg">
              <Form
                form={form}
                onFinish={submitForm}
                className="flex flex-col relative z-[999] items-center justify-evenly max-w-[500px] p-[10px]"
                initialValues={{
                  remember: true,
                }}
              >
                {/* COL FOR EMAIL, SUBJECT & MESSAGE ONLY */}
                <Col className="space-y-[13px]">
                  {/* NAME */}
                  <Form.Item
                    name="name"
                    label={
                      <p className="text-[14px] drop-shadow-lg text-white pr-5">
                        Name
                        <span className="text-red-600 px-[3px]">*</span>
                      </p>
                    }
                    className="flex flex-col items-baseline"
                    rules={[
                      {
                        required: true,
                        message: (
                          <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                scale: 0.8,
                                opacity: 0,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 0.4,
                                },
                              },
                            }}
                            className="absolute text-left text-[12px] drop-shadow-sm text-red-600 transform transition-all duration-150 ease-out scale-0"
                          >
                            Name is Required!
                          </motion.span>
                        ),
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="text-left text-[13px] rounded-lg px-1 shadow-sm w-[280px] h-[24px] outline-none"
                      onChange={(val) => setName(val.target.value)}
                      value={name}
                    />
                  </Form.Item>
                  {/* PHONE NUMBER */}
                  <Form.Item
                    name="number"
                    label={
                      <p className="text-[14px] drop-shadow-lg text-white pr-5">
                        Phone Number
                        <span className="text-red-600 px-[3px]">*</span>
                      </p>
                    }
                    type="number"
                    className="flex flex-col items-baseline"
                    rules={[
                      {
                        required: true,
                        message: (
                          <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                scale: 0.8,
                                opacity: 0,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 0.4,
                                },
                              },
                            }}
                            className=" absolute text-left text-[12px] drop-shadow-sm text-red-600 transform transition-all duration-150 ease-out scale-0"
                          >
                            Phone Number is Required!
                          </motion.span>
                        ),
                      },
                    ]}
                  >
                    <Input
                      className="text-left text-[13px] rounded-lg px-1 shadow-sm w-[280px] h-[24px] outline-none"
                      onChange={(val) => setPhone(val.target.value)}
                      value={phone}
                    />
                  </Form.Item>
                  {/* EMAIL ADDRESS */}
                  <Form.Item
                    name="email"
                    label={
                      <p className="text-[14px] drop-shadow-lg text-white pr-5">
                        Email<span className="text-red-600 px-[3px]">*</span>
                      </p>
                    }
                    className="flex flex-col items-baseline"
                    rules={[
                      {
                        required: true,
                        message: (
                          <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                scale: 0.8,
                                opacity: 0,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 0.4,
                                },
                              },
                            }}
                            className="absolute text-left text-[12px] drop-shadow-sm text-red-600 transform transition-all duration-150 ease-out scale-0"
                          >
                            Email is Required!
                          </motion.span>
                        ),
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      className="text-left text-[13px] rounded-lg px-1 shadow-sm w-[280px] h-[24px] outline-none"
                      onChange={(val) => setEmail(val.target.value)}
                      value={email}
                    />
                  </Form.Item>
                  {/* ADDRESS */}
                  <Form.Item
                    name="address"
                    label={
                      <p className="text-[14px] drop-shadow-lg text-white pr-5">
                        Address
                      </p>
                    }
                    type="text"
                    className="flex flex-col items-baseline"
                  >
                    <TextArea
                      className="text-left text-[13px] rounded-lg px-1 shadow-sm w-[280px] h-[60px] outline-none"
                      onChange={(val) => setAddress(val.target.value)}
                      value={address}
                    />
                  </Form.Item>
                  {/* SUBJECT*/}
                  <Form.Item
                    name="subject"
                    label={
                      <p className="text-[14px] drop-shadow-lg text-white pr-5">
                        Subject<span className="text-red-600 px-[3px]">*</span>
                      </p>
                    }
                    className="flex flex-col items-baseline"
                    rules={[
                      {
                        required: true,
                        message: (
                          <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                scale: 0.8,
                                opacity: 0,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 0.4,
                                },
                              },
                            }}
                            className="absolute text-left text-[12px] drop-shadow-sm text-red-600 transform transition-all duration-150 ease-out scale-0"
                          >
                            Subject is Required!
                          </motion.span>
                        ),
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="text-left text-[13px] rounded-lg px-1 shadow-sm w-[280px] h-[24px] outline-none"
                      onChange={(val) => setSubject(val.target.value)}
                      value={subject}
                    />
                  </Form.Item>
                  {/* MESSAGE */}
                  <Form.Item
                    name="textArea"
                    label={
                      <p className="text-[14px] drop-shadow-lg text-white pr-5">
                        Message<span className="text-red-600 px-[3px]">*</span>
                      </p>
                    }
                    className="flex flex-col items-baseline"
                    rules={[
                      {
                        required: true,
                        message: (
                          <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                scale: 0.8,
                                opacity: 0,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 0.4,
                                },
                              },
                            }}
                            className="text-left text-[12px] drop-shadow-sm text-red-600 transform transition-all duration-150 ease-out scale-0"
                          >
                            Please write a message!
                          </motion.span>
                        ),
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      className="text-left text-[13px] rounded-lg px-1 shadow-sm w-[280px] h-[60px] outline-none"
                      onChange={(val) => setTextArea(val.target.value)}
                      value={textArea}
                    />
                  </Form.Item>
                </Col>
                <Col className="py-[10px]">
                  <Button
                    className="flex justify-center overflow-hidden p-[5px] bg-gradient-to-b from-[#0D73D5] to-[#073590] rounded-md"
                    htmlType="submit"
                  >
                    <span class="text-center text-[12px] px-[15px] py-[5px] text-white hover:text-sky-200 font-bold">
                      Submit Now
                    </span>
                  </Button>
                </Col>
              </Form>
            </Row>
          </article>
          <BlobBg2 className="absolute left-[-600px] top-[-160px] w-[1800px] z-[0] opacity-40" />
        </section>
        <BlobBg2 className="absolute left-0 top-[400px] w-[900px] z-[-1] opacity-90" />
        <BlobBg1 className="absolute right-0 bottom-[400px] w-[900px] z-[-1] opacity-90" />
        <Button className="p-[10px] z-50 rounded-xl bg-gradient-to-b from-[#0D73D5] to-[#073590] fixed bottom-[20px] right-[20px]">
          <Link href="#fifth-section">
            <a className="text-white text-md font-bold hover:text-sky-300 flex items-center space-x-1">
              <h1>Contact Us</h1>
            </a>
          </Link>
        </Button>
      </Content>
      <Footer className=" bg-white text-center drop-shadow-lg bg-cover p-[20px]">
        ©2022 by United Allied Business Sdn. Bhd.
      </Footer>
    </Layout>
  );
};

export default HomePage;

// bg-gradient-to-b from-[#0D73D5] to-[#073590]
//           <SlateWave className="absolute top-0 z-[0] opacity-40" />
//           <WhiteWave className="absolute top-0 z-[0] opacity-75" />
