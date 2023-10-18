import Link from "next/link";
import React from "react";

const Button = ({ href, text, classname }) => {
  return (
    <div>
      <li className=" list-none">
        <Link
          href={href}
          aria-label="button"
          className={` py-2 px-3 sm:py-[10px] sm:px-4 rounded-md border-none  text-white font-medium bg-blue-500 hover:bg-blue-700 duration-300 transition-all ${classname} `}
        >
          {text}
        </Link>
      </li>
    </div>
  );
};

export default Button;
