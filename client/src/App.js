import React from 'react';
import Main from './Main.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Education from './Education.js';
import Links from './Links.js';
import Contact from './Contact.js';
import WorkHistory from './WorkHistory.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {



  return (
    <div className="App">
      {/* <Main /> */}
      {/* <Main /> */}
      <img src="https://i.imgur.com/s3X9BIJ.jpg" alt="Jon Courtier" width="300" height="350"/>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Main />}>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
       </Route>
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
