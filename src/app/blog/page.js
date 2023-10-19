import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "All Blogs",
  description: "This is a blogs section of blog app.",
};
const getData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log("Error: ", err);
  }
};
const Blogs = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-10">
      {data &&
        data.map((item) => (
          <div
            className=" flex flex-col lg:flex-row justify-center items-center"
            key={item._id}
          >
            <li className=" list-none">
              <Link
                href={`/blog/${item._id}`}
                aria-label="link"
                className=" grid grid-cols-2 gap-6  md:gap-8 lg:gap-12 p-3 hover:scale-[.98] duration-500 transition-all cursor-pointer "
              >
                <div className=" col-span-2 lg:col-span-1 ">
                  <Image
                    src={item.image}
                    alt="img"
                    style={{ objectFit: "cover", height: "250px" }}
                    width={600}
                    height={500}
                    className=" object-cover rounded-md"
                  />
                </div>
                <div className=" col-span-2 lg:col-span-1 pr-1    ">
                  <div className="flex flex-col   gap-2">
                    <h3 className=" text-2xl  font-semibold dark:text-gray-300 text-gray-800  mb-3 ">
                      {item.title}
                    </h3>
                    <p className="dark:text-gray-300 text-gray-700 font-medium text-md overflow-x-hidden">
                      {item.desc}
                    </p>
                    <div className="mt-6">
                      <Button
                        href={`/blog/${item._id}`}
                        text={"See more"}
                        classname={""}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </div>
        ))}
    </div>
  );
};

export default Blogs;
