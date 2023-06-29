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

const About = () => {
  return (
    <>
      <div className="absolute left-12 top-10 font-bold text-2xl text-[#e3e3e3] cursor-pointer">
        Tejas Sethi
      </div>
      <div className="flex flex-row h-[98%] justify-center place-items-center space-x-10">
        <div className="max-w-[600px] flex flex-col space-y-5">
          <img
            src="./laptop.jpg"
            alt=""
            className=" rounded-xl max-h-[350px]"
          />
        </div>
        <div className="max-w-[600px] flex flex-col">
          <h2 className="text-xl font-bold text-[#A4A4A4] pb-3">About Me</h2>
          <h2 className="text-3xl font-bold text-[#e3e3e3] pb-5">
            Your dedicated Full-Stack Web Developer based in Bangkok, Thailand
            📍
          </h2>
          <p className="text-white">
            {`As a versatile Full Stack Web Developer, I specialize in a diverse
            skill set, encompassing frontend technologies like HTML, CSS,
            JavaScript, React, Next.js, and Tailwind CSS. My backend prowess
            includes RESTful APIs, Sanity.io, MySQL, MongoDB, and Firebase. My
            adaptability extends to Python-based Object Oriented Programming and
            a touch of Mobile Development with React Native. Whether it's macOS
            or Windows, I navigate with ease. My love for coding is matched only
            by my passion for solving complex problems and delivering efficient,
            user-centered solutions. Let's build the digital future together.`}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
