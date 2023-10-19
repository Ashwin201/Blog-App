import Link from "next/link";
import React from "react";

const Button = ({ href, text, classname }) => {
  return (
    <ul>
      <li className=" list-none">
        <Link
          href={href}
          aria-label={text}
          className={` py-2 px-3 sm:py-[10px] sm:px-4 rounded-md border-none  text-white font-semibold bg-blue-600 hover:bg-blue-800 duration-300 transition-all ${classname} `}
        >
          {text}
        </Link>
      </li>
    </ul>
  );
};

export default Button;
