/* eslint-disable */
import React, { useRef, useState, useEffect } from "react";
import Progress from "./atoms/Progress";

import Data from "../../public/assets/data.json";

function Skills() {
  const skillsRef = useRef<any>();
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState<any>(false);
  const handleToggle = async (val: number) => {
    setActive(val);
    setIsVisible(false);
    await new Promise((resolve) => setTimeout(resolve, 100));
    setIsVisible(true);
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry?.isIntersecting);
    });
    observer.observe(skillsRef?.current);
  }, []);
  return (
    <div id="skills" className="mb-32 bg-white">
      <h1 className="py-16 text-center text-5xl font-light">Skills</h1>
      <div
        ref={skillsRef}
        className="flex w-full flex-wrap items-center justify-center px-2 md:px-32"
      >
        <button
          className={`text-nowrap w-2/5 break-keep border-[#0000001a] p-2 text-xl font-light text-[#495057] duration-100 ease-in ${
            active === 0
              ? "rounded-t-md border-x-[2px] border-t-[2px] border-solid"
              : "border-b-[2px] border-solid"
          }`}
          onClick={handleToggle.bind(null, 0)}
        >
          Technical Skills
        </button>
        <button
          className={`w-2/5 border-[#0000001a] p-2 text-xl font-light text-[#495057] duration-100 ease-in ${
            active === 1
              ? "rounded-t-md border-x-[2px] border-t-[2px] border-solid"
              : "border-b-[2px] border-solid"
          }`}
          onClick={handleToggle.bind(null, 1)}
        >
          Soft Skills
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        {active === 0 ? (
          <div className="mt-5 grid w-[75%] grid-cols-1 content-center justify-items-center gap-2 md:grid-cols-2">
            {Data[0]?.map((value, idx) => {
              return (
                <Progress
                  key={idx}
                  title={value.title}
                  value={value.value}
                  isVisible={isVisible}
                />
              );
            })}
          </div>
        ) : (
          <div className="mt-5 grid w-[75%] grid-cols-1 content-center justify-items-center gap-2 md:grid-cols-2">
            {Data[1]?.map((value, idx) => {
              return (
                <Progress
                  key={idx}
                  title={value.title}
                  value={value.value}
                  isVisible={isVisible}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
