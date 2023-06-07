import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ecomImg from "../public/assets/projects/ecom.jpg";
import spotifyImg from "../public/assets/projects/spotify.jpg";
import moviesImg from "../public/assets/projects/movies.jpg";
import gitImg from "../public/assets/projects/gitapp.jpg";
import ProjectItem from "./ProjectItem";
import Aos from "aos";

const Projects = ({title, subTitle}) => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#D32222]"data-aos="zoom-in-up">
          {title}
        </p>
        <h2 className="py-4"data-aos="zoom-in-up">{subTitle}</h2>
        <div className="grid md:grid-cols-2 gap-8"data-aos="zoom-in-up">
          <ProjectItem
            title="Ecommerce App"
            backgroundImg={ecomImg}
            projectUrl="/ecommerce"
            tech="Gatsby"
          
          />
          <ProjectItem
            title="Movies+ App"
            backgroundImg={moviesImg}
            projectUrl="/movies"
            tech="Next JS"
          />
          <ProjectItem
            title="Spotify App"
            backgroundImg={spotifyImg}
            projectUrl="/spotify"
            tech="Next JS"
          />
          <ProjectItem
            title="Github user fetching App"
            backgroundImg={gitImg}
            projectUrl="/gitapp"
            tech="React Js"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
