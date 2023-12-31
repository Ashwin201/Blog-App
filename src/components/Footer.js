"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.webp";
import { InstaIcon, LinkedinIcon } from "../../public/Icons";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { useSession } from "next-auth/react";
const Footer = () => {
  const { status, data: session } = useSession();

  const links = [
    {
      id: 1,
      href: "/",
      title: "Home",
    },
    {
      id: 2,
      href: "/portfolio",
      title: "Portfolio",
    },
    {
      id: 3,
      href: "/about",
      title: "About",
    },
    {
      id: 4,
      href: "/blog",
      title: "Blogs",
    },
  ];
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between mt-8 mb-6 gap-10">
        <div className="md:w-[300px] flex flex-col ">
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start  ">
            <Image
              src={logo}
              alt="logo"
              height={45}
              width={45}
              className="rounded-[50%] cursor-pointer border-2 border-gray-600"
            />
            <div className="flex flex-col justify-between text-center sm:text-start">
              <span className="text-lg font-bold  dark:text-gray-300">
                Ashmin
              </span>
              <span className="text-sm font-medium  dark:text-gray-300">
                sharmaashwin203@gmail.com
              </span>
            </div>
          </div>
          <p className="my-5 -pr-20 font-medium  text-[15px] dark:text-gray-300 text-gray-700 text-center sm:text-start">
            Copyright @2023. Ashmin Sharma.
            <br />
            All rights reserved.
          </p>
          <ul className="flex  gap-3 justify-center items-center sm:justify-normal sm:items-start ">
            <li className=" list-none -mt-1">
              <Link
                href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                aria-label="Instagram"
                target="_blank"
              >
                <InstaIcon />
              </Link>
            </li>
            <li className=" list-none">
              <Link
                href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                aria-label="Linkedin "
                target="_blank"
              >
                <LinkedinIcon />
              </Link>
            </li>
            <li className=" list-none">
              <Link
                href="https://github.com/Ashwin201"
                aria-label="Github Link"
                target="_blank"
              >
                <BsGithub size={28} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center sm:justify-start text-center sm:text-start gap-12">
          <div>
            <h1 className="text-lg font-bold  dark:text-gray-300 mb-4">
              Links
            </h1>
            <ul className="flex flex-col gap-3 dark:text-gray-300 text-gray-700">
              {links.map((item) => (
                <li className=" list-none" key={item.id}>
                  <Link
                    aria-label={item.title}
                    href={item.href}
                    className="text-md font-medium dark:text-gray-300 text-gray-700 "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-bold  dark:text-gray-300 mb-4">
              Social&nbsp;<span className="font-medium text-sm">(Creator)</span>
            </h1>
            <ul className="flex flex-col gap-3 dark:text-gray-300 text-gray-700">
              <li className=" list-none">
                <Link
                  aria-label="Instagram"
                  href={"https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="}
                  className="text-md font-medium dark:text-gray-300 text-gray-700 "
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li className=" list-none">
                <Link
                  aria-label="Linkedin"
                  target="_blank"
                  href={"https://www.linkedin.com/in/ashmin-sharma-6a4867257"}
                  className="text-md font-medium dark:text-gray-300 text-gray-700 "
                >
                  Linkedin
                </Link>
              </li>
              <li className=" list-none">
                <Link
                  aria-label="Github"
                  target="_blank"
                  href={"https://github.com/Ashwin201"}
                  className="text-md font-medium dark:text-gray-300 text-gray-700 "
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
