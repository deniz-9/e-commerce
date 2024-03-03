import React from "react";
import resim1 from "../images/ilk1.png";
import resim7 from "../images/bu1.png";
import resim8 from "../images/bu2.png";
import resim9 from "../images/bu3.png";
import Logo from "./Logo";
import Footer from "../layouts/Footer";
import Bestseller from "./Bestseller";
import Featured from "./Featured";

const Homepage = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-400 via-green-300 to-blue-400 ">
        <div className="flex flex-col justify-center items-start gap-8 flex-shrink-0 w-96">
          <div className="text-sky-600">SUMMER 2024</div>
          <div>NEW COLLECTION</div>
          <div>
            We know how large objects will act, but things on a small scale.
          </div>
          <div className="flex py-4 px-10 gap-3 flex-col items-center rounded bg-sky-400">
            <div className="text-white">SHOP NOW</div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img src={resim1} alt="resim" />
        </div>
      </div>

      <Logo />
      <div className="flex items-center self-stretch pr-40 pl-20">
        <div className="flex py-20 items-start gap-4">
          <div>
            <img src={resim7} alt="resim" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={resim8} alt="resim" />
            <img src={resim9} alt="resim" />
          </div>
        </div>
      </div>
      <Bestseller />
      <Featured />
      <Footer />
    </>
  );
};

export default Homepage;
