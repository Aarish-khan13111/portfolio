import Image from "next/image";
import React, { useEffect } from "react";
import moviesImg from "../public/assets/projects/movies.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const netflix = () => {
 
  return (
    <>
      <Head>
        <title>Aarish | Movies App</title>
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
            src={moviesImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2"data-aos="fade-up">Movies pluse App</h2>
            <h3 data-aos="fade-up">React JS / Tailwind / Firebase</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4"data-aos="fade-up">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              I built this application in React JS and on Next Js framwork is
              hosted on GitHub pages. This app features user authentication with
              firebase as well as the firestore cloud storage database. This
              application is pulling movie data from an the IMDB movie API and
              displaying different categories. It features horizontal sliding
              and a featured selection. The useContext hook is also being
              implemented for app-wide state management.
            </p>
            <a
              href="https://github.com/Aarish-khan13111/Ott-Platform"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://ott-platform-five.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
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
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> IMDB API
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

export default netflix;
