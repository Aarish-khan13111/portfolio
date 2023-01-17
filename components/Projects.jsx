import Image from "next/image";
import Link from "next/link";
import React from "react";
import ecomImg from "../public/assets/projects/ecom.jpg";
import mplayerImg from "../public/assets/projects/music player.jpg";
import moviesImg from "../public/assets/projects/movies.jpg";
import gitImg from "../public/assets/projects/gitapp.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#D32222]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
            title="Music Player App"
            backgroundImg={mplayerImg}
            projectUrl="/mplayer"
            tech="javaScript"
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
