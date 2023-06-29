import {
  TbBrandFirebase,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandVercel,
} from "react-icons/tb";

import React from "react";

const Home = () => {
  return (
    <>
      <div className="absolute left-12 top-10 font-bold text-2xl text-[#e3e3e3] cursor-pointer">
        Tejas Sethi
      </div>
      <div className="flex flex-col h-[98%] justify-center place-items-center">
        <div className="flex place-items-center justify-between space-x-16">
          <div className="flex-col w-96 space-y-8">
            <div className="text-[#e3e3e3] font-bold text-5xl flex">
              <div className="-ml-10 mr-2">{`<`}</div>
              <div>{" Full-Stack Web Developer ✌🏼/>"}</div>
            </div>
            <div className="text-[#E5E5E5]">
              {`Hi, I'm Tejas Sethi. A passionate Full-stack web Developer based
              in Bangkok, Thailand 📍`}
            </div>
            <div className="flex items-center place-items-start space-x-4">
              <div className="text-[#E5E5E5] font-bold">Tech Stack</div>
              <div className="text-[#E5E5E5] font-bold w-0.5 h-6 bg-white"></div>

              <div className="text-[#E5E5E5] flex text-[30px] space-x-2">
                <TbBrandReact className="text-[#61DAFB]" />
                <TbBrandNextjs className="text-white" />
                <TbBrandVercel className="text-white" />
                <TbBrandMongodb className="text-[#148E4C]" />
                <TbBrandFirebase className="text-[#FFCB2B]" />
                <TbBrandTailwind className="text-[#07B2D0]" />
              </div>
            </div>
          </div>
          <div>
            <img
              src="./image.png"
              alt="an emoji of myself on a laptop"
              className="h-[330px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
