import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Certificat from "../components/Certificate";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aarish | DevOps Enthusiast</title>
        <meta
          name="description"
          content="Cloud & DevOps Enthusiast | Aspiring DevOps Engineer | Dedicated to Continuous Improvement"
        />
        <link rel="icon" href="/assets/logo4.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects title="Projects" subTitle="What I've Built" />
      <Certificat title="Certification" subTitle="Certificate & Achivements" />
      <Contact />
    </>
  );
}
