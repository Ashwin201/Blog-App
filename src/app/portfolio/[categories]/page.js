import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import img1 from "../../../../public/apps.webp";
import { items } from "./data";
import { notFound } from "next/navigation";
import Link from "next/link";

const getdata = (cat) => {
  try {
    const data = items[cat];
    if (data) {
      return data;
    } else {
      return notFound();
    }
  } catch (err) {
    console.log(err);
  }
};
const Categories = ({ params }) => {
  const data = getdata(params.categories);
  return (
    <div className="flex flex-col">
      <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-bold  bg-gradient-to-b from-blue-500  to-gray-600 inline-block text-transparent bg-clip-text ">
        My Works
      </h1>
      <h3 className="   my-6 text-3xl font-semibold items-center   bg-gradient-to-b from-blue-500  to-gray-600 inline-block text-transparent bg-clip-text">
        {params.categories}&nbsp;{" "}
        <span className=" font-bold text-base">( static blogs )</span>
      </h3>
      {data &&
        data.map((item) => (
          <li className=" list-none">
            <Link
              href={`/portfolio/Websites`}
              className="flex flex-col mb-10"
              key={item.id}
            >
              <div className="item flex flex-col-reverse md:flex-row gap-6 md:gap-8 lg:gap-12  p-3 hover:scale-[.98] duration-500 transition-all cursor-pointer">
                <div className="flex flex-col justify-center items-start gap-2">
                  <h3 className=" text-2xl sm:text-3xl  font-semibold dark:text-gray-200 text-gray-700 ">
                    {item.title}
                  </h3>
                  <p className="dark:text-gray-300 text-gray-700 font-medium text-md">
                    {item.desc}
                  </p>
                  <p className="hidden dark:text-gray-300 text-gray-700 font-medium text-md">
                    {item.content}
                  </p>
                  {/* <div className="mt-5">
                  <Button href={"/"} text={"See more"} />
                </div> */}
                </div>
                <div className="w-[100%]">
                  <Image
                    src={item.image}
                    alt="img"
                    className="   rounded-md"
                    width={700}
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      minWidth: "230px",
                    }}
                    height={200}
                    loading="eager"
                    priority="true"
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
    </div>
  );
};

export default Categories;

// href={{
//   pathname: `/portfolio/Websites/${item.id}`,
//   query: {
//     title: item.title,
//     desc: item.desc,
//     desc2: item.desc2,
//     image: item.image,
//   },
// }}
