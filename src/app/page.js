import Image from "next/image";
import img from "../../public/heroimg.webp";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row align-middle justify-around gap-12 lg:gap-16 xl:gap-40 items-center lg:pt-10 pb-10  ">
        <div className="flex flex-col gap-4 sm:gap-8 items-center text-center lg:text-start lg:items-start">
          <h1 className="  text-3xl sm:text-5xl lg:text-6xl font-bold  bg-gradient-to-b from-blue-500  to-gray-600 inline-block text-transparent bg-clip-text ">
            Better design for your digital products.
          </h1>

          <p className=" dark:text-gray-300 text-gray-700 font-medium mb-4 sm:mb-0 ">
            Explore all blogs and create and post your own blogs by register or
            login by using your account.
          </p>

          <Button
            href={"/blog"}
            text={"See all blogs"}
            classname={"bg-blue-500 hover:bg-blue-700"}
          />
        </div>
        <Image
          src={img}
          alt="heroimage"
          priority="true"
          loading="eager"
          className=" w-[75%] h-[400px] sm:w-[auto] sm:h-[500px]"
        />
      </div>
    </>
  );
}
