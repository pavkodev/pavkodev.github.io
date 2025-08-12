//TODO: ADD  EMAIL FORM FILLOUT https://www.youtube.com/watch?v=r4RQ38EoLds
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EmailPage from "./pages/EmailPage";
import ProjectsPage from "./pages/ProjectsPage";
import { useEffect, useState } from "react";
import BackgroundTiles from "./components/BackgroundTiles";

// tailwindcss jit: keep this classes for JIT to be able to capture them
// border-[#ef652a] border-[#2965f1] border-[#f7df1e] border-[#38bdf8] border-[#3178c6] border-[#61dafb]
// bg-[#ef652a]/10 bg-[#2965f1]/10 bg-[#f7df1e]/10 bg-[#38bdf8]/10 bg-[#3178c6]/10 bg-[#61dafb]/10
// hover:bg-[#ef652a]/30 hover:bg-[#2965f1]/30 hover:bg-[#f7df1e]/30 hover:bg-[#38bdf8]/30 hover:bg-[#3178c6]/30 hover:bg-[#61dafb]/30

function App() {
  const tileLength = 50;
  const [userScreenWidth, setUserScreenWidth] = useState(window.innerWidth);
  const [userScreenHeight, setUserScreenHeight] = useState(window.innerHeight);
  const [tileCols, setTileCols] = useState(
    Math.ceil(userScreenWidth / tileLength),
  );
  const [tileRows, setTileRows] = useState(
    Math.ceil(userScreenHeight / tileLength),
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setUserScreenWidth(newWidth);
      setUserScreenHeight(newHeight);
      setTileCols(Math.ceil(userScreenWidth / tileLength));
      setTileRows(Math.ceil(userScreenHeight / tileLength));
      console.log(
        "Width: " + userScreenWidth + ", Height: " + userScreenHeight,
      );
      console.log("Tile columns: " + tileCols + "," + " rows: " + tileRows);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <BackgroundTiles rows={tileRows} columns={tileCols} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/email-form" element={<EmailPage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
