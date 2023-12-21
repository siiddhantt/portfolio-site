/* eslint-disable */
import React from "react";
import { Carousel } from "@material-tailwind/react";

function Leadership() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-5xl font-light">Leadership</h1>
        <div className="flex flex-col items-center justify-center gap-10 py-10 md:flex-row">
          <p className="w-4/5 text-center font-light md:w-2/5">
            As a React developer with leadership experience, I bring technical
            expertise, project management skills, and strong communication
            abilities to the table. I have a proven track record of building
            large-scale applications, optimizing code for performance, and
            implementing best practices. Additionally, I have experience leading
            teams and projects, creating and maintaining project plans, managing
            timelines and budgets, and ensuring timely delivery of high-quality
            work. I excel at communicating effectively with team members,
            stakeholders, and clients, both verbally and in writing, and am a
            skilled listener who can provide clear and constructive feedback. I
            am also passionate about mentoring and training other developers to
            help them develop their skills and achieve their goals. With my
            ability to solve complex technical problems and think creatively, I
            am always up-to-date with the latest developments in React and
            related technologies, and am able to innovate and inspire a
            positive, collaborative work environment.
          </p>
          <div className="h-80 w-[90%] md:w-2/5">
            <Carousel
              loop={true}
              className="rounded-xl"
              autoplay={true}
              placeholder={<></>}
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src="https://user-images.githubusercontent.com/47355538/169804450-62b14248-3a74-4783-add8-5135c45d99e8.png"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://user-images.githubusercontent.com/47355538/169804480-f944afe2-cba4-4a8a-bb6c-0234334b05ee.png"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://user-images.githubusercontent.com/47355538/169805976-ada70745-5bf1-4086-982a-6c8a71c0bc04.png"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <img
                src="https://user-images.githubusercontent.com/47355538/169805463-070350d9-40a2-498d-b53b-4381736f4682.png"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <img
                src="https://user-images.githubusercontent.com/47355538/169804518-ca6f14b9-aed6-4dc2-9472-d00bccd1d67f.png"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership;
