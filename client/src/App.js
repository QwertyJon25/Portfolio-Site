import React from 'react';
import Main from './Main.js';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main />
      {/* <WelcomePage/>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Main />}>
          <Route path="/welcome" element={<WelcomeHeader />} />
          <Route path="artists" element={<ArtistPage />} />
          <Route path="directors" element={<DirectorPage/>} />
          <Route path="galleries" element={<GalleryPage/>} />
          <Route path="pieces" element={<PiecePage/>} />
          <Route path="your-pieces" element={<ArtistProfile/>} />
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
