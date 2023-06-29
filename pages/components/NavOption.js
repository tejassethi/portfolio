import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";

const NavOption = ({ active, name }) => {
  return (
    <>
      {active == true ? (
        <div className="bg-[#1F1F1F] h-full flex place-items-center border-r-2 border-r-[#2A2A2A] border-t-[1.5px] border-t-[#0078D4] border-b-2 border-b-[#1F1F1F] w-[140px]">
          <div className="flex justify-between w-full text-center place-items-center text-sm text-[#F5F5F5] px-2">
            <div className="flex justify-start place-items-center">
              <IoLogoJavascript size={12} color="#CBCC41" className="mr-1" />
              <div>{name}.js</div>
            </div>
            <div className="hover:bg-[#313232] cursor-pointer">
              <IoMdClose size={20} />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#181818] group h-full flex place-items-center cursor-pointer hover:bg-[#1F1F1F] border-t-[1.5px] border-t-[#1F1F1F] border-b-2 border-b-[#2A2A2A] border-r-2 border-r-[#2A2A2A] w-[140px]">
          <div className="flex justify-between w-full text-center place-items-center text-sm text-[#8C8C8C] px-2">
            <div className="flex justify-start place-items-center pr-4">
              <IoLogoJavascript size={12} color="#CBCC41" className="mr-1" />
              <div>{name}.js</div>
            </div>
            <div className="group-hover:bg-[#313232] cursor-pointer">
              <IoMdClose size={20} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NavOption;
