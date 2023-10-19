"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AuthLinks = () => {
  const { status, data: session } = useSession();

  return (
    <>
      {status === "authenticated" || status === "loading" ? (
        <ul className=" sm:flex mb-2 sm:mb-0  items-center justify-center align-middle ">
          <li className=" list-none">
            <Link
              className=" flex  justify-center   font-medium font-medium text-lg sm:text-base mb-5 sm:mb-0 hover:scale-95 duration-500 transition-all"
              href={"/write"}
              aria-label="Write"
            >
              Write
            </Link>
          </li>

          <li
            onClick={signOut}
            className="  sm:inline sm:ml-5 cursor-pointer font-medium text-lg sm:text-base mt-5 sm:mt-0 bg-black text-white   border-2 rounded-md border-black dark:border-white hover:scale-90 hover:bg-white hover:text-black px-2 py-1  transition-all duration-500 ease-in-out"
          >
            Log out
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default AuthLinks;
// {status === "authenticated" ? (
//   <>
//     <div className=" flex flex-row items-center">
//       <Image
//         src={img1}
//         alt="img"
//         className=" rounded-[50%] border-2 w-[30px] h-[30px]"
//       />
//       <div className="flex flex-col gap-1 ">
//         <span className="text-sm text-blue-600 font-semibold text-end ">
//           {session?.user?.name}
//         </span>
//         <span className="text-sm text-blue-600 font-semibold text-end ">
//           {session?.user?.email}
//         </span>
//       </div>
//     </div>
//   </>
// ) : (

//   ""
// )}
