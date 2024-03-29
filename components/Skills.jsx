import Image from "next/image";
import React, { useEffect } from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs_icon.svg";
import MongoDb from "../public/assets/skills/mongo.png";
import Mssql from "../public/assets/skills/mssql.png";
import Mysql from "../public/assets/skills/MySQL.svg";
import Gatsby from "../public/assets/skills/Gatsby.png";
import Node from "../public/assets/skills/Nodejs.svg";
import express from "../public/assets/skills/expressjs.svg";
import aws from "../public/assets/skills/aws.png";
import docker from "../public/assets/skills/docker.png";
import typescript from "../public/assets/skills/typescript.png";
import kubernetes from "../public/assets/skills/kubernetes.png";
import Linux from "../public/assets/skills/Linux.png";
import ubuntu from "../public/assets/skills/ubuntu.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="skills" className="w-full">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p
          className="text-xl tracking-widest uppercase text-[#D32222]"
          data-aos="zoom-in-up">
          Skills
        </p>
        <h2 className="py-4" data-aos="zoom-in-up">
          What I Can Do
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={typescript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Gatsby} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Gatsby</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MongoDb} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDb</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mssql} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL Server</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Node} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={express} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express.js</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mysql} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MY SQL</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={aws} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={docker} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Docker</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={kubernetes} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Kubernetes</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Linux} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Linux</h3>
              </div>
            </div>
          </div>
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            data-aos="zoom-in-up">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ubuntu} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Ubuntu</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
