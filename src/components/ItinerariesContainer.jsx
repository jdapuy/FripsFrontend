import React from "react";
import ItineraryMenu from "./ItineraryMenu";

const ItinerariesContainer = () => {
  return (
    <>
      <div className="pt-8 flex flex-col items-start align-top justify-start h-screen ">
        <button className="w-full justify-center  align-middle text-center  bg-white-500 hover:bg-white-600 text-black font-semibold py-2 px-4 border border-black-700 rounded-lg flex items-center shadow shadow-lg space-x-2">
          <span className="inline-block align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </span>
          <span className="">Nuevo Itinerario</span>
        </button>
        <main className=" p-8 border w-full mt-8 flex flex-col justify-center ">
          text
        </main>
      </div>
    </>
  );
};

export default ItinerariesContainer;
