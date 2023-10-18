import React from "react";

const loading = () => {
  return (
    <main className=" hidden sm:block ml-[30%]  ">
      <div className="wrapper w-[200px] h-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  mt-[230px] ">
        <div className="circle "></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span className=" text-lg sm:text-2xl absolute top-20 text-[32px] font-bold text-center  tracking-wide left-[15%] ">
          Loading...
        </span>
      </div>
    </main>
  );
};

export default loading;
