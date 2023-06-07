import React, { useState } from "react";
import { useRouter } from "next/router";
import { Layout, Row, Col, Form, Input, Checkbox, Button, message } from "antd";
import Head from "next/head";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import MainNavigation from "../components/header";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.png";
import FacDeals from "../assets/logo/FacDeals.png";
import MyKad from "../assets/logo/MyKad.png";
import Sangfor from "../assets/logo/Sangfor.png";
import Teleworkr from "../assets/logo/Teleworkr.png";
import TakafulIkhlas from "../assets/logo/TakafulIkhlas.png";
import CIMB from "../assets/logo/CIMB.png";
import SundaeFi from "../assets/logo/SundaeFi.png";
import OptimalLogo from "../assets/logo/OptimalLogo.png";
import RemoteWork from "../assets/svg/RemoteWork.svg";
import BlobBg1 from "../assets/svg/svgBg/BlobBg1.svg";
import BlobBg2 from "../assets/svg/svgBg/BlobBg2.svg";

const { Footer, Content, Header } = Layout;

const detailedSolutionProvider = [
  {
    id: 2,
    title: "Deskera",
    desc: "Deskera is a leading cloud-based business software provider which include CRM, Project Management, Enterprise Resources Planning & Human Resources Management. Deskera proudly adopting the 'Open Source' philosophy, Deskera boasts the world's first fully integrated suite of web-based business applications. Because of Deskera's affordable price structure and rapid implementation cycle, customers are able to see positive ROI in a matter of weeks instead of the typical Time to market of 8-12 month",
    image: Image2,
    link: "https://www.deskera.com/",
  },
  {
    id: 3,
    title: "Hightech Payment Systems",
    desc: "HPS, an innovative payment software company at the forefront of the international payment industry. PowerCARD is HPS’ pioneering suite of solutions and can process any card type (credit, debit, prepaid, loyalty, corporate and fuel) via any channel (ATM, POS, internet and mobile) covering the entire payment value chain, and used by over 350 payments operators worldwide.",
    image: Image3,
    link: "https://www.hps-worldwide.com/",
  },
  {
    id: 4,
    title: "TekMonks",
    desc: "TekMonks is a Global leader in software services and IT consulting. With offices across 6 countries, with core strengths lie in the domain of Enterprise Software Solutions Development and Innovative Enterprise Mobile Application Development. Developing end to end Enterprise software solutions as well as providing software services to budding companies across web and mobile platform as core focus.",
    image: Image4,
    link: "https://tekmonks.com/apps/tekmonks/index.html?.=aHR0cHM6Ly90ZWttb25rcy5jb20vYXBwcy90ZWttb25rcy9ob21lLmh0bWw=",
  },
  {
    id: 5,
    title: "Rubrik",
    desc: "Rubrik is a Cloud Data Management Company that enables enterprises to maximize value from data that is increasingly fragmented across data centers and the cloud. Rubrik delivers a single, policy-driven platform for data recovery, governance, compliance, and cloud mobility. And, they are named a Leader in the 2020 Magic Quadrant for Data Center Backup & Recovery Solutions and placed in the furthest position for Completeness of Vision.",
    image: Image5,
    link: "https://www.rubrik.com/",
  },
  {
    id: 6,
    title: "Google",
    desc: "Google is an open source platform that enables enterprises to quickly and efficiently integrate business processes with Google services",
    image: Image6,
    link: "https://www.google.com/",
  },
  {
    id: 7,
    title: "OutSystem",
    desc: "OutSystem is a low-code platform which provide tools for organizations to quickly develop, deploy and manage enterprise applications",
    image: Image7,
    link: "https://www.outsystems.com/",
  },
  {
    id: 8,
    title: "Sangfor",
    desc: "Sangfor takes its commitment to create next-level solutions seriously – and has built a foundation on the idea of creation, individualism, and growth through IT.",
    image: Sangfor,
    link: "https://www.sangfor.com/",
  },
];

const projectListPartOne = [
  {
    id: 1,
    name: "Teleworkr",
    image: Teleworkr,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, lacinia id tortor quis, condimentum viverra lectus. Ut ut felis arcu.",
  },
  {
    id: 2,
    name: "Facdeals Resource",
    image: FacDeals,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, lacinia id tortor quis, condimentum viverra lectus. Ut ut felis arcu.",
  },
  {
    id: 3,
    name: "Malaysia MyKad & MyKid Detection & OCR",
    image: MyKad,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, lacinia id tortor quis, condimentum viverra lectus. Ut ut felis arcu.",
  },
];

const projectListPartTwo = [
  {
    id: 4,
    name: "Payment Gateway Integration - CIMB",
    image: CIMB,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, lacinia id tortor quis, condimentum viverra lectus. Ut ut felis arcu.",
  },
  {
    id: 5,
    name: "Online Motor Insurance - Takaful IKHLAS",
    image: TakafulIkhlas,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, lacinia id tortor quis, condimentum viverra lectus. Ut ut felis arcu.",
  },
  {
    id: 6,
    name: "SunadeFi",
    image: SundaeFi,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, lacinia id tortor quis, condimentum viverra lectus. Ut ut felis arcu.",
  },
];

const Solutions = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [openFirstIndex, setOpenFirstIndex] = useState(null);
  const [openSecondIndex, setOpenSecondIndex] = useState(null);

  return (
    <Layout className="min-h-full">
      <Head>
        <link rel="shortcut icon" href="UABfav.png" />
        <title>Solutions | Business IT Consulting Services</title>
        <meta
          name="description"
          content="United Allied Business | Business IT Consulting Services"
        />
      </Head>
      <Header className="sticky top-[-1px] z-50">
        <MainNavigation />
      </Header>
      <Content className="relative min-h-85/100 flex justify-center items-center flex-col bg-no-repeat bg-cover overflow-hidden">
        {/* FIRST SECTION - TITLE OF PAGE AND BG IMAGE */}
        <section className="relative bg-cover bg-center max-w-[1150px] py-[40px] px-[15px]">
          <Row className="flex msm:flex-col msm:justify-center msm:items-center justify-between bg-cover bg-center">
            <Row>
              <svg
                viewBox="0 0 866 712"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[300px] h-full mlg:w-[250px] msm:w-[250px] mssm:hidden"
              >
                <g id="Group 1">
                  <g
                    id="undraw_my_notifications_re_ehmk 1"
                    clip-path="url(#clip0_1_40)"
                  >
                    <path
                      id="Path 339"
                      d="M443.986 168.892H440.086V61.915C440.086 45.4941 433.563 29.7458 421.952 18.1345C410.34 6.52314 394.592 -3.05095e-05 378.171 -3.05095e-05H151.521C143.39 -0.000161832 135.339 1.60119 127.827 4.71259C120.315 7.82398 113.49 12.3845 107.74 18.1337C101.991 23.883 97.4302 30.7084 94.3185 38.2202C91.2069 45.732 89.6053 53.7832 89.6051 61.914V648.798C89.6051 656.929 91.2066 664.98 94.3181 672.492C97.4297 680.004 101.99 686.829 107.74 692.579C113.489 698.328 120.314 702.888 127.826 706C135.338 709.111 143.389 710.713 151.52 710.713H378.168C394.589 710.713 410.337 704.19 421.949 692.579C433.56 680.967 440.083 665.219 440.083 648.798V245.04H443.983L443.986 168.892Z"
                      fill="#3F3D56"
                    />
                    <path
                      id="Path 340"
                      d="M427.459 57.768V652.943C427.457 665.393 422.511 677.333 413.709 686.137C404.906 694.942 392.967 699.89 380.517 699.895H149.217C136.762 699.897 124.817 694.951 116.008 686.146C107.199 677.341 102.248 665.398 102.244 652.943V57.768C102.248 45.3134 107.198 33.3704 116.007 24.5656C124.815 15.7608 136.761 10.8154 149.215 10.817H177.273C175.895 14.2049 175.371 17.8795 175.746 21.5176C176.121 25.1557 177.384 28.646 179.424 31.6817C181.464 34.7174 184.218 37.2055 187.445 38.9275C190.672 40.6494 194.272 41.5523 197.929 41.557H329.797C333.455 41.5523 337.055 40.6494 340.281 38.9275C343.508 37.2055 346.263 34.7174 348.302 31.6817C350.342 28.646 351.605 25.1557 351.98 21.5176C352.355 17.8795 351.831 14.2049 350.453 10.817H380.508C392.958 10.8191 404.898 15.7651 413.702 24.5677C422.506 33.3704 427.455 45.309 427.459 57.7589V57.768Z"
                      fill="white"
                    />
                    <path
                      id="Vector"
                      d="M373.765 572.211H160.153C152.47 572.202 145.105 569.146 139.672 563.714C134.24 558.281 131.184 550.916 131.175 543.233V242.729C131.175 169.767 190.534 110.408 263.496 110.408H373.765C381.448 110.417 388.813 113.472 394.245 118.905C399.678 124.337 402.734 131.702 402.742 139.385V543.233C402.734 550.916 399.678 558.281 394.245 563.714C388.813 569.146 381.447 572.202 373.765 572.211Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Ellipse 7"
                      d="M147.357 644.547C155.851 644.547 162.736 637.661 162.736 629.168C162.736 620.675 155.851 613.789 147.357 613.789C138.864 613.789 131.979 620.675 131.979 629.168C131.979 637.661 138.864 644.547 147.357 644.547Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Ellipse 7_2"
                      d="M386.863 644.547C395.357 644.547 402.242 637.661 402.242 629.168C402.242 620.675 395.357 613.789 386.863 613.789C378.37 613.789 371.485 620.675 371.485 629.168C371.485 637.661 378.37 644.547 386.863 644.547Z"
                      fill="#E6E6E6"
                    />
                    <path
                      id="Vector_2"
                      d="M388.948 571.619L379.414 582.009L334.805 550.181L348.876 534.847L388.948 571.619Z"
                      fill="#FFB6B6"
                    />
                    <path
                      id="Vector_3"
                      d="M401.45 578.211L370.71 611.71L370.287 611.321C366.829 608.148 364.773 603.731 364.571 599.042C364.37 594.353 366.039 589.776 369.212 586.318L369.213 586.317L370.185 575.938L385.304 568.781L387.987 565.857L401.45 578.211Z"
                      fill="#2F2E41"
                    />
                    <path
                      id="Vector_4"
                      d="M395.181 687.559L381.081 687.558L374.373 633.171L395.184 633.172L395.181 687.559Z"
                      fill="#FFB6B6"
                    />
                    <path
                      id="Vector_5"
                      d="M398.777 701.227L353.312 701.225V700.65C353.312 695.957 355.177 691.456 358.495 688.137C361.814 684.819 366.315 682.954 371.008 682.954H371.009L379.314 676.654L394.809 682.955L398.778 682.955L398.777 701.227Z"
                      fill="#2F2E41"
                    />
                    <path
                      id="Path 17"
                      d="M327.089 413.002C327.089 413.002 240.951 496.169 295.406 521.912H312.237C312.237 521.912 317.295 503.943 328.874 488.789C330.465 486.708 336.422 487.131 338.076 485.103C348.178 472.72 359.129 462.085 366.692 462.507L371.642 519.932L369.2 536.763C367.662 547.359 368.067 558.146 370.394 568.597L368.672 635.772L398.874 635.789C398.874 635.789 400.094 620.046 401.115 600.355C401.388 595.08 403.657 591.404 403.874 585.789C404.396 572.328 402.668 556.66 402.335 545.674L425.107 424.883L327.089 413.002Z"
                      fill="#2F2E41"
                    />
                    <path
                      id="Path 22"
                      d="M366.874 236.789L352.829 255.578L319.166 275.378L338.966 326.862L339.717 365.168L337.874 369.789L339.956 377.357C339.956 377.357 338.995 386.214 333.874 392.789C324.921 404.286 311.249 416.781 325.105 419.931C346.887 424.882 424.114 435.772 428.074 426.862C429.444 423.78 429.274 410.746 428.465 395.014C428.314 392.073 425.064 388.872 424.874 385.789C424.732 383.476 427.656 381.3 427.497 378.954C425.731 352.809 423.124 325.873 423.124 325.873L430.874 253.789L399.874 245.789L396.394 236.917L366.874 236.789Z"
                      fill="#6C63FF"
                    />
                    <path
                      id="Path 18"
                      d="M291.27 516.972L295.874 522.789C295.874 522.789 338.219 552.414 339.673 555.183L346.365 561.515L362.557 544.206L354.137 533.652C347.398 525.206 338.692 518.54 328.78 514.239V514.239L315.874 502.789L291.27 516.972Z"
                      fill="#2F2E41"
                    />
                    <path
                      id="Vector_6"
                      d="M318.176 433.824L325.888 359.185L327.923 328.466L306.34 324.563C306.34 324.563 303.108 345.681 300.28 358.074C297.49 370.303 303.997 432.185 304.17 433.817C302.585 435.235 301.467 437.1 300.965 439.166C300.463 441.233 300.601 443.402 301.359 445.389C302.117 447.376 303.46 449.085 305.211 450.292C306.962 451.498 309.038 452.145 311.164 452.146C313.291 452.147 315.367 451.502 317.119 450.298C318.871 449.093 320.216 447.384 320.976 445.398C321.736 443.413 321.876 441.243 321.376 439.176C320.876 437.109 319.76 435.243 318.176 433.824V433.824Z"
                      fill="#FFB9B9"
                    />
                    <path
                      id="Vector_7"
                      d="M290.29 371.724L327.549 381.182L327.29 370.724L330.118 367.724L335.768 338.127L343.874 320.789L341.767 261.5L321.179 272.419L321.154 272.439C317.558 276.394 314.551 280.846 312.226 285.659C304.464 301.437 297.008 336.192 293.105 356.378C292.971 356.801 292.712 357.174 292.363 357.448C290.427 359.225 289.163 361.616 288.786 364.217C288.408 366.818 288.94 369.47 290.29 371.724L290.29 371.724Z"
                      fill="#6C63FF"
                    />
                    <path
                      id="Vector_8"
                      d="M511.551 390.78C511.551 390.78 466.192 342.96 465.769 342.058C462.601 317.997 453.488 307.384 452.122 308.536L428.601 316.684C428.601 316.684 435.597 338.839 440.334 351.999C444.86 364.573 497.027 395.287 497.897 396.803C496.963 398.867 496.676 401.166 497.077 403.395C497.477 405.625 498.545 407.681 500.139 409.291C501.733 410.901 503.778 411.989 506.004 412.411C508.23 412.833 510.531 412.57 512.604 411.655C514.677 410.741 516.423 409.219 517.612 407.29C518.801 405.362 519.377 403.118 519.263 400.855C519.148 398.593 518.35 396.418 516.973 394.619C515.596 392.82 513.706 391.481 511.551 390.78H511.551Z"
                      fill="#FFB9B9"
                    />
                    <path
                      id="Vector_9"
                      d="M409.608 255.435C409.608 255.435 432.697 244.119 441.652 266.344C446.562 278.891 459.118 309.342 465.375 328.087C465.417 328.206 465.474 328.319 465.546 328.423C467.219 330.91 468.122 333.835 468.142 336.832C468.14 337.05 468.163 337.268 468.21 337.481C468.21 337.481 442.837 342.424 435.29 355.724L432.297 352.476L431.765 350.2L409.874 291.789L409.608 255.435Z"
                      fill="#6C63FF"
                    />
                    <g id="Chat1">
                      <path
                        id="Vector_10"
                        d="M805.407 334.761H535.085C532.676 334.758 530.367 333.8 528.664 332.097C526.961 330.394 526.003 328.084 526 325.676V286.085C526.003 283.676 526.961 281.367 528.664 279.664C530.367 277.961 532.676 277.003 535.085 277H805.407C807.816 277.003 810.125 277.961 811.828 279.664C813.531 281.367 814.489 283.676 814.492 286.085V325.676C814.489 328.084 813.531 330.394 811.828 332.097C810.125 333.8 807.816 334.758 805.407 334.761V334.761Z"
                        fill="#E6E6E6"
                      />
                      <path
                        id="Vector_11"
                        d="M779.142 328.633H541.214C538.806 328.63 536.497 327.672 534.793 325.969C533.09 324.266 532.132 321.957 532.129 319.548V292.218C532.132 289.809 533.09 287.5 534.793 285.797C536.497 284.094 538.806 283.136 541.214 283.133H799.279C801.688 283.136 803.997 284.094 805.7 285.797C807.403 287.5 808.362 289.809 808.364 292.218V299.411C808.356 307.158 805.274 314.586 799.796 320.064C794.317 325.543 786.89 328.624 779.142 328.633V328.633Z"
                        fill="white"
                      />
                      <path
                        id="Vector_12"
                        d="M697.071 303.064H588.422C587.8 303.064 587.205 302.817 586.765 302.378C586.326 301.938 586.079 301.342 586.079 300.721C586.079 300.1 586.326 299.504 586.765 299.064C587.205 298.625 587.8 298.378 588.422 298.378H697.071C697.692 298.378 698.288 298.625 698.728 299.064C699.167 299.504 699.414 300.1 699.414 300.721C699.414 301.342 699.167 301.938 698.728 302.378C698.288 302.817 697.692 303.064 697.071 303.064V303.064Z"
                        fill="#6C63FF"
                      />
                      <path
                        id="Vector_13"
                        d="M752.071 312.647H588.422C587.8 312.647 587.205 312.4 586.765 311.961C586.326 311.521 586.079 310.925 586.079 310.304C586.079 309.683 586.326 309.087 586.765 308.647C587.205 308.208 587.8 307.961 588.422 307.961H752.071C752.692 307.961 753.288 308.208 753.728 308.647C754.167 309.087 754.414 309.683 754.414 310.304C754.414 310.925 754.167 311.521 753.728 311.961C753.288 312.4 752.692 312.647 752.071 312.647V312.647Z"
                        fill="#E6E6E6"
                      />
                    </g>
                    <g id="Chat2">
                      <path
                        id="Vector_14"
                        d="M805.407 418.761H535.085C532.676 418.758 530.367 417.8 528.664 416.097C526.961 414.394 526.003 412.084 526 409.676V370.085C526.003 367.676 526.961 365.367 528.664 363.664C530.367 361.961 532.676 361.003 535.085 361H805.407C807.816 361.003 810.125 361.961 811.828 363.664C813.531 365.367 814.489 367.676 814.492 370.085V409.676C814.489 412.084 813.531 414.394 811.828 416.097C810.125 417.8 807.816 418.758 805.407 418.761V418.761Z"
                        fill="#E6E6E6"
                      />
                      <path
                        id="Vector_15"
                        d="M779.142 412.633H541.214C538.806 412.63 536.497 411.672 534.793 409.969C533.09 408.266 532.132 405.957 532.129 403.548V376.218C532.132 373.809 533.09 371.5 534.793 369.797C536.497 368.094 538.806 367.136 541.214 367.133H799.279C801.688 367.136 803.997 368.094 805.7 369.797C807.403 371.5 808.362 373.809 808.364 376.218V383.411C808.356 391.158 805.274 398.586 799.796 404.064C794.317 409.543 786.89 412.624 779.142 412.633Z"
                        fill="white"
                      />
                      <path
                        id="Vector_16"
                        d="M697.071 387.064H588.422C588.114 387.064 587.81 387.003 587.525 386.886C587.241 386.768 586.983 386.595 586.765 386.378C586.548 386.16 586.375 385.902 586.257 385.618C586.139 385.333 586.079 385.029 586.079 384.721C586.079 384.413 586.139 384.109 586.257 383.824C586.375 383.54 586.548 383.282 586.765 383.064C586.983 382.847 587.241 382.674 587.525 382.556C587.81 382.439 588.114 382.378 588.422 382.378H697.071C697.692 382.378 698.288 382.625 698.728 383.064C699.167 383.504 699.414 384.1 699.414 384.721C699.414 385.342 699.167 385.938 698.728 386.378C698.288 386.817 697.692 387.064 697.071 387.064V387.064Z"
                        fill="#6C63FF"
                      />
                      <path
                        id="Vector_17"
                        d="M752.071 396.647H588.422C588.114 396.647 587.81 396.586 587.525 396.469C587.241 396.351 586.983 396.178 586.765 395.961C586.548 395.743 586.375 395.485 586.257 395.201C586.139 394.916 586.079 394.612 586.079 394.304C586.079 393.996 586.139 393.692 586.257 393.407C586.375 393.123 586.548 392.865 586.765 392.647C586.983 392.43 587.241 392.257 587.525 392.139C587.81 392.022 588.114 391.961 588.422 391.961H752.071C752.692 391.961 753.288 392.208 753.728 392.647C754.167 393.087 754.414 393.683 754.414 394.304C754.414 394.925 754.167 395.521 753.728 395.961C753.288 396.4 752.692 396.647 752.071 396.647V396.647Z"
                        fill="#E6E6E6"
                      />
                    </g>
                    <g id="Chat3">
                      <path
                        id="Vector_18"
                        d="M805.407 502.761H535.085C532.676 502.758 530.367 501.8 528.664 500.097C526.961 498.394 526.003 496.084 526 493.676V454.085C526.003 451.676 526.961 449.367 528.664 447.664C530.367 445.961 532.676 445.003 535.085 445H805.407C807.816 445.003 810.125 445.961 811.828 447.664C813.531 449.367 814.489 451.676 814.492 454.085V493.676C814.489 496.084 813.531 498.394 811.828 500.097C810.125 501.8 807.816 502.758 805.407 502.761V502.761Z"
                        fill="#E6E6E6"
                      />
                      <path
                        id="Vector_19"
                        d="M779.142 496.633H541.214C538.806 496.63 536.497 495.672 534.793 493.969C533.09 492.266 532.132 489.957 532.129 487.548V460.218C532.132 457.809 533.09 455.5 534.793 453.797C536.497 452.094 538.806 451.136 541.214 451.133H799.279C801.688 451.136 803.997 452.094 805.7 453.797C807.403 455.5 808.362 457.809 808.364 460.218V467.411C808.356 475.158 805.274 482.586 799.796 488.064C794.317 493.543 786.89 496.624 779.142 496.633Z"
                        fill="white"
                      />
                      <path
                        id="Vector_20"
                        d="M697.071 471.064H588.422C587.8 471.064 587.205 470.817 586.765 470.378C586.326 469.938 586.079 469.342 586.079 468.721C586.079 468.1 586.326 467.504 586.765 467.064C587.205 466.625 587.8 466.378 588.422 466.378H697.071C697.692 466.378 698.288 466.625 698.728 467.064C699.167 467.504 699.414 468.1 699.414 468.721C699.414 469.342 699.167 469.938 698.728 470.378C698.288 470.817 697.692 471.064 697.071 471.064Z"
                        fill="#6C63FF"
                      />
                      <path
                        id="Vector_21"
                        d="M752.071 480.647H588.422C587.8 480.647 587.205 480.4 586.765 479.961C586.326 479.521 586.079 478.925 586.079 478.304C586.079 477.683 586.326 477.087 586.765 476.647C587.205 476.208 587.8 475.961 588.422 475.961H752.071C752.692 475.961 753.288 476.208 753.728 476.647C754.167 477.087 754.414 477.683 754.414 478.304C754.414 478.925 754.167 479.521 753.728 479.961C753.288 480.4 752.692 480.647 752.071 480.647V480.647Z"
                        fill="#E6E6E6"
                      />
                    </g>
                    <path
                      id="Ellipse 5"
                      d="M381.674 230.758C397.288 230.758 409.946 218.1 409.946 202.486C409.946 186.872 397.288 174.214 381.674 174.214C366.06 174.214 353.402 186.872 353.402 202.486C353.402 218.1 366.06 230.758 381.674 230.758Z"
                      fill="#FFB9B9"
                    />
                    <path
                      id="Vector_22"
                      d="M360.887 220.669C360.547 220.67 360.211 220.616 359.889 220.508C358.627 219.955 357.572 219.017 356.875 217.829C352.008 210.828 349.657 201.494 349.89 190.086C349.989 185.259 350.535 179.088 353.915 174.17C356.757 170.034 362.507 166.751 367.865 168.399C367.804 167.327 368.042 166.26 368.553 165.316C369.063 164.372 369.825 163.588 370.755 163.052C372.785 161.809 375.228 161.58 377.383 161.377C382.825 160.867 388.451 160.34 393.962 161.384C400.141 162.556 405.193 165.741 407.823 170.122L407.877 170.259L408.411 172.855C408.483 173.204 408.63 173.534 408.841 173.82C409.052 174.107 409.323 174.345 409.635 174.517C409.947 174.689 410.293 174.792 410.648 174.817C411.003 174.843 411.36 174.791 411.694 174.666C412.058 174.529 412.451 174.489 412.835 174.551C413.219 174.612 413.58 174.773 413.883 175.016C414.187 175.26 414.421 175.579 414.563 175.941C414.705 176.303 414.751 176.696 414.695 177.08L414.546 178.113L416.1 177.822C416.489 177.75 416.89 177.782 417.263 177.915C417.635 178.048 417.966 178.277 418.221 178.579C418.476 178.882 418.646 179.246 418.715 179.636C418.783 180.025 418.747 180.426 418.61 180.797L418.171 181.985C418.492 181.987 418.81 182.055 419.104 182.184C419.398 182.314 419.663 182.502 419.882 182.738C420.196 183.076 420.394 183.506 420.447 183.964C420.5 184.423 420.405 184.887 420.175 185.287C418.438 188.257 415.974 190.737 413.015 192.491C411.397 193.464 409.629 194.16 407.782 194.549C395.797 197.136 383.44 197.507 371.322 195.646C372.039 198.036 372.316 200.537 372.137 203.026C371.749 206.138 369.922 208.707 367.481 209.569C366.926 209.75 366.357 209.887 365.78 209.979C365.228 210.065 364.685 210.197 364.155 210.374C363.371 210.662 362.676 211.153 362.141 211.795C361.606 212.438 361.25 213.21 361.109 214.034C360.968 214.858 361.046 215.705 361.337 216.488C361.628 217.272 362.12 217.966 362.764 218.499L363.967 217.245L363.576 218.839C363.494 219.149 363.348 219.439 363.147 219.689C362.946 219.94 362.695 220.145 362.409 220.291C361.941 220.541 361.418 220.671 360.887 220.669Z"
                      fill="#2F2E41"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_40">
                    <rect width="865.67" height="711.472" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Row>
            <Row className="flex flex-col justify-center items-start">
              <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text font-bold text-center text-4xl drop-shadow-lg max-w-[400px] 500:pt-[40px]">
                Technology & Solution Partners
              </h1>
            </Row>
          </Row>
        </section>
        {/* SECOND SECTION - DETAILS OF THE SOLUTION PLUS LINK */}
        <section className="flex flex-col justify-center items-center divide-y divide-blue-500 px-[15px]">
          {detailedSolutionProvider.map((item) => (
            <Row
              key={item.id}
              className="flex flex-row justify-evenly items-center p-[40px] max-w-[1000px] relative mlg:flex-col"
            >
              <img
                src={item.image.src}
                width={150}
                className="rounded-xl shadow-xl mr-[40px] mlg:mr-0 cursor-pointer hover:scale-90 ease-in duration-500"
                alt={item.title}
                onClick={() => router.push(item.link)}
              />
              <div className="flex flex-col items-center max-w-[900px]">
                <h1 className="text-center text-xl font-bold m-[10px]">
                  {item.title}
                </h1>
                <p className="text-justify text-md">{item.desc}</p>
              </div>
            </Row>
          ))}
        </section>
        {/* THIRD SECTION - SECTION BREAK */}
        <section className="relative bg-cover bg-center max-w-[1150px] p-[40px]">
          <Row className="flex msm:flex-col msm:justify-center msm:items-center justify-between bg-cover bg-center">
            <Row className="flex flex-col justify-center items-start">
              <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text font-bold text-center text-4xl drop-shadow-lg msm:hidden max-w-[400px]">
                Effective Work Flow Solutions for Effective Work Environment
              </h1>
            </Row>
            <RemoteWork className="w-[300px] h-full mlg:w-[250px] " />
          </Row>
        </section>
        {/* FOURTH SECTION - OUR PROJECTS */}
        <section className="relative flex flex-col pt-[40px] px-[15px]">
          <Row className="flex flex-col justify-center items-center space-y-4">
            <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text text-center text-3xl font-bold">
              Our Projects
            </h1>
            <p className="text-center msm:text-justify max-w-[900px] px-[40px]">
              Business IT Consulting Services helps all businesses not only
              reach, but exceed their goals. Our experience helps us lay out a
              strategy that perfectly fits our clients. This collaboration is
              essential for the successful transition from strategy, to plan, to
              action. Learn about some of our past projects below, and get in
              touch to see what we can do for you.
            </p>
          </Row>
          <Row className="relative py-[40px] 500:space-y-[50px] mssm:space-y-[50px]">
            <Row className="flex mssm:flex-col mssm:space-y-[50px] items-center justify-center 500:space-x-[20px] 800:space-x-[120px]">
              {projectListPartOne.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex justify-center rounded-lg items-center relative max-w-[200px] msm:max-w-[170px] max-h-[100px] h-[400px]"
                  onClick={() =>
                    setOpenFirstIndex((openFirstIndex) =>
                      openFirstIndex === index ? null : index
                    )
                  }
                >
                  <img
                    src={item.image.src}
                    className="w-[150px] hover:scale-90 ease-in duration-500 cursor-pointer"
                    alt={item.name}
                  />

                  {/* {openFirstIndex === index && (
                    <motion.div
                      key={item.id}
                      className="text-center rounded-lg shadow-3xl bg-white transition-all duration-500 absolute w-[200px]"
                    >
                      <h1 className="p-[5px] text-[18px] bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text font-bold">
                        {item.name}
                      </h1>
                      <p className="p-[5px] text-[15px]">{item.detail}</p>
                    </motion.div>
                  )} */}
                </motion.div>
              ))}
              {/* {projectListPartOne.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex justify-center rounded-lg items-center relative max-w-[200px] msm:max-w-[170px] max-h-[100px] h-[400px]"
                ></motion.div>
              ))} */}
            </Row>
            <Row className="flex mssm:flex-col mssm:space-y-[50px] items-center justify-center 500:space-x-[20px] 800:space-x-[120px]">
              {projectListPartTwo.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex justify-center rounded-lg items-center relative max-w-[200px] msm:max-w-[170px] max-h-[100px] h-[400px]"
                  onClick={() =>
                    setOpenSecondIndex((openSecondIndex) =>
                      openSecondIndex === index ? null : index
                    )
                  }
                >
                  <img
                    src={item.image.src}
                    className="w-[150px] hover:scale-90 ease-in duration-500 cursor-pointer"
                    alt={item.name}
                  />

                  {/* {openSecondIndex === index && (
                    <motion.div
                      key={item.id}
                      className="text-center rounded-lg shadow-3xl bg-white transition-all duration-500 absolute w-[200px]"
                    >
                      <h1 className="p-[5px] text-[18px] bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text font-bold">
                        {item.name}
                      </h1>
                      <p className="p-[5px] text-[15px]">{item.detail}</p>
                    </motion.div>
                  )} */}
                </motion.div>
              ))}
              {/* {projectListPartOne.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex justify-center rounded-lg items-center relative max-w-[200px] msm:max-w-[170px] max-h-[100px] h-[400px]"
                ></motion.div>
              ))} */}
            </Row>
            <Row className="flex mssm:flex-col mssm:space-y-[50px] items-center justify-center">
              <Row>
                <img
                  src={OptimalLogo.src}
                  className="w-[150px] mt-[-55px] mssm:mt-[-70px] hover:scale-90 ease-in duration-500 cursor-pointer"
                  alt="Optimal360"
                />
              </Row>
            </Row>
          </Row>
        </section>
        <BlobBg2 className="absolute left-0 top-[400px] w-[900px] z-[-1] opacity-90" />
        <BlobBg1 className="absolute right-0 bottom-[400px] w-[900px] z-[-1] opacity-90" />
      </Content>
      <Footer className=" bg-white text-center drop-shadow-lg bg-cover p-[20px]">
        ©2022 by United Allied Business Sdn. Bhd.
      </Footer>
    </Layout>
  );
};

export default Solutions;
