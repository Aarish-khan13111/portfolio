import Image from "next/image";
import React, { useEffect } from "react";
import socialMedia from "../public/assets/projects/socialmedia.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const property = () => {
  return (
    <>
      <Head>
        <title>Aarish | Social Media App</title>
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
            src={socialMedia}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2" data-aos="fade-up">
              Social Media App
            </h2>
            <h3 data-aos="fade-up">MongoDb / Express / React / Node </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4" data-aos="fade-up">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              I built this application with MERN-Stack (MongoDb, Express.js,
              React.js, Node.js) is hosted on GitHub. This app features user
              authentication and light and dark theme. Frontend build with
              React.js and Material Ui component and Backend build on Node.js. I
              use JWT (Json Web Token) for user authentication and bcryptjs to
              hash the password of user and redux toolkit for state management.
              In this app user can register and login email and password.
              interact with other user also add friend to their friends list and
              post images. scroll feed and like and unlike post.
            </p>
            <a
              href="https://github.com/Aarish-khan13111/social-media-app"
              target="_blank"
              rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            {/* {<a
            href="https://soptify-app-mak.vercel.app"
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>} */}
          </div>
          <div
            className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4"
            data-aos="fade-up">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Node.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Express.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> MongoDb
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Redux-tookit
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> MUI
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
