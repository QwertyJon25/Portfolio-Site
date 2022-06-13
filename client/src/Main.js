import React from 'react'
import { Outlet, Link } from "react-router-dom";
// import About from './About.js';
// import Skills from './Skills.js';
// import Projects from './Projects.js';
// import Links from './Links.js';

export default function Main() {
  return (
        <div className="Main">
          {/* <img src="https://i.imgur.com/s3X9BIJ.jpg" alt="Jon Courtier" width="300" height="350"/> */}
            {/* <About />
            <Skills />
            <Projects />
            <Links /> */}
            <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/about">About</Link> |{" "}
        <Link to="/skills">Skills</Link> |{" "}
        <Link to="/work-history">Work History</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/links">Links</Link> |{" "}
      </nav>
      <Outlet />
        </div>
  )
}
