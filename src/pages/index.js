import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

function IndexPage() {
  return (
    <main className="text-white">
      <Header />


      <div className="w-full xl:max-w-[1250px] mx-auto px-4">
      <Hero />
      <Trending />
      </div>
      <div className="h-[10rem]"></div>
      <Footer/>
  


    </main>
  );
}

export default IndexPage;
