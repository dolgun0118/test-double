import CustomMarkdown from "../../components/CustomMarkdown";
import { markdown } from "./TestDouble.md";

const TestDoublePage = () => {
  return (
    <>
      <h1>테스트를 위한 객체 - Test Double</h1>
      <CustomMarkdown>{markdown}</CustomMarkdown>
    </>
  );
};

export default TestDoublePage;
