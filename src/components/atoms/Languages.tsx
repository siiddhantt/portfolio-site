/* eslint-disable */
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Languages({
  url,
  stargazersURL,
  updatedAt,
}: {
  url: string;
  stargazersURL: string;
  updatedAt: string;
}) {
  const [data, setData] = useState([{} as any]);
  const date = new Date(updatedAt);
  const fetchData = useCallback(async () => {
    let total = 0;
    const res = await fetch(url);
    const data = await res.json();
    const temp = Object.keys(data).map((key) => {
      total += data[key];
      return [key, data[key]];
    });
    temp.forEach((value) => {
      value[1] = ((value[1] / total) * 100).toFixed(2) + "%";
    });
    setData(temp);
  }, [url]);
  useEffect(() => {
    if (url) fetchData();
  }, []);
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="grid grid-cols-3 gap-1 text-xs font-bold">
        {data.map((value, idx) => {
          return (
            <div className="gap-2" key={idx}>
              <span>{value[0]}: </span>
              <span className="font-normal">{value[1]}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex w-full items-center justify-between">
        <Link href={stargazersURL || ""} className="flex items-center gap-1">
          <FaGithub />
          Stars
        </Link>
        <h1 className="text-sm font-light text-[#6c757d]">
          Updated on {date.toDateString()}
        </h1>
      </div>
    </div>
  );
}

export default Languages;
