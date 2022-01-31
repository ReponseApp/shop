import type { FC } from "react";
import Head from "next/head";


import { CONFIG } from "@libs/config";

import { Header } from "@components/Header";
import { Categories } from "@components/CategoriesSection";
import { Navbar } from "@components/Navbar";

const index = function(){
  return (
    <div className="">
      <Header title="Products."/>
      <Navbar />
      <div className="h-3 bg-gray-800 w-screen"></div>
      <Categories />
      <div className="flex my-5 justify-center">
          <div className="">
            <div className="px-10 md:grid md:grid-cols-2 justify-center">
              {CONFIG.ALL.map((r) => (
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


export default index