import type { FC } from "react";
import Head from "next/head";

import graylogo from "@assets/graylogo.png"; 

export const Navbar = function(){
    return (
        <div className="flex w-screen md:p-5 p-2 bg-gray-300 justify-center">
            <div className="flex md:w-9/12 w-full justify-between">
                <div className="flex items-center">
                    <a className="flex items-center" href="/">
                    <img src="/assets/bluelogo.png/" className="w-14" alt="" />
                    <p>| Shop</p>
                    </a>

                </div>
                <div className="flex items-center">
                    <a href="" className="flex mr-2 text-red-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
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
    );
};

/*



*/