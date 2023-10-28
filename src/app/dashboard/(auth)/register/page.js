"use client";
import Image from "next/image";
import logo from "../../../../../public/articles.webp";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Register = () => {
  const { status } = useSession();
  const [err, setErr] = useState("");

  const router = useRouter();
  if (status === "authenticated") {
    router.push("/");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/signin?success=Account has been created");
    } catch (err) {
      setErr(err);
      console.log(err);
    }
  };

  return (
    <>
      {status === "authenticated" || status === "loading" ? (
        <div className=" flex items-center justify-center  ">
          <p className="text-center font-semibold text-xl ">
            You have already
            <span className=" ml-2 text-bold text-2xl text-green-600">
              Registered.
            </span>
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center my-10 mb-16">
            <div className="flex justify-center items-center gap-1  ">
              <h1 className="text-2xl text-center sm:text-start mb-6 text-black dark:text-gray-300 font-bold ">
                Welcome to
              </h1>
              <Image src={logo} alt="logo" className=" h-[50px] w-auto mb-6" />
            </div>
            <p className="font-bold text-lg text-gray-600 dark:text-gray-300 mb-8">
              Create a Account
            </p>
            <form className="flex flex-col gap-6  " onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your Name"
                required
                className="cursor-pointer w-[100%] sm:w-[400px] rounded-xl border-2 px-3 py-2 border-gray-500 dark:border-gray-600 text-base  text-start text-gray-500  dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-400 font-semibold outline-none bg-inherit"
              />
              <input
                type="email"
                placeholder="Enter your Email"
                required
                className=" cursor-pointer w-[100%] sm:w-[400px] rounded-xl px-3 py-2 border-2 border-gray-500 dark:border-gray-600 text-base  text-start text-gray-500  dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-400 font-semibold outline-none bg-inherit"
              />
              <input
                type="password"
                placeholder="Enter your Password"
                required
                className="cursor-pointer w-[100%] sm:w-[400px] rounded-xl px-3 py-2 border-2 border-gray-500 dark:border-gray-600 text-base  text-start text-gray-500  dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-400 font-semibold outline-none bg-inherit"
              />
              <button
                type="submit"
                className="w-[100%] sm:w-[400px] flex items-center justify-center cursor-pointer rounded-xl py-2 px-3 sm:px-20 border-2 border-green-500 hover:border-green-700 hover:bg-green-700 duration-300 transition-all text-base  text-center  text-white font-semibold outline-none bg-green-600"
              >
                Register
              </button>
              {err && (
                <p className=" font-semibold text-base text-red-600 -my-4 ml-2">
                  {err}
                </p>
              )}
            </form>

            <p className=" text-center font-bold text-lg text-gray-600 dark:text-gray-300 my-3">
              or
            </p>
            <li className=" list-none  ">
              <Link
                href={"/dashboard/login"}
                aria-label="link"
                className="w-[100%] sm:w-[400px] flex items-center justify-center cursor-pointer rounded-xl py-2 px-3 sm:px-20 border-2 border-red-500 hover:border-red-700 hover:bg-red-800
               duration-300 transition-all text-base  text-center  text-white font-semibold outline-none bg-red-500"
              >
                Login with existing account
              </Link>
            </li>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
