import React from "react";
import Topbar from "../Layout/Topbar";
import Header from "../Layout/Header";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import laptop from "../Assets/image/laptop.png";
import Features from "./Features";
import OurMission from "./OurMission";
import Mobile from "./Mobile";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <>
      {/* <Topbar /> */}
      <Header />
      <div className="relative pt-44 pb-20 md:pb-12">
        <div className="container px-4 pt-9 mx-auto">
          <div className="relative z-10 flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <h1 className="mb-6 text-2xl md:text-3xl lg:text-5xl leading-tight text-gray-900 font-bold tracking-tight">
                Actionable IGrain Insights.
              </h1>
              <p className="mb-8 text-lg md:text-xl text-gray-500 font-medium">
                We are team of researchers who have spent our lives in the
                IGrain industry. IGrain is the culmination of all our experience
                and knowledge of the pulse of the agricultural landscape.
              </p>
              <div className="flex flex-wrap mb-8 md:mb-28">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-[#4C893B] hover:bg-green-600 focus:ring-2 focus:ring-[#4C893B] focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                  >
                    Demo
                  </a>
                </div>
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-gray-800 font-medium text-center bg-white hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <div className=" ">
                <img classNameName="p-1  z-10 h-40 " src={laptop} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <OurMission />
      <Mobile />
      <Footer />
    </>
  );
};

export default Home;
