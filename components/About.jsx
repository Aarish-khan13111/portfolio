import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#D32222]"data-aos="zoom-in-up">
            About
          </p>
          <h2 className="py-4"data-aos="zoom-in-up">Who I Am</h2>

          <p className="py-2"data-aos="zoom-in-up">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React,node I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2"data-aos="zoom-in-up">
            I started web developement in 2021 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. In my spare time I love to learn new technologies and
            experiment with them.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-500 underline cursor-pointer"data-aos="zoom-in-up">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="h-auto m-auto col-span-2 shadow-lg shadow-gray-500 rounded-lg flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"data-aos="zoom-in-up">
          <Image
            src="/assets/about.jpg"
            height="100"
            width="450"
            className="rounded-xl object-fill"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
