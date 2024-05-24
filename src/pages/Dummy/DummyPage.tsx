import { markdown as LineChartMD } from "./LineChart.md";
import { markdown as LineChartComponentMD } from "./LineChartComponent.md";
import Markdown from "react-markdown";
import LineChartComponent from "./LineChartComponent";
import { useState } from "react";

const DummyPage = () => {
  const [tabValue, setTabValue] = useState(0);
  return (
    <div
      style={{
        display: "grid",
        height: "100%",
        width: "100%",
        minWidth: "1200px",
        gridTemplateColumns: "1fr 600px",
      }}
    >
      <div style={{ height: "100%" }}>
        <h2>Dummy Test</h2>
        <nav style={{ display: "flex", columnGap: "0.2rem" }}>
          <button onClick={() => setTabValue(0)}>LineChart.ts</button>
          <button onClick={() => setTabValue(1)}>LineChartComponent.tsx</button>
        </nav>

        <div
          style={{
            maxHeight: "80%",
            width: "80%",
            overflow: "auto",
            margin: "1rem 0 0 0",
            padding: "2rem",
            backgroundColor: "black",
          }}
        >
          {tabValue === 0 && <Markdown>{LineChartMD}</Markdown>}
          {tabValue === 1 && <Markdown>{LineChartComponentMD}</Markdown>}
        </div>
      </div>
      <LineChartComponent />
    </div>
  );
};

export default DummyPage;
