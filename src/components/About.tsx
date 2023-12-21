/* eslint-disable */
import React from "react";
import Link from "next/link";

function About() {
  return (
    <>
      <div id="about" className="w-full bg-[#e9ecef]">
        <div className="flex items-center justify-evenly gap-4 py-20">
          <div className="relative hidden w-[300px] items-center overflow-hidden md:flex">
            <div className="w-full">
              <div id="stars"></div>
            </div>
            <img
              alt="profile"
              src={"profile.jpg"}
              className="h-72 rounded-[50%] object-fill"
            ></img>
          </div>
          <div className="flex w-3/4 flex-col items-center justify-center md:w-1/2">
            <h1 className="text-center text-5xl font-light">About Me</h1>
            <p className="mt-4 text-center text-xl font-light text-[#212529]">
              Hello! My name is Siddhant and I enjoy creating things that live
              on the internet. My interest in coding started back in my 8th year
              of high-school when I decided to solve a problem by batch
              scripting and automating certain tasks — since then I've never
              looked back. Fast-forward to today, I'm currently pursuing my
              B.Tech in Electronics and Communication Engineering from IIITDMJ.
              My main focus these days is creating fully responsive web and
              mobile apps using React, Node.js and different CSS frameworks.
            </p>
            <Link href={"./assets/SIDDHANT RAI.pdf"}>
              <button className="mt-10 rounded-lg border border-solid border-[#212529] px-3 py-2 text-lg font-light">
                Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
