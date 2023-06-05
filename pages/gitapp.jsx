import Image from "next/image";
import React, { useEffect } from "react";
import gitappImg from "../public/assets/projects/gitapp.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const property = () => {
  
  return (
    <>
      <Head>
        <title>Aarish | Git App</title>
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
            src={gitappImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2"data-aos="fade-up">Github User App</h2>
            <h3 data-aos="fade-up" >React Js / Bootstrap / Javascript </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8"data-aos="fade-up">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This app was built using React Js , Bootstrap, Css, Javascript.
              This is a Github users factching app using firebase authentication
              and also using github rest api ,in this app user will be
              authenticated with firebase authentication and route to search
              page where user can search for github users.
            </p>
            <a
              href="https://github.com/Aarish-khan13111/Reactjs23/tree/main/ten-firebase-auth-app"
              target="_blank"
              rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4"data-aos="fade-up">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React Js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Bootstrap
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
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
