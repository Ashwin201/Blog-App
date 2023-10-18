"use client";
import logo from "../../public/articles.webp";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoonStarsFill, BsGithub } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FacebookIcon, InstaIcon, LinkedinIcon } from "../../public/Icons";
import Image from "next/image";
import dynamic from "next/dynamic";
const AuthLinks = dynamic(() => import("./AuthLinks"));
import { useSession } from "next-auth/react";
const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menuopen, setMenuOpen] = useState(false);
  const { status, data: session } = useSession();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleNav = () => {
    setMenuOpen(!menuopen);
  };

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
    <div className=" ">
      <header className=" sticky  top-0 bg-bg font-medium flex justify-between items-center align-middle pb-3 h-14">
        <li className=" list-none">
          <Link href="/" aria-label="home">
            <Image src={logo} alt="logo" width={80} height="auto" />
          </Link>
        </li>
        <nav className=" hidden sm:flex  items-center text-center ">
          {theme === "dark" ? (
            <span onClick={() => setTheme("light")} className="mr-5">
              <BsSun cursor={"pointer"} size={20} />
            </span>
          ) : (
            <span onClick={() => setTheme("dark")} className="mr-5">
              <BsMoonStarsFill cursor={"pointer"} size={20} />
            </span>
          )}

          {links.map((item) => (
            <li
              className=" list-none hover:scale-95 duration-500 transition-all"
              key={item.id}
            >
              <Link
                href={item.href}
                className="mr-5   font font-medium "
                aria-label="home"
              >
                {item.title}
              </Link>
            </li>
          ))}

          <AuthLinks />
          {status === "authenticated" ? (
            ""
          ) : (
            <li className=" list-none hover:scale-95 duration-500 transition-all font font-medium">
              <Link
                href={"/dashboard/register"}
                className="mr-5   "
                aria-label="home"
              >
                Dashboard
              </Link>
            </li>
          )}
        </nav>

        <nav className=" hidden lg:flex items-center justify-center pt-1">
          <li className="list-none mr-3">
            <Link
              href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
              aria-label="insta"
              target="_blank"
            >
              <InstaIcon />
            </Link>
          </li>
          <li className="list-none  mr-3">
            <Link
              href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
              aria-label="linkedin"
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
          </li>
          <li className="list-none  mr-3">
            <Link
              href="https://github.com/Ashwin201"
              aria-label="github"
              target="_blank"
            >
              <BsGithub size={28} />
            </Link>
          </li>
        </nav>
        <div className=" flex gap-4 justify-center items-center align-middle sm:hidden  cursor-pointer">
          {theme === "dark" ? (
            <span onClick={() => setTheme("light")}>
              <BsSun cursor={"pointer"} size={23} />
            </span>
          ) : (
            <span onClick={() => setTheme("dark")}>
              <BsMoonStarsFill cursor={"pointer"} size={20} />
            </span>
          )}

          <div className="flex flex-col items-end mt-1" onClick={handleNav}>
            <span className=" w-[25px]  h-[2.3px] bg-black dark:bg-gray-200    mb-[6px]  rounded-sm"></span>
            <span className="w-[19px]  h-[2.3px] bg-black  dark:bg-gray-200   mb-[6px] rounded-sm"></span>
            <span className="w-[13px]  h-[2.3px] bg-black  dark:bg-gray-200  mb-[6px] rounded-sm"></span>
          </div>
        </div>
      </header>
      <div className=" block sm:hidden  ">
        <div
          className={
            menuopen
              ? "fixed z-50  top-0 left-0 w-screen h-screen transition-all ease-in-out duration-80 bg-slate-50 dark:bg-gray-950 border-r-1  "
              : " fixed z-50  top-0 -left-full h-screen transition-all ease-in-out rounded-r-3xl duration-800"
          }
        >
          <span
            className=" mt-[18px] mr-8 flex justify-end  cursor-pointer dark:text-white"
            onClick={handleNav}
          >
            <RxCross2 size={26} />
          </span>

          <ul className="flex  items-center  text-start flex-col mt-36">
            {links.map((item) => (
              <li
                className=" list-none  mb-5 hover:scale-95 duration-500 transition-all"
                key={item.id}
              >
                <Link
                  href={item.href}
                  className="   font-medium "
                  onClick={handleNav}
                  aria-label="home"
                >
                  {item.title}
                </Link>
              </li>
            ))}

            {/* Authentication Links */}
            <span onClick={handleNav}>
              <AuthLinks />
            </span>
            {status === "authenticated" ? (
              ""
            ) : (
              <li className=" w-fit list-none hover:scale-95 duration-500 transition-all font font-medium text-center sm:text-start">
                <Link
                  href={"/dashboard/register"}
                  aria-label="home"
                  span
                  onClick={handleNav}
                >
                  Dashboard
                </Link>
              </li>
            )}

            <div className="social flex mt-6 cursor-pointer items-center gap-3">
              <li className=" list-none ">
                <Link
                  href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                  aria-label="insta"
                  onClick={handleNav}
                  target="_blank"
                >
                  <InstaIcon />
                </Link>
              </li>
              <li className=" list-none ">
                <Link
                  href="https://github.com/Ashwin201"
                  aria-label="github"
                  onClick={handleNav}
                  target="_blank"
                >
                  <BsGithub size={28} />
                </Link>
              </li>
              <li className=" list-none ">
                <Link
                  href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                  aria-label="linkedin"
                  onClick={handleNav}
                  target="_blank"
                >
                  <LinkedinIcon />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;