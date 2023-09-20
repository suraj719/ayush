import React from "react";
import Showcasing from "./Showcasing";
import Events from "./Events";


export default function Startupmain() {
  const btncts = [
    {
      name: "Showcasing",
      current: true,
    },
    {
      name: "Testimonials",
      current: false,
    },
    {
      name: "pitchings",
      current: false,
    },
    {
      name: "news articles",
      current: false,
    },
  ];
  return (
    <>
      <div className="bg-gray-100 flex flex-wrap justify-center gap-12 p-5 pt-16 min-h-[100vh]">
        {/* intro,profile,btn content */}
        <div className="w-[65%]">
          {/* <p className="font-block text-2xl bg-white p-2 rounded-lg">Hello loremipsumloremipsumloremipsum</p> */}
          <div className="flex flex-wrap gap-12">
            {/* profile*/}

            <div className="w-[25%] shadow-lg border-2 border-gray-300 bg-white rounded-lg">
              <div className="border-b-2 border-gray-300 rounded-xl p-5  flex flex-col justify-center items-center">
                <img
                  src="startup-logo.png"
                  alt="avatar"
                  className="border-2 border-green-500 shadow-lg rounded-full w-[5rem] h-[5rem]"
                />
                <p className="font-bold text-xl">Patanjali Ayurvedic</p>
                <p className="text-md">Haridwar, Uttarakhand</p>
                <p className="text-md">Category: Ayurvedic</p>
              </div>
              <div className="h-[300px] text-center p-5 rounded-lg">
                <p>Profile</p>
              </div>
            </div>

            {/* btn content */}

            <div className="w-[65%] bg-white p-2  rounded-lg shadow-lg border-2 border-gray-300">
              <div className="flex flex-wrap gap-5 justify-center border-b-2 pb-2 ">
                {btncts.map((btn, index) => {
                  return (
                    <div key={index}>
                      <button className={btn.current ? "p-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-400":"p-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-500"}>
                        {btn.name}
                      </button>
                    </div>
                  );
                })}
              </div>
                <Showcasing />
            </div>
          </div>
        </div>
        {/* events */}
        <div className="w-[20%]">
          <div className="border-2 border-gray-300 shadow-lg bg-white p-4 rounded-lg min-h-[350px]">
            <p className=" text-center font-bold text-2xl underline">Events</p>
            <Events />
          </div>
        </div>
      </div>
    </>
  );
}
