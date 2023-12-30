import React, { useState } from "react";

const HomeScreen = () => {
  const [quote, setQuote] = useState({
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quasi voluptatibus nostrum autem animi mollitia quos repellendus, recusandae non quibusdam error deleniti, alias natus fugit libero veritatis aliquid sequi ratione?",
    author: "lorem",
  });
  return (
    <>
      <div className="bg-gray-800 w-screen h-screen text-white flex flex-col justify-center items-center">
        <div className="bg-black w-[310px] sm:w-[800px] bg-opacity-50 rounded-2xl shadow-2xl shadow-blue-800 flex flex-col items-center justify-center m-auto">
          <h1 className="sm:text-3xl text-2xl font-bold mt-5">
            Random Quot <span className="text-red-600">Generator</span>
          </h1>
          <div className="sm:py-[110px] py-[55px] px-[15px]">{quote.text}</div>
          <div>
            <div className="line"></div>
            <div className="bottom">
              <div className="author">{quote.author}</div>
              <div className="icons">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
