import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Catalog from "./pages/Catalog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Catalog />
    </>
  );
}

export default App;
