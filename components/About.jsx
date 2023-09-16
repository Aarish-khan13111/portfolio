import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="about" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-8">
        <div className="col-span-2 text-justify">
          <p
            className="uppercase text-xl tracking-widest text-[#D32222]"
            data-aos="zoom-in-up">
            About
          </p>
          <h2 className="py-4" data-aos="zoom-in-up">
            Who I Am
          </h2>
          <div>
            <div>
              <p className="py-2" data-aos="zoom-in-up">
                {/* I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React,node I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job. */}
                I am a versatile and passionate MERN Stack Developer with a deep
                understanding of AWS, Linux, Docker, and Kubernetes. With a keen
                eye for detail and a commitment to delivering high-quality
                solutions, I have dedicated myself to the world of web
                development and cloud computing.
              </p>

              <p
                className="uppercase mt-1 text-xl tracking-widest text-[#D32222]"
                data-aos="zoom-in-up">
                **My Journey**
              </p>
              <p className="py-2" data-aos="zoom-in-up">
                I started web developement in 2022 managing multiple e-commerce
                websites on CMS platforms such as WordPress, BigCommerce, and
                Shopify. In my spare time I love to learn new technologies and
                experiment with them.
              </p>
              <p className="py-2" data-aos="zoom-in-up">
                My journey in the world of technology began with a fascination
                for creating digital experiences that are not only visually
                appealing but also highly functional. As a MERN Stack Developer,
                I have honed my skills in crafting robust, scalable, and
                interactive web applications. From designing elegant user
                interfaces to building powerful back-end systems, I thrive on
                the challenges that web development presents.
              </p>
              <p
                className="uppercase text-xl mt-1 tracking-widest text-[#D32222]"
                data-aos="zoom-in-up">
                **Cloud Expertise**
              </p>
              <p className="py-2" data-aos="zoom-in-up">
                In addition to my web development skills, I possess a
                understanding of cloud technologies, particularly AWS. I have
                leveraged the power of the cloud to optimize application
                performance, enhance security, and streamline operations.
                Whether it's deploying applications, managing databases, or
                setting up scalable infrastructure,
              </p>
              <p
                className="uppercase text-xl mt-1 tracking-widest text-[#D32222]"
                data-aos="zoom-in-up">
                **Linux, Docker, and Kubernetes**
              </p>
              <p className="py-2" data-aos="zoom-in-up">
                I am not just limited to web development and cloud computing; my
                expertise extends to Linux, Docker, and Kubernetes. I have a
                solid foundation in Linux systems administration, ensuring the
                smooth operation of servers and environments. Docker and
                Kubernetes, on the other hand, have empowered me to orchestrate
                containers and manage containerized applications efficiently,
                contributing to seamless deployments and scalability.
              </p>
              <p
                className="uppercase text-xl mt-1 tracking-widest text-[#D32222]"
                data-aos="zoom-in-up">
                **Why Choose Me?**
              </p>
              <p className="py-2" data-aos="zoom-in-up">
                My dedication to staying at the forefront of technology trends,
                coupled with my commitment to continuous learning, enables me to
                provide innovative solutions that cater to the unique needs of
                each project. I am a problem solver at heart, always seeking the
                most effective and efficient solutions to challenges that come
                my way. Collaboration, adaptability, and a results-oriented
                mindset are at the core of my work philosophy. I believe that
                technology is a powerful tool that can drive positive change,
                and I am excited to be a part of this ever-evolving industry. If
                you are looking for a MERN Stack Developer with a strong
                foundation in AWS, Linux, Docker, and Kubernetes to bring your
                ideas to life and propel your projects to success, I would be
                honored to work with you. Let's embark on this journey together
                and turn your visions into reality.
              </p>
            </div>
          </div>

          <Link href="/#projects">
            <p
              className="py-2 text-gray-500 underline cursor-pointer"
              data-aos="zoom-in-up">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div
          className="h-auto m-auto col-span-2 shadow-lg shadow-gray-500 rounded-lg flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
          data-aos="zoom-in-up">
          <Image
            src="/assets/about.jpg"
            height="100"
            width="650"
            className="rounded-xl object-fill"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
