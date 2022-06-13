import React from 'react';
import Main from './Main.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Links from './Links.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Main />
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Main />}>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
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
