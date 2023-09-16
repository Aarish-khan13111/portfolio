import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ecomImg from "../public/assets/projects/ecom.jpg";
import spotifyImg from "../public/assets/projects/spotify.jpg";
import moviesImg from "../public/assets/projects/movies.jpg";
import gitImg from "../public/assets/projects/gitapp.jpg";
import socialMedia from "../public/assets/projects/socialmedia.png";
import nextauth from "../public/assets/projects/next-auth-app.png";
import webrtc from "../public/assets/projects/webrtc.png";
import ProjectItem from "./ProjectItem";
import Aos from "aos";
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

const Projects = ({ title, subTitle }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projectItems = [
    {
      title: "Social Media App",
      backgroundImg: socialMedia,
      projectUrl: "/socialMedia",
      tech: "MERN Stack",
    },
    {
      title: "Movies+ App",
      backgroundImg: moviesImg,
      projectUrl: "/movies",
      tech: "Next JS",
    },
    {
      title: "Spotify App",
      backgroundImg: spotifyImg,
      projectUrl: "/spotify",
      tech: "Next JS",
    },
    {
      title: "Ecommerce App",
      backgroundImg: ecomImg,
      projectUrl: "/ecommerce",
      tech: "Gatsby",
    },
    {
      title: "WebRTC",
      backgroundImg: webrtc,
      projectUrl: "/webrtc",
      tech: "MERN",
    },
    {
      title: "NextJs Authentication",
      backgroundImg: nextauth,
      projectUrl: "/nextauth",
      tech: "Next Js",
    },
    {
      title: "Github user fetching App",
      backgroundImg: gitImg,
      projectUrl: "/gitapp",
      tech: "React Js",
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
            className="flex w-[215rem] md:w-[250rem]  gap-8"
            data-aos="zoom-in-up">
            {projectItems.map((item, index) => (
              //  console.log(item);
              <ProjectItem
                key={item.title}
                title={item.title}
                backgroundImg={item.backgroundImg}
                projectUrl={item.projectUrl}
                tech={item.tech}
              />
            ))}
          </div>
          {/* Arrow Icon with Pulse Effect */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
