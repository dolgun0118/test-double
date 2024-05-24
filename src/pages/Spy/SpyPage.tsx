import { markdown } from "./description.md";
import Markdown from "react-markdown";
import LineChartComponent from "./LineChartComponent";

const SpyPage = () => {
  return (
    <div
      style={{
        display: "grid",
        height: "100%",
        gridTemplateColumns: "1fr 600px",
      }}
    >
      <div style={{ height: "100%", overflow: "auto" }}>
        <Markdown>{markdown}</Markdown>
      </div>
      <LineChartComponent />
    </div>
  );
};

export default SpyPage;
