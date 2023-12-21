import React from "react";
import { ProgressBar } from "react-bootstrap";

function Progress({
  title,
  value,
  isVisible,
}: {
  title: string;
  value: number;
  isVisible: boolean;
}) {
  return (
    <div className="w-3/4 sm:w-1/2 md:w-3/4">
      <p className="lead mb-1 mt-2 text-xl font-light">{title}</p>
      <ProgressBar
        className={`${!isVisible ? "progress" : "progress-bar-animation"}`}
        now={value}
      />
    </div>
  );
}

export default Progress;
