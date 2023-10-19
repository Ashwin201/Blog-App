import Image from "next/image";
import { BiSolidUserCircle } from "react-icons/bi";
import { notFound } from "next/navigation";

const getData = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return notFound();
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export async function generateMetadata({ params }) {
  const data = await getData(params.id);

  return {
    title: data.title,
    description: data.desc,
  };
}
const Blog = async ({ params }) => {
  const item = await getData(params.id);
  return (
    <div>
      <div className="  flex flex-col-reverse md:flex-row  gap-4 ">
        <div className="flex-1 flex flex-col gap-4 justify-center text-start  ">
          <h3 className=" text-3xl sm:text-4xl  font-bold dark:text-gray-300 text-gray-800 ">
            {item.title}
          </h3>
          <p className="mb-3 dark:text-gray-300 text-gray-700  font-medium text-md">
            {item.desc}
          </p>

          <div className="flex gap-2   justify-start items-center ">
            <BiSolidUserCircle size={50} />
            <div className="flex flex-col ">
              <span className="text-md  dark:text-gray-200 text-gray-800   font-semibold">
                {item.username}
              </span>
              <span className="text-sm dark:text-gray-300 text-gray-700  font-medium">
                {item.email}
              </span>
            </div>
          </div>
        </div>
        <div className=" flex-1  ">
          <Image
            src={item.image}
            alt="img"
            width={700}
            height={500}
            loading="eager"
            priority="true"
            style={{ objectFit: "cover", height: "280px" }}
            className=" h-[200px] w-full rounded-md object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col  gap-6 mt-12  w-[100%]">
        <h3 className=" text-2xl sm:text-4xl font-semibold dark:text-gray-300 text-gray-800 ">
          Detail :
        </h3>
        <div className=" dark:text-gray-300 text-gray-700 font-medium">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default Blog;
