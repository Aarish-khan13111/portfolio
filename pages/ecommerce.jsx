import Image from "next/image";
import React, { useEffect } from "react";
import ecomImg from "../public/assets/projects/ecom.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const property = () => {

 
  return (
    <>
      <Head>
        <title>Aarish | Ecommerce App</title>
        <meta
          name="description"
          content="I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/assets/logo4.png" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1 object-cover"
            fill
            src={ecomImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2" data-aos="fade-up">Ecommerce App</h2>
            <h3 data-aos="fade-up">React JS / CSS / Gatsby</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4"data-aos="fade-up">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This app was built using React JS and on Gatsby framwork is hosted
              on netlify. Users are able to view diffrent product, Content
              comeing from markdowm files using markdowm remark plugin through
              Graphql queries from Gatsby. You will be able to view product
              information. Generating pages for each product using node query
              This is a static desing with Css and Bootstrap
            </p>
            <a
              href="https://github.com/Aarish-khan13111/mensfashion-Ecom-Website"
              target="_blank"
              rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://mensfashion-mak2.netlify.app/"
              target="_blank"
              rel="noreferrer">
              <button className="px-8 py-2 mt-4">Demo</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4"data-aos="fade-up">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Bootstrap
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Gatsby
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Graphql
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default property;
