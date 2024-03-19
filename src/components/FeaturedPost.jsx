import React from "react";
import resim from "../images/featuredpost.png";
import resim1 from "../images/featuredpo1.png";
import { AiTwotoneStar, AiOutlineHeart, AiFillEye } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";
import { MdAreaChart } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const FeaturedPost = () => {
  return (
    <>
      <div className="flex px-48 justify-center items-center">
        <div className="flex py-20 flex-col items-center gap-24 flex-shrink-0">
          <div className="flex flex-col items-center gap-3">
            <h6 className="text-sm font-bold text-blue-400">Practice Advice</h6>
            <h3 className="font-bold text-4xl">Featured Posts</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex ">
              <div class="relative">
                <img src={resim} alt="resim" />

                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 flex space-x-6">
                  <div class="text-black bg-white rounded-full p-3">
                    <AiOutlineHeart />
                  </div>
                  <div class="text-black bg-white rounded-full p-3">
                    <PiShoppingCartSimpleLight />
                  </div>
                  <div class="text-black bg-white rounded-full p-3">
                    <AiFillEye />
                  </div>
                </div>
                <div class="absolute top-0 left-0 bg-red-500 rounded text-white  ml-5 mt-5 px-3">
                  <p className="text-sm">Sale</p>
                </div>
              </div>

              <div className="flex px-6 py-6 flex-col items-start gap-3 self-stretch">
                <div className="flex justify-between items-center self-stretch w-56">
                  <h5 className="font-bold text-sm text-blue-400">
                    English Department
                  </h5>
                  <div className="flex items-center border gap-1 p-1 rounded-xl bg-black">
                    <AiTwotoneStar className="text-yellow-200" />
                    <p className="text-white">4.9</p>
                  </div>
                </div>

                <h5 className="font-bold">Graphic Design</h5>
                <p className="w-52">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystoke away
                </p>
                <div className="flex items-center gap-3 ">
                  <AiOutlineDownload />
                  <p>15 Sales</p>
                </div>
                <div className="flex gap-4">
                  <p>$16.48</p>
                  <p className="text-green-700">$6.48</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                  <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <GiAlarmClock className="text-blue-400" />
                    <p>22 h...</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdAreaChart className="text-orange-400" />
                    <p>64 Lessons</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartArea className="text-green-700" />
                    <p>Progress</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 border px-6 py-4 rounded-full border-cyan-400 ">
                    <h2 className="text-cyan-400">Learn More</h2>
                    <MdArrowForwardIos className="text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex ">
              <div class="relative">
                <img src={resim1} alt="resim" />

                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 flex space-x-6">
                  <div class="text-black bg-white rounded-full p-3">
                    <AiOutlineHeart />
                  </div>
                  <div class="text-black bg-white rounded-full p-3">
                    <PiShoppingCartSimpleLight />
                  </div>
                  <div class="text-black bg-white rounded-full p-3">
                    <AiFillEye />
                  </div>
                </div>
                <div class="rounded absolute top-0 left-0 bg-red-500 text-white  ml-5 mt-5 px-3">
                  <p className="text-sm">Sale</p>
                </div>
              </div>

              <div className="flex px-6 py-6 flex-col items-start gap-3 self-stretch">
                <div className="flex justify-between items-center self-stretch w-56">
                  <h5 className="font-bold text-sm text-blue-400">
                    English Department
                  </h5>
                  <div className="flex items-center border gap-1 p-1 rounded-xl bg-black">
                    <AiTwotoneStar className="text-yellow-200" />
                    <p className="text-white">4.9</p>
                  </div>
                </div>

                <h5 className="font-bold">Graphic Design</h5>
                <p className="w-52">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystoke away
                </p>
                <div className="flex items-center gap-3 ">
                  <AiOutlineDownload />
                  <p>15 Sales</p>
                </div>
                <div className="flex gap-4">
                  <p>$16.48</p>
                  <p>$6.48</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-sky-400"></div>
                  <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                  <div className="w-4 h-4 rounded-full bg-black"></div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <GiAlarmClock className="text-blue-400" />
                    <p>22 h...</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdAreaChart className="text-orange-400" />
                    <p>64 Lessons</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaChartArea className="text-green-700" />
                    <p>Progress</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 border px-6 py-4 rounded-full border-cyan-400 ">
                    <h2 className="text-cyan-400">Learn More</h2>
                    <MdArrowForwardIos className="text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPost;