import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p
            className="uppercase text-sm tracking-widest text-gray-500"
            data-aos="zoom-in-up">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4" data-aos="zoom-in-up">
            Hi, I&#39;m{" "}
            <span className="text-[#BD0A0A]" data-aos="zoom-in-up">
              {" "}
              Aarish
            </span>
          </h1>
          <h1 className="py-2" data-aos="zoom-in-up">
            DevOps Engineer
          </h1>
          <p className="py-4 sm:max-w-[70%] m-auto" data-aos="zoom-in-up">
            Cloud & DevOps Enthusiast | Aspiring DevOps Engineer | Dedicated to
            Continuous Improvement
          </p>
          <div
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
            data-aos="zoom-in-up">
            <a
              href="https://www.linkedin.com/in/aarishkhandev"
              target="_blank"
              rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Aarish-khan13111"
              target="_blank"
              rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/assets/pdf/Arish-resume.pdf">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
