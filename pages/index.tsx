import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "@components/Navbar";
import { MainPage } from "@components/MainPage";
import { Header } from "@components/Header";
const Home: NextPage = () => {
  return (
    <div >
      <Navbar />
      <MainPage />
      <Header title="Shop"/>
    </div>
  );
};

export default Home;
