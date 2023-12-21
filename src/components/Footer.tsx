import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#e9ecef]">
      <div className="my-20 w-3/5">
        <h1 className="text-center text-5xl font-light">Get In Touch</h1>
        <p className="mt-5 break-words text-center text-xl font-extralight">
          I’m consistently looking for new opportunities and projects to work
          on, and for that my inbox is always open. If you have any questions,
          or if you just want to say hi or whether you wanna collab, I’ll try my
          best to get back to you! Please feel free to email me at,{" "}
          {
            <Link
              href="mailto:siddhant.rai.5686@gmail.com"
              className="font-medium text-[#0d6efd]"
            >
              siddhant.rai.5686@gmail.com
            </Link>
          }
        </p>
      </div>
    </div>
  );
}

export default Footer;
