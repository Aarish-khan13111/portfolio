import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import mern from "../public/assets/certificate/mern.png";
import react from "../public/assets/certificate/react.png";
import devops from "../public/assets/certificate/devops.png";
import ProjectItem from "./ProjectItem";
import Aos from "aos";

const Projects = ({ title, subTitle }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p
          className="text-xl tracking-widest uppercase text-[#D32222]"
          data-aos="zoom-in-up">
          {title}
        </p>
        <h2 className="py-4" data-aos="zoom-in-up">
          {subTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8" data-aos="zoom-in-up">
          <ProjectItem
            title="Full stack MERN"
            backgroundImg={mern}
            projectUrl="https://courses.learncodeonline.in/learn/certificate/6574658-50332"
          />
          <ProjectItem
            title="React js"
            backgroundImg={react}
            projectUrl="https://courses.learncodeonline.in/learn/certificate/6574658-50332"
          />
          <ProjectItem
            title="Devops"
            backgroundImg={devops}
            projectUrl="https://www.udemy.com/certificate/UC-b6e6529c-84e6-46d1-aae6-72ebecab6988/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
