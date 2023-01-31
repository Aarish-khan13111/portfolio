import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const resume = () => {
  return (
    <>
      <Head>
        <title>Aarish | Resume</title>
        <meta
          name="description"
          content="I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/logo4.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center dark:text-black">
          <h2 className="text-center ">Aarish khan</h2>
          <div className="flex">
            <a href={`tel:${7692810574}`} target="_blank" rel="noreferrer">
              <AiFillPhone size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/aarish-khan-6a021b245/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Aarish-khan13111"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="py-6 text-xl font-bold underline">
          <span>CAREER SUMMARY</span>
        </div>
        <p>
          To work in a responsible position where my skills can be utilized for
          the progress of the organization and to update myself with the latest
          technology.
        </p>

        {/* Skills */}
        <h5 className="underline text-[20px] py-6">Skills</h5>
        <div>
          <p className="md:line-clamp-3">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">
              | Web Developer | HTML | CSS| Javascript | React | Next JS| Gatsby
              | SQL | NoSQL | Redux | Tailwind | Bootstrap | Firebase | RESTAPI
            </span>
          </p>
          <p>
            <span className="font-bold">Analytical Tools</span>
            <span className="px-2">|</span>Power Bi
            <span className="px-2">|</span>Tableau
            <span className="px-2">|</span>Power Query
            <span className="px-2">|</span>Advanced Excel
          </p>
        </div>

        <h5 className="py-6 underline text-[20px]">Work Experience</h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">BMW Solution</span>
            <span className="px-2">|</span>Bhopal,M.P
          </p>
          <p className="py-1 italic">Traniee Engineer (Nov 2020 - Dec 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              conducting desktop and Plant Activities, Maintaining of Plant and
              machinery, keep track of inventory using Excel maintaining log
              Books performing practical and administrative duties assigned by
              the General manager, offering suggestion and writing up reports.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Hargobind Electrical</span>
            <span className="px-2">|</span>Bhopal,M.P
          </p>
          <p className="py-1 italic">Internship (03 July 2019-18 July 2019) </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              15 days Internship at Hargobind Electricals as a Mechanical Intern
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="underline text-[20px] py-6">Education</h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              {" "}
              Bachelor of Mechanical Engineering
            </span>
            <span className="px-2">|</span>Bhopal, M.P
          </p>
          <p className="py-1 italic">
            Sagar Institute Of Resarch & Tecnology (2016-2020)
          </p>
          <p className="italic">
            <span className="font-bold"> Schooling</span>
            <span className="px-2">|</span>Bhopal, M.P
          </p>
          <span>
            Completed schooling in 2016 from MPBSE Board with 59% and 55% in
            10th & 12th respectively.
          </span>
        </div>
        {/* Personal Profile */}
        <h5 className="underline text-[20px] py-6">Personal Profile</h5>
        <div>
          <p>
            <span className="font-bold">Name</span>
            <span className="px-12"></span>Arish khan
          </p>
          <p>
            <span className="font-bold">Father's Name</span>
            <span className="px-3"></span>Anees khan
          </p>
          <p>
            <span className="font-bold">Mother's Name</span>
            <span className="px-2"></span>Yasmeen khan
          </p>
          <p>
            <span className="font-bold">Date Of Birth</span>
            <span className="px-4"></span>16-07-1997
          </p>
          <p>
            <span className="font-bold">Nationality</span>
            <span className="px-6"></span>Indian
          </p>
          <p>
            <span className="font-bold">Adress</span>
            <span className="px-10"></span>A-689 New Ashoks Garden, Bhopal, MP,
            India
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
