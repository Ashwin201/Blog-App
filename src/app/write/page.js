"use client";
import React, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import useSWR from "swr";
import Button from "@/components/Button";
import Image from "next/image";
import img from "../../../public/apps.webp";

const Write = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated" && status === "loading") {
    router.push("/");
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts?email=${session?.user?.email}`,
    fetcher
  );
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`, {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.user.name,
          email: session.user.email,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {status === "loading" || status === "authenticated" ? (
        <>
          <div className=" flex flex-col sm:flex-row items-start sm:items-center mb-8">
            <BiSolidUserCircle size={50} />
            <div className="flex flex-col items-start  sm:ml-3 ">
              <span className="text-lg text-gray-800 dark:text-gray-300 font-semibold text-start ">
                {session?.user?.name}
              </span>
              <span className="text-base text-gray-700 dark:text-gray-400 font-semibold text-start ">
                {session?.user?.email}
              </span>
            </div>
          </div>
          <form
            className=" mb-8 write flex flex-col overflow-x-hidden    "
            onSubmit={handleSubmit}
          >
            <input
              required
              type="text"
              className="text-2xl mb-[30px] text-start  dark:text-gray-500 placeholder:text-gray-700 dark:placeholder:text-gray-400 font-semibold outline-none bg-inherit "
              placeholder="Enter Title..."
            />
            <input
              type="text"
              placeholder="Enter  Short Description... "
              className=" resize-none bg-inherit outline-none text-lg font-medium text-gray-700 dark:text-gray-400 placeholder:text-gray-700 dark:placeholder:text-gray-400 placeholder:m-2 hover:outline-none mb-[30px]"
            />
            <input
              required
              type="text"
              placeholder="Enter Image Url... "
              className=" bg-inherit outline-none text-lg font-medium text-gray-700 dark:text-gray-400 placeholder:text-gray-700 dark:placeholder:text-gray-400 placeholder:m-2 hover:outline-none mb-[30px]"
            />

            <textarea
              type="textarea"
              placeholder="Enter  Your Content... "
              className=" resize-none bg-inherit outline-none text-lg font-medium text-gray-700 dark:text-gray-400 placeholder:text-gray-700 dark:placeholder:text-gray-400 placeholder:m-2 hover:outline-none mb-[30px]"
              required
              rows={7}
            />
            <button
              type="submit"
              className="py-2 px-3 sm:py-[10px] sm:px-4 rounded-md  w-fit text-white font-medium bg-green-600 hover:bg-green-800 duration-300 transition-all"
            >
              Publish
            </button>
          </form>

          <div>
            <p className=" mb-6 font-semibold text-3xl dark:text-gray-300 text-gray-800">
              Your Blogs
            </p>
            {data
              ? data?.map((post) => (
                  <div
                    className="flex flex-col gap-5 border-2 border-gray-400 p-3 sm:p-5  rounded-md mb-6 "
                    key={post._id}
                  >
                    <div className="flex flex-col-reverse md:flex-row justify-between md:items-center  gap-3 ">
                      <div className="flex flex-col gap-2">
                        <p className="dark:text-gray-300 text-gray-800 font-bold text-2xl ">
                          {post.title}
                        </p>
                        <p className="dark:text-gray-400 text-gray-700 font-medium text-base ">
                          {post.desc}
                        </p>
                        <div
                          className="mt-3 mb-2"
                          onClick={() => handleDelete(post._id)}
                        >
                          <Button
                            href="/write"
                            text={"Delete"}
                            classname={"bg-red-500 hover:bg-red-700"}
                          />
                        </div>
                      </div>
                      <Image
                        src={post.image}
                        alt="img"
                        width={600}
                        height={250}
                        className=" rounded-md object-cover sm:w-[450px] h-[200px]"
                      />
                    </div>
                  </div>
                ))
              : "No Posts available."}
          </div>
        </>
      ) : (
        <div className=" flex items-center justify-center  ">
          <li className=" text-center list-none font-medium text-lg ">
            You have to
            <Link
              href={"/dashboard/register"}
              aria-label="link"
              className="font-bold text-blue-500 text-xl mx-2 "
            >
              Sign in
            </Link>{" "}
          </li>
          <span className="font-medium text-lg">or</span>
          <li className=" text-center list-none font-medium text-lg">
            <Link
              href={"/dashboard/login"}
              aria-label="link"
              className="font-bold text-green-500 text-xl mx-2 "
            >
              Log in
            </Link>{" "}
            to post your own blogs.
          </li>
        </div>
      )}
    </>
  );
};
export default Write;
//   //NEW WAY TO FETCH DATA
//   const fetcher = (...args) => fetch(...args).then((res) => res.json());

//   const { data, mutate, error, isLoading } = useSWR(
//     `/api/posts?username=${session?.user.name}`,
//     fetcher
//   );
//   console.log(data);

//     //For Deleting Post

//};
