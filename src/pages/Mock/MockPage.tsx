import { markdown } from "./description.md";
import Markdown from "react-markdown";
import LineChartComponent from "./LineChartComponent";

const MockPage = () => {
  return (
    <div>
      <Markdown>{markdown}</Markdown>
      <LineChartComponent />
    </div>
  );
};

export default MockPage;
