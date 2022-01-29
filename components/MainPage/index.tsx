import type { FC } from "react";
import Head from "next/head";

import { CONFIG } from "@libs/config";

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
        <div className="flex justify-center mt-5">
          <div className="flex md:w-9/12 w-11/12">
            <div className="flex justify-between">
              <a href="" className="flex font-semibold mr-2 text-red-500">
                <svg className="w-6 h-6 flex " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
                New!
              </a>
              <a href="" className="mr-2">
                Collection
              </a>
              <a href="" className="mr-2">
                All Products
              </a>
            </div>
          </div>
        </div>
        <div className="flex my-5 justify-center">
          <div className="md:flex px-10 md:w-8/12 justify-between">
            {CONFIG.HOT.map((r) => (
                  <div className="md:w-5/12 mb-5 p-5 border-2 border-gray-900 rounded-3xl">
                    <img src={r.img} alt="" />
                    <p className="text-xl font-semibold">{r.title}</p>
                    <p className="text-gray-700 mb-4">{r.description}</p>
                    <a className="p-2 px-5 rounded-xl bg-blue-400" href={"/products/" + r.link}>View more..</a>
                  </div>
                  ))}
          </div>
        </div>
  </div>
);
};