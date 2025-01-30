import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Button as ButtonCss } from "./components/ButtonCss/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
        <Button variant={"secondary"}>test</Button>
        <Button variant={"primary"}>test</Button>
        <Button variant={"danger"}>test</Button>
      </div>

      <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
        <ButtonCss variant={"secondary"}>test</ButtonCss>
        <ButtonCss variant={"primary"}>test</ButtonCss>
        <ButtonCss variant={"danger"}>test</ButtonCss>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
