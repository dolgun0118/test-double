/* eslint-disable @typescript-eslint/no-explicit-any */
import { markdown as UserMD } from "./User.md";
import { markdown as UserComponentMD } from "./UserComponent.md";
import { markdown as UserComponentTestMD } from "./UserComponent.test.md";
import { useState } from "react";
import CustomMarkdown from "../../../components/CustomMarkdown";

const DummyPage = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Dummy</h2>
      <div
        style={{
          display: "grid",
          height: "85%",
          overflow: "auto",
          width: "100%",
          minWidth: "1200px",
          gap: "2rem",
          gridTemplateColumns: "1fr 600px",
        }}
      >
        <div
          style={{
            height: "calc(100% - 55px)",
            marginTop: 55,
            width: "100%",
            overflow: "auto",
          }}
        >
          <CustomMarkdown>{UserComponentTestMD}</CustomMarkdown>
        </div>
        <div style={{ height: "100%", overflow: "auto" }}>
          <nav style={{ display: "flex", columnGap: "0.2rem" }}>
            <button onClick={() => setTabValue(0)}>User.ts</button>
            <button onClick={() => setTabValue(1)}>UserComponent.tsx</button>
          </nav>
          <div
            style={{
              overflow: "auto",
              margin: "1rem 0 0 0",
              fontSize: "1rem",
            }}
          >
            {tabValue === 0 && <CustomMarkdown>{UserMD}</CustomMarkdown>}
            {tabValue === 1 && (
              <CustomMarkdown>{UserComponentMD}</CustomMarkdown>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyPage;
