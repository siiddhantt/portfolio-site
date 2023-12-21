/* eslint-disable */
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

import Languages from "./atoms/Languages";

function Projects() {
  const [data, setData] = useState([{} as any]);
  const fetchData = async () => {
    const res = await fetch(
      "https://api.github.com/users/siiddhantt/repos?sort=updated&direction=desc",
    );
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div id="projects" className="min-h-screen bg-[#e9ecef]">
      <div className="py-20 text-center text-5xl font-light">
        Recent Projects
      </div>
      <div className="grid grid-cols-1 gap-2 px-5 sm:grid-cols-2 sm:px-10 md:px-20">
        {data
          .filter((val, index) => index < 4)
          .map((repo, idx) => (
            <div
              key={idx}
              className="flex transform flex-col break-words rounded-lg border border-solid border-[#0000002b] bg-white p-4 shadow-md transition-all duration-200 hover:scale-[1.01] hover:shadow-lg"
            >
              <div className="flex flex-col">
                <h1 className="font-semibold">{repo.name}</h1>
                <div className="mt-2 flex flex-col gap-1 sm:flex-row">
                  <button className="flex items-center justify-center gap-1 rounded-lg border border-solid border-[#0000002b] p-2 text-center">
                    <FaGithub size={15}></FaGithub>Repository
                  </button>
                  <button className="flex items-center justify-center gap-1 rounded-lg border border-solid border-[#0000002b] p-2">
                    <FaGithub size={15}></FaGithub>Clone Project
                  </button>
                </div>
                <span className="my-4 h-px w-full bg-[#0000001e]"></span>
              </div>
              <Languages
                url={repo.languages_url}
                stargazersURL={repo.stargazers_url}
                updatedAt={repo.updated_at}
              ></Languages>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
