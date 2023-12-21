import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar({ navColor }: { navColor: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav
        className={`fixed top-0 z-10 ${navColor} ${
          isMenuOpen ? "navbar-white" : "navbar-transparent"
        } flex w-full items-center gap-6 p-4 text-xl font-light text-[#0000008c]`}
      >
        <Link
          href="#home"
          scroll={false}
          className="whitespace-nowrap text-[#000000e6]"
        >
          {`<Sid />`}
        </Link>
        <div className="hidden w-full items-center justify-start gap-4 md:flex">
          <Link href="#projects" scroll={false}>
            Projects
          </Link>
          <Link href={"./assets/SIDDHANT RAI.pdf"}>Resume</Link>
          <Link href="#about" scroll={false}>
            About
          </Link>
          <Link href="#skills" scroll={false}>
            Skills
          </Link>
        </div>
        <div className="flex w-full items-center justify-end md:hidden">
          <button onClick={handleClick}>
            <Image alt="menu" src={"menu.svg"} height={24} width={24}></Image>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className={`${navColor} ${
            isMenuOpen ? "navbar-white" : "navbar-transparent"
          } fixed top-[60px] z-10 flex w-full flex-col items-start gap-3 px-4 pb-2 text-xl font-light text-[#0000008c]`}
        >
          <Link href="#projects" scroll={false}>
            Projects
          </Link>
          <Link href={"./assets/SIDDHANT RAI.pdf"}>Resume</Link>
          <Link href="#about" scroll={false}>
            About
          </Link>
          <Link href="#skills" scroll={false}>
            Skills
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
