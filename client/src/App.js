import React from 'react';
import Main from './Main.js';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Main />
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Main />}>
          <Route path="/about" element={<About />} />
          <Route path="skills" element={<ArtistPage />} />
          <Route path="projects" element={<DirectorPage/>} />
          <Route path="links" element={<GalleryPage/>} />
          <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
       </Route>
     </Routes>
   </BrowserRouter> */}
    </div>
  );
}

export default App;
