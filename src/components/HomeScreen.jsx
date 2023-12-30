import React, { useState } from "react";
import { IoReloadCircleOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const HomeScreen = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  loadQuotes();
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
                - {quote.author.split(",")[0]}
              </div>
              <div className="flex gap-[40px]">
                <IoReloadCircleOutline
                  className="cursor-pointer size-8"
                  onClick={() => {
                    random();
                  }}
                />
                <FaXTwitter
                  className="cursor-pointer size-8"
                  onClick={() => {
                    twitter();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
