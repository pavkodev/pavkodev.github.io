import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex bg-slate-900">
        <p className="m-auto my-4 text-white">Hello World!</p>
      </div>
    </>
  );
}

export default App;
