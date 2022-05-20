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
        </div>
  )
}
