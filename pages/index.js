import React from "react";

import Link from "next/link";
import Head from "../components/head";
import Intro from "../components/Intro/Intro";
import Aboutme from "../components/Aboutme/Aboutme";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const Home = () => (
  <div>
    <Head title="Hunter Brown" />
    <Intro />
    <Aboutme />
    <Projects />
    <Contact />
  </div>
);

export default Home;
