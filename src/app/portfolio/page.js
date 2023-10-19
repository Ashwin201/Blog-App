import Image from "next/image";
import React from "react";
import illustration from "../../../public/illustration.webp";
import website from "../../../public/websites.webp";
import app from "../../../public/apps.webp";
import Link from "next/link";
export const metadata = {
  title: "Blog App Portfolio",
  description: "This is a portfolio for blog app.",
};

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col gap-6 pb-10 items-center sm:items-start">
        <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-bold  bg-gradient-to-b from-blue-500  to-gray-600 inline-block text-transparent bg-clip-text ">
          My Works
        </h1>
        <p className="text-2xl sm:text-3xl  font-semibold dark:text-gray-300 text-gray-700">
          Choose a Gallery
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 mt-3 place-items-center">
          <li className=" list-none relative cursor-pointer hover:scale-95 duration-300 transition-all border-4 rounded-md border-gray-300 group">
            <Link href={"/portfolio/Websites"} aria-label="link">
              <Image
                src={website}
                loading="eager"
                priority="true"
                alt="image"
                className=" rounded-md w-auto lg:w-[280px] h-[350px] opacity-[.8] object-cover"
              />
              <p className=" absolute bottom-3 left-3 text-3xl font-semibold   dark:text-gray-300 text-white group-hover:text-blue-500  duration-300 transition-all ">
                Websites
              </p>
            </Link>
          </li>
          <li className=" list-none relative cursor-pointer hover:scale-95 duration-300 transition-all border-4 rounded-md border-gray-300 group">
            <Link href={"/portfolio/Illustrations"} aria-label="link">
              <Image
                src={illustration}
                alt="image"
                loading="eager"
                priority="true"
                className="rounded-md  w-auto lg:w-[280px] h-[350px] opacity-[.9] object-cover"
              />
              <p className=" absolute bottom-3 left-3 text-3xl   font-semibold   dark:text-gray-200 text-white group-hover:text-blue-500 duration-300 transition-all">
                Illustrations
              </p>
            </Link>
          </li>
          <li className=" list-none relative cursor-pointer hover:scale-95 duration-300 transition-all border-4 rounded-md border-gray-300 group">
            <Link href={"/portfolio/Apps"} aria-label="link">
              <Image
                src={app}
                alt="image"
                loading="eager"
                priority="true"
                className=" rounded-md  w-auto lg:w-[280px] h-[350px] opacity-[.8] object-cover"
              />
              <p className=" absolute bottom-3 left-3 text-3xl  font-semibold  group-hover:text-blue-500  dark:text-gray-300 text-white duration-300 transition-all">
                Apps
              </p>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
