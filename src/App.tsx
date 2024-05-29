import { Outlet } from "react-router-dom";
import "./App.css";
import GlobalNavigationBar from "./components/GlobalNavigationBar";

function App() {
  return (
    <>
      <GlobalNavigationBar />
      <div
        style={{
          padding: "1rem",
          maxHeight: "100dvh",
          overflow: "auto",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
