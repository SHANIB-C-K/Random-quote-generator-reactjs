import React, { useState } from "react";
import { IoReloadCircleOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const HomeScreen = () => {
  const [quote, setQuote] = useState({
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit est rerum repellat vitae voluptatem excepturi magnam maiores perferendis accusamus deserunt quae in nostrum quod numquam eveniet eaque, vero culpa.",
    author: "lorem",
  });
  return (
    <>
      <div className="bg-gray-800 w-screen h-screen text-white flex flex-col justify-center items-center">
        <div className="bg-black w-[310px] lg:w-[800px] bg-opacity-50 rounded-2xl shadow-2xl shadow-blue-800 flex flex-col items-center justify-center m-auto">
          <h1 className="lg:text-3xl text-2xl font-bold mt-5">
            Random Quot <span className="text-red-600">Generator</span>
          </h1>
          <div className="lg:py-[90px] py-[45px] px-[15px]">{quote.text}</div>
          <div>
            <div className="h-[1.5px] bg-green-800 lg:w-[600px] w-[250px]"></div>
            <div className="flex flex-row items-center justify-between my-8 mx-0">
              <div className="text-[20px] text-white font-extrabold">
                {quote.author}
              </div>
              <div className="flex gap-[40px]">
                <IoReloadCircleOutline className="cursor-pointer size-8" />
                <FaXTwitter className="cursor-pointer size-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
