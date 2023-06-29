import React, { useState } from "react";
import { RxViewVertical } from "react-icons/rx";
import { BsThreeDots, BsChevronDown, BsChevronRight } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
} from "react-icons/vsc";
import NavOption from "./components/NavOption";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";

const Index = () => {
  const [page, setPage] = useState("home");
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className="flex-row h-screen w-screen">
      <div className="flex h-[98%]">
        <div className="bg-[#181818] select-none border-r-2 border-[#2A2A2A] min-w-[60px]">
          <div className="w-full h-full justify-between flex flex-col">
            <div>
              <div
                onClick={() => {
                  setShowSideBar(!showSideBar);
                }}
                className="bg-[#181818] h-[60px] border-l-2 cursor-pointer border-l-[#0078D4] w-full flex justify-center place-items-center"
              >
                <VscFiles size={28} className=" text-[#D7D7D7]" />
              </div>
              <div className="group">
                <div className="bg-[#181818] h-[60px] border-l-2 cursor-pointer border-l-[#1F1F1F] w-full flex justify-center place-items-center">
                  <VscSearch
                    size={28}
                    className="text-[#8C8C8C] group-hover:text-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className="group">
                <div className="bg-[#181818] h-[60px] border-l-2 cursor-pointer border-l-[#1F1F1F] w-full flex justify-center place-items-center">
                  <VscDebugAlt
                    size={28}
                    className="text-[#8C8C8C] group-hover:text-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className="group">
                <div className="bg-[#181818] h-[60px] border-l-2 cursor-pointer border-l-[#1F1F1F] w-full flex justify-center place-items-center">
                  <VscSourceControl
                    size={28}
                    className="text-[#8C8C8C] group-hover:text-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className="group">
                <div className="bg-[#181818] h-[60px] border-l-2 cursor-pointer border-l-[#1F1F1F] w-full flex justify-center place-items-center">
                  <VscExtensions
                    size={28}
                    className="text-[#8C8C8C] group-hover:text-[#D7D7D7]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="group">
                <div
                  onClick={() => setPage("about")}
                  className="bg-[#181818] h-[50px] border-l-2 cursor-pointer border-l-[#1F1F1F] w-full flex justify-center place-items-center"
                >
                  <HiOutlineUserCircle
                    size={33}
                    className="text-[#8C8C8C] group-hover:text-[#D7D7D7]"
                  />
                </div>
              </div>
              <div className="group">
                <div className="bg-[#181818] h-[50px] border-l-2 cursor-pointer border-l-[#1F1F1F] w-full flex justify-center place-items-center">
                  <FiSettings
                    size={28}
                    className="text-[#8C8C8C] group-hover:text-[#D7D7D7]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`bg-[#181818] ${
            showSideBar ? "" : "hidden"
          } select-none border-r-2 border-[#2A2A2A] bottom-0 min-w-[300px]`}
        >
          <div className="h-[38px] flex place-items-center m-3 mt-1 text-[#CCCCCC] justify-between">
            <div>EXPLORER</div>
            <BsThreeDots className="cursor-pointer" />
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 font-bold text-sm text-[#CCCCCC]">
            <BsChevronDown className="ml-2 mr-1 text-[#CBCBCB]" />
            <div>PORTFOLIO</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-5 text-sm text-[#8C8C8C]">
            <BsChevronRight className="ml-2 mr-1 text-[#CBCBCB]" />
            <img src="./icon/folder-next.svg" alt="" width={15} />
            <div className="ml-1">.next</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-5 text-sm text-[#8C8C8C]">
            <BsChevronRight className="ml-2 mr-1 text-[#CBCBCB]" />
            <img src="./icon/folder-node.svg" alt="" width={15} />
            <div className="ml-1">node_modules</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-5 text-sm text-[#8C8C8C]">
            <BsChevronDown className="ml-2 mr-1 text-[#CBCBCB]" />
            <img src="./icon/folder-home-open.svg" alt="" width={15} />
            <div className="ml-1">pages</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-10 text-sm text-[#8C8C8C]">
            <BsChevronRight className="ml-2 mr-1 text-[#CBCBCB]" />
            <img src="./icon/folder-api.svg" alt="" width={15} />
            <div className="ml-1">api</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-10 text-sm text-[#8C8C8C]">
            <BsChevronRight className="ml-2 mr-1 text-[#CBCBCB]" />
            <img src="./icon/folder-components.svg" alt="" width={15} />
            <div className="ml-1">components</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-[4.15rem] text-sm text-[#8C8C8C]">
            <img src="./icon/javascript.svg" alt="" width={15} />
            <div className="ml-1">_app.js</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-[4.15rem] text-sm text-[#8C8C8C]">
            <img src="./icon/javascript.svg" alt="" width={15} />
            <div className="ml-1">_document.js</div>
          </div>
          <div
            onClick={() => setPage("home")}
            className={`flex hover:bg-[#2B2D2E] ${
              page == "home" ? "bg-[#2B2D2E]" : ""
            } cursor-pointer place-items-center h-6 pl-[4.15rem] text-sm text-[#CCCCCC]`}
          >
            <img src="./icon/javascript.svg" alt="" width={15} />
            <div className="ml-1">home.js</div>
          </div>
          <div
            onClick={() => setPage("about")}
            className={`flex hover:bg-[#2B2D2E] ${
              page == "about" ? "bg-[#2B2D2E]" : ""
            } cursor-pointer place-items-center h-6 pl-[4.15rem] text-sm text-[#CCCCCC]`}
          >
            <img src="./icon/javascript.svg" alt="" width={15} />
            <div className="ml-1">about.js</div>
          </div>
          <div
            onClick={() => setPage("projects")}
            className={`flex hover:bg-[#2B2D2E] ${
              page == "projects" ? "bg-[#2B2D2E]" : ""
            } cursor-pointer place-items-center h-6 pl-[4.15rem] text-sm text-[#CCCCCC]`}
          >
            <img src="./icon/javascript.svg" alt="" width={15} />
            <div className="ml-1">projects.js</div>
          </div>
          <div
            onClick={() => setPage("contact")}
            className={`flex hover:bg-[#2B2D2E] ${
              page == "contact" ? "bg-[#2B2D2E]" : ""
            } cursor-pointer place-items-center h-6 pl-[4.15rem] text-sm text-[#CCCCCC]`}
          >
            <img src="./icon/javascript.svg" alt="" width={15} />
            <div className="ml-1">contact.js</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-5 text-sm text-[#8C8C8C]">
            <BsChevronRight className="ml-2 mr-1 text-[#CBCBCB]" />
            <img src="./icon/folder-public.svg" alt="" width={15} />
            <div className="ml-1">public</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-5 text-sm text-[#8C8C8C]">
            <BsChevronDown className="ml-2 mr-1 text-[#CBCBCB]" />
            <img src="./icon/folder-css-open.svg" alt="" width={15} />
            <div className="ml-1">styles</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-[4.15rem] text-sm text-[#8C8C8C]">
            <img src="./icon/css.svg" alt="" width={15} />
            <div className="ml-1">globals.css</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-[2.95rem] text-sm text-[#8C8C8C]">
            <img src="./icon/eslint.svg" alt="" width={15} />
            <div className="ml-1">.eslintrc.json</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-[2.95rem] text-sm text-[#8C8C8C]">
            <img src="./icon/git.svg" alt="" width={15} />
            <div className="ml-1">.gitignore</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-[2.95rem] text-sm text-[#8C8C8C]">
            <img src="./icon/jsconfig.svg" alt="" width={15} />
            <div className="ml-1">next.config.js</div>
          </div>
          <div className="flex hover:bg-[#0c1418] cursor-pointer  place-items-center h-6 pl-[2.95rem] text-sm text-[#8C8C8C]">
            <img src="./icon/file_type_postcss.svg" alt="" width={15} />
            <div className="ml-1">postcss.config.js</div>
          </div>
          <div className="flex hover:bg-[#2B2D2E] cursor-pointer  place-items-center h-6 pl-[2.95rem] text-sm text-[#8C8C8C]">
            <img src="./icon/file_type_tailwind.svg" alt="" width={15} />
            <div className="ml-1">tailwind.config.css</div>
          </div>
        </div>

        <div className="bg-[#1F1F1F] w-full select-none">
          <div className="w-full h-10 bg-[#181818] flex space-x-0">
            <div onClick={() => setPage("home")}>
              <NavOption active={page == "home"} name="home" />
            </div>
            <div onClick={() => setPage("about")}>
              <NavOption active={page == "about"} name="about" />
            </div>
            <div onClick={() => setPage("projects")}>
              <NavOption active={page == "projects"} name="projects" />
            </div>
            <div onClick={() => setPage("contact")}>
              <NavOption active={page == "contact"} name="contact" />
            </div>
            <div className="bg-[#181818] h-full flex place-items-center border-b-2 border-b-[#2A2A2A] w-full text-white justify-end space-x-4 pr-4">
              <RxViewVertical className="cursor-pointer" />
              <BsThreeDots className="cursor-pointer" />
            </div>
          </div>
          <div className="w-full h-full relative">
            {page == "home" ? <Home /> : <></>}
            {page == "about" ? <About /> : <></>}
            {page == "projects" ? <Projects /> : <></>}
            {page == "contact" ? <Contact /> : <></>}
          </div>
        </div>
      </div>
      <div className="w-screen h-[2%] bg-[#181818] flex justify-between place-content-center  text-[#CCCCCC] text-sm px-3">
        <div className="flex space-x-2 place-items-center justify-center h-full">
          <div className="flex place-items-center justify-center space-x-1">
            {" "}
            <AiOutlineCloseCircle /> <span>0</span>
          </div>
          <div className="flex place-items-center justify-center space-x-1">
            {" "}
            <BiError /> <span>0</span>
          </div>
        </div>
        <div className="flex space-x-3 place-items-center justify-center">
          <div>Ln 240, Col 29</div>
          <div>Spaces: 2</div>
          <div>UTF-8</div>
          <div>LF</div>
          <div>{"{} Javascript"}</div>
          <div>Go Live</div>
          <div>tejassethi1472@gmail.com</div>
          <div>&#169; tejassethi.com</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
