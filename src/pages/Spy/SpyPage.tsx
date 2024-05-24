import { markdown } from "./description.md";
import Markdown from "react-markdown";
import LineChartComponent from "./LineChartComponent";

const SpyPage = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div>
        <Markdown>{markdown}</Markdown>
      </div>
      <LineChartComponent />
    </div>
  );
};

export default SpyPage;
