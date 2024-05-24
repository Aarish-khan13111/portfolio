import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import mern from "../public/assets/certificate/mern.png";
import react from "../public/assets/certificate/react.png";
import devops from "../public/assets/certificate/devops.png";
import Docker from "../public/assets/certificate/Docker.png";
import ProjectItem from "./ProjectItem";
import Aos from "aos";

const Certificate = ({ title, subTitle }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const certItem = [
    {
      title: "Docker & kubernetes",
      backgroundImg: Docker,
      projectUrl:
        "https://www.udemy.com/certificate/UC-fc6e4111-3a4e-4479-843f-5497149091e6/",
    },
    {
      title: "Devops",
      backgroundImg: devops,
      projectUrl:
        "https://www.udemy.com/certificate/UC-b6e6529c-84e6-46d1-aae6-72ebecab6988/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    },
    {
      title: "Full stack MERN",
      backgroundImg: mern,
      projectUrl:
        "https://courses.learncodeonline.in/learn/certificate/6574658-50332",
    },
    {
      title: "React js",
      backgroundImg: react,
      projectUrl:
        "https://courses.learncodeonline.in/learn/certificate/6574658-50332",
    },
  ];
  return (
    <div id="projects" className="mt-12 md:pl-12 md:ml-12">
      <div className=" mx-auto px-2 py-16 md:ml-10">
        <p
          className="text-xl tracking-widest uppercase text-[#D32222]"
          data-aos="zoom-in-up">
          {title}
        </p>
        <h2 className="py-4" data-aos="zoom-in-up">
          {subTitle}
        </h2>
        <div className="overflow-x-scroll scrollbar-hide py-5 p-2">
          <div
            className="flex w-[90rem] md:w-[130rem]  gap-8"
            data-aos="zoom-in-up">
            {certItem.map((item, index) => (
              //  console.log(item);
              <ProjectItem
                key={item.title}
                title={item.title}
                backgroundImg={item.backgroundImg}
                projectUrl={item.projectUrl}
              />
            ))}
          </div>
          {/* Arrow Icon with Pulse Effect */}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
