"use client";
import Image from "next/image";
import logo from "../../../../../public/articles.webp";
import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { data, status } = useSession();
  const [err, setErr] = useState("");

  const router = useRouter();
  if (status === "authenticated") {
    router.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = e.target[0].value;
      const password = e.target[1].value;
      signIn("credentials", { email, password });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {status === "unauthenticated" || status === "loading" ? (
        <>
          <div className="flex flex-col justify-center items-center my-10 mb-16">
            <div className="flex justify-center items-center gap-1  ">
              <h1 className="text-2xl text-center sm:text-start mb-6 text-black dark:text-gray-300 font-bold ">
                Welcome to
              </h1>
              <Image src={logo} alt="logo" className=" h-[50px] w-auto mb-6" />
            </div>
            <p className="font-bold text-lg text-gray-500 dark:text-gray-300 mb-8">
              Login with
            </p>
            <form className="flex flex-col gap-6  " onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Enter your Email"
                className="cursor-pointer w-[100%] sm:w-[400px] rounded-xl border-2 px-3 py-2 border-gray-500 dark:border-gray-500 text-base  text-start text-gray-500  dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-400 font-semibold outline-none bg-inherit"
              />
              <input
                type="password"
                required
                placeholder="Enter your password"
                className="cursor-pointer w-[100%] sm:w-[400px] rounded-xl px-3 py-2 border-2 border-gray-500 dark:border-gray-500 text-base  text-start text-gray-500  dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-400 font-semibold outline-none bg-inherit"
              />
              <p className=" -my-2 flex justify-end text-sm font-medium text-gray-700 dark:text-gray-400 mr-2">
                Create a account? &nbsp;
                <Link
                  href={"/dashboard/register"}
                  aria-label="link"
                  className="text-sm font-semibold text-red-700"
                >
                  Sign up
                </Link>
              </p>
              <button
                type="submit"
                className="w-[100%] sm:w-[400px] flex items-center justify-center cursor-pointer rounded-xl py-2 px-3 sm:px-20 border-2 border-green-500 hover:border-green-700 hover:bg-green-800 duration-300 transition-all text-base  text-center  text-white font-semibold outline-none bg-green-600"
              >
                Login
              </button>
              {/* {err ? (
                <p className=" font-semibold text-base text-red-600 -my-3  ml-2">
                  SomeThing Went wrong
                </p>
              ) : (
                ""
              )} */}
              <p className=" font-semibold text-sm text-gray-800 dark:text-gray-200 -my-3  ml-2">
                Note : If new user, please register yourself first.
              </p>
              <p className=" text-center font-bold text-lg text-gray-600 dark:text-gray-300 -my-2 mb-6">
                or
              </p>
            </form>
            <button
              onClick={() => signIn("google")}
              className="  sm:w-[400px] flex items-center justify-center cursor-pointer rounded-xl px-20  sm:px-0 py-2  border-2 border-red-500 hover:border-red-700
               hover:bg-red-800 duration-300 transition-all text-base  text-center  text-white font-semibold outline-none bg-red-600"
            >
              <FcGoogle size={26} className="mr-3" /> Google
            </button>
          </div>
        </>
      ) : (
        <div className=" flex items-center justify-center  ">
          <p className="text-center font-semibold text-xl ">
            You have already
            <span className="ml-2 text-bold text-2xl text-green-600">
              Logged In.
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Login;
