import Image from "next/image";
import React from "react";
import banner from "../../../public/blogbanner.webp";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
export const metadata = {
  title: "About Me",
  description: "This is a about section of blog app.",
};
const About = () => {
  return (
    <>
      <div className="pb-10 flex flex-col gap-10">
        <Image
          src={banner}
          alt="banner"
          className="w-[100%] h-[200px] sm:h-[300px] rounded-md"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <div>
          <h1 className=" text-2xl font-semibold mb-3 bg-gradient-to-b from-blue-500  to-gray-600 inline-block text-transparent bg-clip-text">
            What am i?
          </h1>
          <p className=" dark:text-gray-300 text-gray-700 font-medium">
            Hi, I'm Ashmin Sharma, a web developer and UI/UX designer with a
            passion for creating beautiful, functional, and responsive design by
            making pixels magic. <br />
            <br />
            Whether I'm working on a website or any other things, i bring my
            commitment to design excellence and user-centered thinking to every
            project I work on. <br />
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-3 bg-gradient-to-b from-blue-500  to-gray-600 inline-block text-transparent bg-clip-text">
            What i do?
          </h1>
          <p className="dark:text-gray-300 text-gray-700 font-medium">
            I'm currently pursuing Bachelor's in Compute Science and Engineering
            from Ganga Institute of Technology and Management located at
            Kablana, Jhajjar.
            <br />
            <br />
            I have completed my high school in Non-medical Stream from
            Government Senior Secondary School, Jhajjar, Haryana in 2019-21
            session.
            <br />
            <br />
            After completing High School, i've been actively involved in the Web
            Development community and i've built some projects during this
            period of time from which i get good amount of experience about this
            field.
          </p>
          <br />
          <br />
          <Button
            href={"mailto:sharmaashwin203@gmail.com"}
            text={"Contact me"}
            classname={"bg-blue-500 hover:bg-blue-700"}
          />
        </div>
      </div>
    </>
  );
};

export default About;
