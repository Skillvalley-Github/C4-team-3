import React from "react";
import img1 from "../assets/images/full.jpg";
import "./Home.css";
import img2 from "../assets/images/bg.jpg";

export const Home = () => {
  return (
    <div className="w-[100%] ">
      <div className="h-screen hero w-[100%] ">
        <nav className="h-1/6 p-4">
          <div className="flex justify-between">
            <div className="logo"></div>
            <div className="flex gap-4">
              <a href="">
                <div className="text-white p-2">Home</div>
              </a>
              <a href="">
                <div className="text-white p-2">Home</div>
              </a>
              <a href="/auth">
              <button className="bg-[#047857] rounded-lg px-2 py-2 text-white">
                Login
              </button>
              </a>
            </div>
          </div>
        </nav>
        <div className="flex flex-col items-center text-center justify-center">
          <h1 className="text-7xl text-[#fff] font-bold p-8 ">
            Empowering people who help people
          </h1>
          <button className="bg-[#047857] rounded-lg px-2 py-2 text-white">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-[#fffbeb] h-[600px] px-28 pt-8 ">
        <div className="text-center flex flex-col justify-center ">
          <p className="text-black font-bold text-6xl">
            Monitor your entire{" "}
            <span className="text-[#047857]"> buisness</span> for security
            vulnerabilities
          </p>
          <p className="px-40 py-8 text-[#737373]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, odio
            iure! Eum hic obcaecati repellendus repudiandae nulla eos veniam
            quia
          </p>
        </div>

        <div className="flex justify-center align-center h-[200px] bg-[#fef3c7] rounded-[4rem] p-8 mt-8">
          <div className="p-4 ">
            <p className="text-2xl font-bold pb-2">Scale with recipes</p>
            <p className="text-[#737373] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quam neque itaque incidunt nul
            </p>
          </div>
          <div className="p-4 ">
            <p className="text-2xl font-bold pb-2">Scale with recipes</p>
            <p className="text-[#737373] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quam neque itaque incidunt nul
            </p>
          </div>
          <div className="p-4 ">
            <p className="text-2xl font-bold pb-2">Scale with recipes</p>
            <p className="text-[#737373] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quam neque itaque incidunt nul
            </p>
          </div>
        </div>
      </div>

      <div className="h-[450px] flex ">
        <div className=" w-[50%]  flex ">
          <img className="w-full h-full " src={img2} alt="about-img"></img>
        </div>
        <div className=" w-[50%] p-4 bg-gray-200">
          <div className="flex flex-col p-8 ">
            <p className="text-[#047857] text-5xl font-bold">
              lorem ipsum lorem ipsum
            </p>
            <p className="py-8 w-[70%] text-[#737373]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              laboriosam ducimus sit aspernatur temporibus nemo non aut sunt
              dignissimos, dicta explicabo error nam recusandae, Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Molestias suscipit
              in, quisquam veniam nobis ut aliquid illo a sequi corporis, quis
              aspernatur obcaecati dolores blanditiis sint ipsum, cumque error
              amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
