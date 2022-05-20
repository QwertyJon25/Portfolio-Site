import React from 'react'
// import { Outlet, Link } from "react-router-dom";
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Links from './Links.js';

export default function Main() {
  return (
        <div className="Main">
            <h2>Main</h2>
            <About />
            <Skills />
            <Projects />
            <Links />
            {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/welcome">Home</Link> |{" "}
        <Link to="/artists">Artists</Link> |{" "}
        <Link to="/directors">Directors</Link> |{" "}
        <Link to="/galleries">Galleries</Link> |{" "}
        <Link to="/pieces">Pieces</Link> |{" "}
        <Link to="/profile">Your Profile</Link>
      </nav>
      <Outlet /> */}
        </div>
  )
}
