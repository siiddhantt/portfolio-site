import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import Navbar from "~/components/Navbar";
import About from "~/components/About";
import Projects from "~/components/Projects";
import Leadership from "~/components/Leadership";
import Skills from "~/components/Skills";
import Footer from "~/components/Footer";

export default function Home() {
  const [navColor, setNavColor] = useState("navbar-transparent");
  const listenScrollEvent = () => {
    window.scrollY > 50
      ? setNavColor("navbar-white")
      : setNavColor("navbar-transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      <Navbar navColor={navColor} />
      <Head>
        <title>Siddhant Rai</title>
        <meta name="description" content="Siddhant Rai - Portfolio Website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div
        id={"home"}
        className="landing-page relative flex h-screen flex-col items-center justify-center"
      >
        <div className="w-full">
          <div id="stars"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-6 text-center text-6xl font-light text-[#f8f9fa] sm:text-8xl">
            Siddhant Rai
          </h1>
          <TypeAnimation
            sequence={["Building digital wonders one keystroke at a time"]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1.2em",
              display: "inline-block",
              fontWeight: 300,
              color: "#f8f9fa",
              paddingRight: "0.5em",
              paddingLeft: "0.5em",
              textAlign: "center",
              marginBottom: "1.8em",
            }}
          />
          <div className="flex items-center justify-center gap-4 p-12">
            <Link
              href={"https://github.com/siiddhantt"}
              className="hover:scale-110s transform text-[#f8f9fa] transition duration-500 ease-in-out hover:-translate-y-1 hover:text-black"
            >
              <FaGithub size={42} />
            </Link>
            <Link
              href={"https://www.instagram.com/_siiddhant_"}
              className="hover:scale-110s transform text-[#f8f9fa] transition duration-500 ease-in-out hover:-translate-y-1 hover:text-black"
            >
              <FaInstagram size={42} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/siddhant-rai21"}
              className="hover:scale-110s transform text-[#f8f9fa] transition duration-500 ease-in-out hover:-translate-y-1 hover:text-black"
            >
              <FaLinkedin size={42} />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href={"#about"}
              className="rounded-lg p-2 text-[#f8f9fa] outline outline-1 outline-[#f8f9fa] hover:bg-[#f8f9fa] hover:text-black sm:px-5 sm:py-3 sm:text-lg"
            >
              More about me
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Leadership />
      <Skills />
      <Footer />
    </>
  );
}
