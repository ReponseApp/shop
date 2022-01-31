import type { FC } from "react";
import Head from "next/head";

import { CONFIG } from "@libs/config";

import { Categories } from "@components/CategoriesSection";

export const MainPage = function(){
return (
  <div className="">
      <div className="w-screen bg-gray-800 h-3"></div>
        <div className="h-48 bg-gray-500 rounded-b-2xl">
          <div className="flex bg-homegradiant bg-cover opacity-80 shadow-inner shadow- h-48 w-screen justify-center rounded-b-2xl">
            <div className="flex items-center md:w-9/12 w-11/12">
              <div className="w-full h-10">
                <p className="md:text-2xl text-lg font-semibold">
                  New Hoodies are now available!
                </p>
                <p className="md:text-md font-normal text-sm">
                  You can check it out right there..
                </p>
              </div>
            </div>
          </div>
        </div>
        <Categories />
        <div className="flex my-5 justify-center">
          <div className="">
            <div className="px-10 md:grid md:grid-cols-2 justify-center">
              {CONFIG.HOT.map((r) => (
                <div className="flex justify-center">
                    <div className="md:w-6/12 mb-5 p-5 border-2 border-gray-900 rounded-2xl">
                      <img src={r.img} alt="" />
                      <p className="text-xl font-semibold">{r.title}</p>
                      <p className="text-gray-700 mb-4">{r.description}</p>
                      <a className="p-2 px-5 rounded-xl bg-blue-400" href={"/products/" + r.link}>View more..</a>
                    </div>
                </div>

                    ))}
            </div>
          </div>
        </div>
  </div>
);
};