/* eslint-disable @typescript-eslint/no-explicit-any */
import { markdown as LineChartMD } from "./LineChart.md";
import { markdown as LineChartComponentMD } from "./LineChartComponent.md";

import LineChartComponent from "./LineChartComponent";
import CustomMarkdown from "../../components/CustomMarkdown";
import { useState } from "react";

const DummyPage = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div
      style={{
        display: "grid",
        height: "100%",
        overflow: "auto",
        width: "100%",
        minWidth: "1200px",
        gridTemplateColumns: "1fr 600px",
      }}
    >
      <div style={{ height: "100%", overflow: "auto" }}>
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
            fontSize: "1rem",
          }}
        >
          {tabValue === 0 && <CustomMarkdown>{LineChartMD}</CustomMarkdown>}
          {tabValue === 1 && (
            <CustomMarkdown>{LineChartComponentMD}</CustomMarkdown>
          )}
        </div>
      </div>
      <div>
        <LineChartComponent />
      </div>
    </div>
  );
};

export default DummyPage;
