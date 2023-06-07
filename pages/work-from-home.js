import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Button,
  message,
  Card,
} from "antd";
import Head from "next/head";

import MainNavigation from "../components/header";
import Biometrics from "../assets/svg/FingerPrint.svg";
import Computer from "../assets/svg/Computer.svg";
import Security from "../assets/svg/Lock.svg";
import Server from "../assets/svg/Database.svg";
import Distribute from "../assets/svg/Network.svg";
import License from "../assets/svg/License.svg";
import TakafulLogo from "../assets/TakafulLogo.png";
import WorkFromHome from "../assets/svg/WorkFromHome.svg";
import BlobBg1 from "../assets/svg/svgBg/BlobBg1.svg";
import BlobBg2 from "../assets/svg/svgBg/BlobBg2.svg";
import Teleworkr from "../assets/logo/Teleworkr.png";

const { Footer, Content, Header } = Layout;

const WFH = () => {
  const featuresPartOne = [
    {
      id: 1,
      title: "SECURITY",
      detail: "No ports opened in corporate firewall= no risk",
      image: <Security />,
    },
    {
      id: 2,
      title: "MFA",
      detail: "Support trust based multi factor authentication",
      image: <Biometrics />,
    },
    {
      id: 3,
      title: "NOTHING TO INSTALL",
      detail: "Just install Teleworkr on in-house desktops or server",
      image: <Computer />,
    },
  ];
  const featuresPartTwo = [
    {
      id: 4,
      title: "CENTRALLY MANAGED",
      detail:
        "Allow to centrally manage the users who ahve access and those who do not",
      image: <Distribute />,
    },
    {
      id: 5,
      title: "RDP PROTOCOL",
      detail: "Use RDP protocol under the covers 100% compatible with Windows",
      image: <Server />,
    },
    {
      id: 6,
      title: "NO ADDITIONAL LICENSING",
      detail:
        "No need for additional licensing as each Windows license already include 2 RDP licenses",
      image: <License />,
    },
  ];

  return (
    <Layout className="min-h-full">
      <Head>
        <link rel="shortcut icon" href="UABfav.png" />
        <title>Work From Home | Business IT Consulting Services</title>
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
        <section className="relative bg-cover bg-center max-w-[1150px] 850:py-[40px] px-[15px] msm:pt-[40px]">
          <Row className="flex msm:flex-col msm:justify-center msm:items-center justify-between bg-cover bg-center">
            <Row className="flex flex-col justify-center items-start">
              <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text px-[20px] font-bold text-center text-4xl drop-shadow-lg max-w-[400px]">
                Implementing WFH Solutions
              </h1>
            </Row>
            <Row>
              <WorkFromHome className="w-[250px] h-full max-w-[806px] msm:hidden" />
            </Row>
          </Row>
        </section>
        {/* SECOND SECTION - IMG + WFH Explanation */}
        <section className="relative flex justify-center items-center mlg:items-center bg-cover max-w-[1150px] py-[40px] px-[15px]">
          <Row className="w-[200px] h-full max-w-[806px] msm:hidden">
            {/* <SocialDistance className="w-[250px] h-full max-w-[806px] mlg:w-[150px]" /> */}
            <svg
              viewBox="0 0 447 711"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 1">
                <path
                  id="Vector"
                  d="M254.623 184.749C254.622 183.938 254.782 183.134 255.092 182.384C255.403 181.634 255.858 180.953 256.432 180.379C257.006 179.805 257.687 179.35 258.437 179.039C259.187 178.729 259.991 178.569 260.803 178.57H285.183C285.995 178.568 286.8 178.727 287.551 179.037C288.302 179.347 288.984 179.802 289.559 180.376C290.134 180.95 290.59 181.632 290.901 182.382C291.213 183.133 291.373 183.937 291.373 184.749V186.439H347.453V101.139H195.913V186.439H254.623V184.749Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_2"
                  d="M396.213 101.14H355.323V186.44H390.043L396.213 101.14Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_3"
                  d="M347.45 0V93.26H298.18C272.618 93.2562 247.983 83.6807 229.128 66.4196C210.274 49.1585 198.566 25.4629 196.31 0H347.45Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_4"
                  d="M402.3 17.11L396.78 93.26H355.32V0H386.4C388.592 0.0011227 390.76 0.453897 392.769 1.33007C394.778 2.20624 396.584 3.48701 398.076 5.09247C399.568 6.69793 400.713 8.59362 401.44 10.6613C402.167 12.7289 402.46 14.9242 402.3 17.11Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_5"
                  d="M388.13 212.69L381.52 337.03L381.47 337.93L379.34 378.02C379.008 387.144 375.15 395.784 368.577 402.121C362.005 408.459 353.231 412 344.1 412H200.57C194.687 412.007 188.896 410.536 183.73 407.72C183.64 407.67 183.55 407.62 183.47 407.58C182.62 407.11 181.8 406.6 181 406.07C180.8 405.93 180.6 405.8 180.4 405.66C175.916 402.538 172.22 398.415 169.605 393.618C166.989 388.821 165.526 383.48 165.33 378.02L156.54 212.69H388.13Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_6"
                  d="M143.459 31.9009L147.903 93.2595H188.033V0H172.99C172.857 0 172.723 0.000599574 172.59 0.00179291C168.544 0.0632755 164.553 0.951764 160.864 2.61262C157.174 4.27347 153.863 6.67158 151.135 9.65945C148.406 12.6473 146.318 16.1618 144.998 19.9867C143.678 23.8116 143.154 27.8662 143.459 31.9009V31.9009Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_7"
                  d="M154.643 186.44H188.033V101.14H148.473L154.643 186.44Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_8"
                  d="M347.21 9H347.45V91H347.21C336.336 91 325.908 86.6804 318.219 78.9914C310.53 71.3024 306.21 60.8739 306.21 50C306.21 39.1261 310.53 28.6976 318.219 21.0086C325.908 13.3196 336.336 9 347.21 9V9Z"
                  fill="#6C63FF"
                />
                <path
                  id="Vector_9"
                  d="M388.21 50C388.208 59.4665 384.931 68.6408 378.937 75.9676C372.943 83.2943 364.599 88.3226 355.32 90.2V9.80002C364.599 11.6774 372.943 16.7057 378.937 24.0324C384.931 31.3592 388.208 40.5335 388.21 50V50Z"
                  fill="#6C63FF"
                />
                <path
                  id="ShootStar"
                  opacity="0.3"
                  d="M185.112 219.603C190.786 219.87 202.52 222.687 215.235 226.329C227.943 229.975 241.727 234.424 255.336 238.823C279.157 246.519 302.978 254.213 326.798 261.903C330.072 262.959 333.356 264.024 336.649 265.099C337.91 266.748 339.164 268.413 340.395 270.095C337.5 269.072 334.594 268.082 331.697 267.139C319.319 263.117 308.577 260.464 296.564 256.804C278.076 251.176 258.571 243.786 239.655 236.904C220.74 230.017 199.039 222.603 185.112 219.603Z"
                  fill="#F0F0F0"
                />
                <path
                  id="Vector_10"
                  d="M282.296 392.475C283.353 392.475 284.21 391.618 284.21 390.56C284.21 389.503 283.353 388.646 282.296 388.646C281.238 388.646 280.381 389.503 280.381 390.56C280.381 391.618 281.238 392.475 282.296 392.475Z"
                  fill="white"
                />
                <g id="Star2">
                  <path
                    id="Vector_11"
                    d="M268.296 50.4238C269.877 50.4238 271.159 49.1418 271.159 47.5603C271.159 45.9789 269.877 44.6968 268.296 44.6968C266.714 44.6968 265.432 45.9789 265.432 47.5603C265.432 49.1418 266.714 50.4238 268.296 50.4238Z"
                    fill="white"
                  />
                  <path
                    id="Vector_12"
                    d="M347.296 248.475C348.353 248.475 349.21 247.618 349.21 246.56C349.21 245.503 348.353 244.646 347.296 244.646C346.238 244.646 345.381 245.503 345.381 246.56C345.381 247.618 346.238 248.475 347.296 248.475Z"
                    fill="white"
                  />
                </g>
                <g id="Star1">
                  <path
                    id="Vector_13"
                    d="M370.296 128.424C371.877 128.424 373.159 127.142 373.159 125.56C373.159 123.979 371.877 122.697 370.296 122.697C368.714 122.697 367.432 123.979 367.432 125.56C367.432 127.142 368.714 128.424 370.296 128.424Z"
                    fill="white"
                  />
                  <path
                    id="Vector_14"
                    d="M237.296 139.475C238.353 139.475 239.21 138.618 239.21 137.56C239.21 136.503 238.353 135.646 237.296 135.646C236.238 135.646 235.381 136.503 235.381 137.56C235.381 138.618 236.238 139.475 237.296 139.475Z"
                    fill="white"
                  />
                </g>
                <path
                  id="Vector_15"
                  d="M209.296 296.475C210.353 296.475 211.21 295.618 211.21 294.56C211.21 293.503 210.353 292.646 209.296 292.646C208.238 292.646 207.381 293.503 207.381 294.56C207.381 295.618 208.238 296.475 209.296 296.475Z"
                  fill="white"
                />
                <path
                  id="Vector_16"
                  d="M299.441 317.567C298.771 317.128 298.078 316.686 297.367 316.264C294.049 314.299 290.362 312.767 286.759 313.816C282.983 314.914 280.57 318.509 278.536 321.875C267.522 340.095 257.97 359.159 249.97 378.889C262.655 368.31 265.929 349.895 277.235 337.851C279.148 335.817 281.581 333.867 284.37 333.991C286.618 334.089 288.548 335.505 290.53 336.566C295.751 339.363 301.866 339.825 307.775 340.232C315.953 340.798 324.132 341.362 332.313 341.926L332.324 341.796C326.529 337.01 320.596 332.408 314.525 327.989C309.581 324.387 304.553 320.913 299.441 317.567Z"
                  fill="#F2F2F2"
                />
                <path
                  id="Vector_17"
                  d="M356.16 362.51C347.669 351.216 337.976 340.879 327.25 331.68C326.39 330.94 325.52 330.21 324.64 329.48C322.76 327.93 320.857 326.413 318.93 324.93C314.85 321.81 310.664 318.857 306.37 316.07C303.79 314.4 301.174 312.79 298.52 311.24C297.85 310.85 297.18 310.46 296.5 310.08C294.81 309.13 293.12 308.18 291.39 307.3C289.737 306.33 287.882 305.755 285.97 305.62C279.4 305.52 275.99 312.96 273.65 317.97C272.92 319.55 272.177 321.123 271.42 322.69C268.58 328.64 265.627 334.533 262.56 340.37C260.67 343.98 258.74 347.567 256.77 351.13C253.97 356.18 251.094 361.18 248.14 366.13C244.6 372.07 240.95 377.94 237.19 383.74C230.72 393.71 224.29 402.85 217.39 412H218.43C226.12 401.65 233.424 391.043 240.34 380.18C246.34 370.76 252.047 361.163 257.46 351.39C260.03 346.74 262.534 342.053 264.97 337.33C266.85 333.66 268.694 329.977 270.5 326.28C271.02 325.22 271.52 324.16 272.02 323.09C273.2 320.58 274.35 318.06 275.59 315.59C277 312.78 278.71 309.82 281.31 307.93C282.488 307.033 283.896 306.489 285.37 306.36C287.451 306.377 289.487 306.961 291.26 308.05C293.61 309.28 295.937 310.56 298.24 311.89C305.249 315.971 311.99 320.497 318.42 325.44C321.88 328.1 325.244 330.867 328.51 333.74C339.878 343.719 350.038 354.996 358.78 367.34C359.05 367.72 359.68 367.36 359.41 366.97C358.35 365.47 357.267 363.983 356.16 362.51Z"
                  fill="#F2F2F2"
                />
                <path
                  id="Vector_18"
                  d="M376.05 332.77C372.31 329.99 368.437 327.403 364.43 325.01C362.43 323.81 360.41 322.67 358.35 321.57C357.73 321.24 357.1 320.92 356.47 320.61C355.03 319.88 353.532 319.271 351.99 318.79C349.811 318.085 347.506 317.856 345.23 318.12C343.032 318.439 340.915 319.172 338.99 320.28C334.9 322.57 331.73 326.1 328.65 329.55C328.586 329.62 328.552 329.712 328.554 329.807C328.555 329.902 328.594 329.992 328.66 330.06C328.69 330.097 328.728 330.128 328.772 330.149C328.815 330.169 328.862 330.18 328.91 330.18C328.958 330.18 329.006 330.169 329.049 330.149C329.092 330.128 329.13 330.097 329.16 330.06C329.55 329.64 329.92 329.21 330.31 328.79C333.34 325.43 336.59 322.12 340.76 320.2C342.744 319.25 344.911 318.749 347.11 318.73C349.377 318.788 351.613 319.274 353.7 320.16C354.69 320.56 355.66 321.01 356.62 321.49C357.71 322.04 358.79 322.63 359.85 323.22C361.86 324.33 363.84 325.487 365.79 326.69C369.68 329.09 373.444 331.677 377.08 334.45C378.57 335.58 380.03 336.73 381.47 337.93L381.52 337.03C379.73 335.56 377.907 334.14 376.05 332.77Z"
                  fill="#F2F2F2"
                />
                <path
                  id="Vector_19"
                  d="M199.4 382.7C203.66 377.36 207.957 372.047 212.29 366.76C213.33 365.48 214.38 364.19 215.44 362.92C216.291 361.861 217.22 360.868 218.22 359.95C219.198 359.03 220.351 358.315 221.61 357.85C223.021 357.41 224.528 357.39 225.95 357.79C227.577 358.262 229.179 358.816 230.75 359.45L235.62 361.23L245.41 364.81C245.471 364.839 245.541 364.845 245.606 364.829C245.672 364.813 245.73 364.774 245.77 364.72C245.808 364.672 245.834 364.615 245.846 364.554C245.858 364.494 245.856 364.431 245.839 364.372C245.823 364.313 245.793 364.258 245.751 364.213C245.71 364.167 245.658 364.132 245.6 364.11L243.14 363.2L233.28 359.6C231.64 359 230.01 358.39 228.37 357.8C226.867 357.167 225.26 356.815 223.63 356.76C220.85 356.81 218.53 358.51 216.67 360.43C215.66 361.48 214.74 362.61 213.82 363.74C212.73 365.07 211.63 366.41 210.54 367.75C206.16 373.11 201.81 378.5 197.49 383.92C193.17 389.34 188.877 394.777 184.61 400.23C183.2 402.04 181.797 403.85 180.4 405.66C180.6 405.8 180.8 405.93 181 406.07C182.88 403.63 184.774 401.197 186.68 398.77C190.89 393.39 195.13 388.033 199.4 382.7Z"
                  fill="#F2F2F2"
                />
                <path
                  id="Vector_20"
                  d="M342.046 324.417C338.412 326.285 335.655 329.522 332.129 331.588C340.619 329.076 349.248 327.062 357.972 325.556C355.658 323.971 352.963 323.029 350.164 322.829C347.365 322.629 344.563 323.177 342.046 324.417Z"
                  fill="#F2F2F2"
                />
                <path
                  id="Vector_21"
                  d="M357.972 325.556C358.319 325.798 358.656 326.054 358.98 326.327L358.021 325.548L357.972 325.556Z"
                  fill="#F2F2F2"
                />
                <path
                  id="Vector_22"
                  d="M222.033 361.966C220.637 362.583 219.442 363.581 218.585 364.845C206.623 379.405 194.662 393.964 182.701 408.524C199.287 395.956 213.13 380.13 223.38 362.019L222.033 361.966Z"
                  fill="#F2F2F2"
                />
                <path
                  id="Vector_23"
                  d="M99.8614 396.607C99.8658 396.633 99.8701 396.65 99.8745 396.676C99.905 396.855 99.9355 397.018 99.9703 397.198V397.207C101.456 405.414 103.088 413.484 104.867 421.417L440.886 420.697C442.69 412.602 444.345 404.357 445.853 395.964C445.858 395.945 445.861 395.925 445.862 395.905L99.8614 396.607Z"
                  fill="#E6E6E6"
                />
                <g id="ThirdLHand">
                  <path
                    id="Vector_24"
                    d="M117.001 306.483L140.382 305.781C146.697 319.671 138.967 349.714 138.967 349.714L130.273 411.518C131.65 412.699 132.692 414.222 133.294 415.934C133.895 417.646 134.035 419.485 133.699 421.268C133.364 423.051 132.564 424.714 131.382 426.09C130.199 427.466 128.675 428.506 126.962 429.105C125.25 429.704 123.41 429.842 121.628 429.504C119.845 429.167 118.183 428.365 116.809 427.181C115.435 425.996 114.396 424.471 113.799 422.758C113.202 421.045 113.066 419.205 113.406 417.423L107.582 349.631L117.001 306.483Z"
                    fill="#FFB8B8"
                  />
                  <path
                    id="Vector_25"
                    d="M115.988 311.836L120.891 278.066L133.9 265.562C136.463 263.117 139.658 261.437 143.126 260.712C146.593 259.988 150.194 260.247 153.521 261.462V261.462C158.021 263.139 161.716 266.462 163.859 270.759C166.002 275.056 166.434 280.006 165.067 284.609C160.909 298.566 153.862 315.729 143.904 318.233L143.804 318.259L115.988 311.836Z"
                    fill="#6C63FF"
                  />
                </g>
                <path
                  id="Vector_26"
                  d="M214.855 693.94H227.612L233.68 644.736L214.853 644.737L214.855 693.94Z"
                  fill="#FFB6B6"
                />
                <path
                  id="Vector_27"
                  d="M211.606 689.774V706.304H252.736V705.784C252.735 701.538 251.048 697.466 248.046 694.464C245.044 691.461 240.972 689.774 236.726 689.774L229.206 684.074L228.816 684.234L215.196 689.774H211.606Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_28"
                  d="M127.855 693.94H140.612L146.68 644.736L127.853 644.737L127.855 693.94Z"
                  fill="#FFB6B6"
                />
                <path
                  id="Vector_29"
                  d="M124.606 689.774V706.304H165.736V705.784C165.735 701.538 164.048 697.466 161.046 694.464C158.044 691.461 153.972 689.774 149.726 689.774L142.206 684.074L141.816 684.234L128.196 689.774H124.606Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_30"
                  d="M223.398 391.775L135.391 386.623C135.391 386.623 117.21 421 123.21 446C129.21 471 131.294 520.918 127.752 524.959C124.21 529 123.21 522 127.21 530C131.255 538.09 130.21 528 130.21 535C130.039 539.604 128.672 544.084 126.242 547.998V668.923L157.146 666.936C157.146 666.936 165.494 662.858 158.352 655.929C151.21 649 146.638 654.449 150.924 645.724C155.21 637 157.21 647 155.21 637C153.21 627 178.367 476.875 178.367 476.875C178.367 476.875 188.015 507.902 192.21 536C199.433 584.377 203.28 641.76 206.159 644.759C210.71 649.5 213.71 643.5 210.71 649.5C207.71 655.5 200.994 654.217 205.352 657.858C209.71 661.5 209.71 656.5 209.71 661.5C209.744 664.686 210.197 667.855 211.055 670.923L236.573 669.21L235.21 539L223.398 391.775Z"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_31"
                  d="M198.363 237.396L170.143 234.037L162.917 249.205C162.917 249.205 123.328 270.574 124.769 275.787C126.21 281 137.21 303 134.21 309C131.21 315 123.399 316.996 129.305 322.498C135.21 328 139.21 330 137.21 335C135.21 340 136.21 358 136.21 358C136.21 358 124.598 379.317 128.404 383.659C132.21 388 135.21 383.741 132.21 389.87C129.21 396 106.132 403.02 128.171 403.51C150.21 404 155.21 390 172.21 401C189.21 412 222.848 401.709 222.848 401.709C222.848 401.709 224.801 390 224.006 383C223.21 376 221.349 379.476 222.78 367.738C224.21 356 226.552 328.18 226.552 328.18C226.552 328.18 239.541 270.578 236.21 265C232.879 259.422 203.573 252.039 203.573 252.039L198.363 237.396Z"
                  fill="#6C63FF"
                />
                <g id="ThirdRHand">
                  <path
                    id="Vector_32"
                    d="M217.723 321.923L237.932 310.142C250.112 319.331 257.666 349.419 257.666 349.419L279.538 407.873C281.312 408.253 282.954 409.094 284.3 410.311C285.646 411.527 286.647 413.077 287.204 414.804C287.76 416.531 287.852 418.374 287.469 420.147C287.087 421.92 286.244 423.562 285.026 424.906C283.808 426.25 282.257 427.25 280.53 427.804C278.802 428.359 276.959 428.448 275.186 428.064C273.413 427.679 271.773 426.835 270.43 425.615C269.087 424.395 268.089 422.843 267.537 421.115L230.05 364.331L217.723 321.923Z"
                    fill="#FFB8B8"
                  />
                  <path
                    id="Vector_33"
                    d="M219.39 327.109L207.573 295.096L213.032 277.898C214.116 274.526 216.122 271.524 218.823 269.232C221.523 266.94 224.811 265.449 228.315 264.927C238.18 263.526 239.051 266.986 241.118 276.733C244.129 290.981 245.366 298.412 246.973 319.4L246.896 319.471L219.39 327.109Z"
                    fill="#6C63FF"
                  />
                </g>
                <path
                  id="Vector_34"
                  d="M187.062 228.53C201.77 228.53 213.694 216.607 213.694 201.898C213.694 187.19 201.77 175.267 187.062 175.267C172.354 175.267 160.43 187.19 160.43 201.898C160.43 216.607 172.354 228.53 187.062 228.53Z"
                  fill="#FFB8B8"
                />
                <path
                  id="Vector_35"
                  d="M181.246 227.779C188.724 226.184 189.051 224.075 196.529 222.48C198.911 221.972 201.678 221.137 202.46 218.831C203.017 217.189 202.3 215.375 201.298 213.961C200.175 212.64 199.129 211.257 198.163 209.817C197.531 208.666 197.188 207.378 197.165 206.065C197.142 204.752 197.439 203.453 198.031 202.28C198.622 201.107 199.49 200.096 200.56 199.334C201.63 198.572 202.869 198.082 204.171 197.906C206.478 197.595 208.821 198.286 211.139 198.074C214.318 197.783 219.388 186.205 217.447 183.671C215.556 181.204 212.365 179.66 211.379 176.713C210.734 174.785 211.199 172.672 210.952 170.655C210.587 167.663 204.276 175.687 205.18 172.812C207.397 165.76 174.181 163.462 170.396 172.476C168.982 175.845 165.459 176.264 162.678 178.633C160.855 180.186 156.448 185.207 155.737 187.971C155.131 190.77 155.126 193.667 155.724 196.468C158.025 209.582 162.182 221.279 174.142 227.131"
                  fill="#2F2E41"
                />
                <path
                  id="Vector_36"
                  d="M60.693 702.13C53.4716 702.766 46.1991 701.781 39.4068 699.248C32.6146 696.714 26.4741 692.695 21.4338 687.484C14.8433 680.536 10.3206 671.592 5.94669 662.943C4.67349 660.426 3.35742 657.823 2.0185 655.328C0.525769 652.609 -0.118459 649.505 0.168797 646.416C0.456054 643.327 1.66165 640.394 3.63025 637.997C5.51678 635.6 8.07787 633.822 10.9836 632.894C13.8892 631.966 17.0063 631.929 19.9332 632.788L20.5715 632.972L26.3156 655.386C27.1726 652.043 29.0119 644.51 30.1735 637.13L30.271 636.512L30.8431 636.767C36.8408 639.421 42.4806 642.819 47.6293 646.882C56.7501 654.198 64.1684 663.413 69.3685 673.885C74.5686 684.358 77.4258 695.837 77.7414 707.525L77.7566 708.222L60.693 702.13Z"
                  fill="#F2F2F2"
                />
                <path
                  id="Vector_37"
                  d="M444.941 709.72L1.19067 710.027C0.874885 710.027 0.572052 709.902 0.348755 709.679C0.125458 709.455 0 709.152 0 708.837C0 708.521 0.125458 708.218 0.348755 707.995C0.572052 707.771 0.874885 707.646 1.19067 707.646L444.941 707.339C445.256 707.339 445.559 707.464 445.783 707.687C446.006 707.911 446.131 708.214 446.131 708.529C446.131 708.845 446.006 709.148 445.783 709.371C445.559 709.595 445.256 709.72 444.941 709.72V709.72Z"
                  fill="#CACACA"
                />
              </g>
            </svg>
          </Row>
          <Row className="flex flex-col justify-center h-full space-y-4 px-[40px] max-w-[540px] mssm:max-w-[400px]">
            <p className="text-justify text-md">
              The Covid-19 pandemic has caused huge impact to human normal
              practice. In Malaysia, government has announced Movement Control
              Order (lockdown) to prevent spread of Covid-19. This announcement
              has caused closure of all economic activity. ​
            </p>
            <p className="text-justify text-md">
              To continue business operation, companies have started to move
              from a traditional office-based work operation to Work from Home
              (WFH) with some computer assisted technology. However, most
              companies don’t have well prepared WFH solution to allow all
              employee to work from home.
            </p>
          </Row>
        </section>
        {/* THIRD SECTION - TELEWORKR */}
        <section className="relative w-[100%] py-[40px] px-[15px]">
          <Row className="">
            <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text text-3xl font-bold text-center">
              Teleworkr
            </h1>
            <Row className="flex items-center justify-center">
              <Row className="relative flex flex-col justify-center items-center">
                {/* <img src={Teleworkr.src} className="w-[180px] h-[135px]" /> */}
                <img src={Teleworkr.src} className="w-[150px]" />
                <p className="text-center text-md px-[40px] max-w-[900px] msm:text-justify">
                  UAB has cooperated with TekMonks, a global technology firm to
                  introduce Teleworkr, a secure digital office space for Work
                  from Home solution. ​ Teleworkr is an ideal combination of
                  Remote Worker Software and Cybersecurity Software that allow
                  and ensure organizations remote working is secure.
                </p>
              </Row>
            </Row>
          </Row>
        </section>
        {/* FOURTH SECTION - WHAT DOES TELEWORKR DO? */}
        <section className="py-[40px] space-y-[40px]">
          <Row className="">
            <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text text-center text-3xl font-bold">
              How Does Teleworkr Work?
            </h1>
          </Row>
          <Row className="flex mlg:flex-col mlg:items-center justify-center mlg:space-y-[40px] mlg:w-[150px]] 1150:space-x-4 1150:w-full max-w-[1150px] 1150:pb-[10px]">
            {featuresPartOne.map((item) => (
              <div class="main-card py-4">
                <div class="layer"></div>
                <div class="card">
                  <div class="round">
                    <p class="p">{item.id}</p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-3 text-center font-bold">
                      {item.title}
                    </h5>
                    <p class="card-text text-center">{item.detail}</p>
                  </div>
                  <Row className="absolute w-[50px] bottom-[22px] left-[93px] fill-green-400">
                    {item.image}
                  </Row>
                  {/* <img
                    src={item.image.src}
                    className="object-fill max-h-[200px] w-[70px] absolute bottom-[30px] right-[80px]"
                  /> */}
                </div>
              </div>
            ))}
          </Row>
          <Row className="flex mlg:flex-col mlg:items-center mlg:space-y-[40px] justify-center 1150:space-x-4 1150:w-full max-w-[1150px]">
            {featuresPartTwo.map((item) => (
              <div class="main-card py-4">
                <div class="layer"></div>
                <div class="card">
                  <div class="round">
                    <p class="p">{item.id}</p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-3 text-center font-bold">
                      {item.title}
                    </h5>
                    <p class="card-text">{item.detail}</p>
                  </div>
                  {/* <img
                    src={item.image.src}
                    className="object-fill max-h-[200px] w-[70px] absolute bottom-[30px] right-[80px]"
                  /> */}
                  <Row className="absolute w-[50px] bottom-[22px] left-[93px] fill-green-400">
                    {item.image}
                  </Row>
                </div>
              </div>
            ))}
            {/* {featuresPartTwo.map((item) => (
              <article className="flex flex-col justify-center items-center rounded-lg border-2 border-sky-600 bg-white max-w-[280px] mlg:max-w-[375px] py-[10px] mt-5 mb-5">
                <Row className="bg-slate-200 w-[80px] h-[80px] rounded-t-lg flex justify-center items-center">
                  <img
                    src={item.image.src}
                    className="object-fill max-h-[200px] rounded-t-lg mlg:max-h-[344px] w-[50px]"
                  />
                </Row>
                <Row className="p-6">
                  <h1 className="text-center">{item.title}</h1>
                  <h3 className="text-center">{item.detail}</h3>
                </Row>
              </article>
            ))} */}
          </Row>
        </section>
        {/* FIFTH SECTION - SUCCESS STORY TAKAFUL */}
        <section className="space-y-[10px] pt-[40px]">
          <Col>
            <h1 className="bg-gradient-to-b from-[#0D73D5] to-[#073590] text-transparent bg-clip-text text-3xl font-bold text-center">
              Success Story
            </h1>
          </Col>
          <Row className="flex justify-center">
            <Row className="text-justify text-md space-y-2 max-w-[650px] px-[40px]">
              <p>
                <span className="font-bold">
                  Syarikat Takaful Malaysia Keluarga Berhad
                </span>{" "}
                has been one of the leading Takaful Insurance operator in
                Malaysia for 30 years.
              </p>
              <p>
                During Movement Control Order (lockdown), Takaful Malaysia has
                decided to apply Work from Home (WFH) solution to allow employee
                to work from home. To apply WFH solution in Takaful Malaysia,
                Patrick Wong, the Chief Information Officer of Takaful Malaysia
                has faced two primary concerns which are security and accessing
                the core system running on AS400 platform.
              </p>
              <p>
                After doing research and analysis, Patrick Wong has decided to
                choose Teleworkr as Takaful Malaysia WFH solution. Because of
                Teleworkr is able to resolve their concerns and compliance with
                BNM Central Bank's guidelines. Now days, there are over 500
                Takaful Malaysia employees are using Teleworkr. Patrick Wong
                mentioned that he can see a future of working from home after
                Covid-19.
              </p>
              <p>
                Patrick Wong further stated, “During the lockdown, UAB and
                TekMonks assisted us in implementing a customized work from home
                solution which other companies weren’t able to provide. Now, we
                are ready and fully compliant in allowing employees to work from
                anywhere.”
              </p>
              <p>Reference: </p>
              <a
                target="_blank"
                className="cursor-pointer text-blue-600"
                href="https://www.einnews.com/pr_news/534504567/takaful-malaysia-s-successful-response-to-the-pandemic"
              >
                Takaful Malaysia's Successful Response to the Pandemic
              </a>
            </Row>
            <Row>
              <img
                src={TakafulLogo.src}
                className=" w-[400px]  object-cover mlg:hidden"
              />
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

export default WFH;
