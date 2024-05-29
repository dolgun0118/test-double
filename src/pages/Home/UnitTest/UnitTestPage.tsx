import CustomMarkdown from "../../../components/CustomMarkdown";
import { markdown } from "./UnitTest.md";

const UnitTestPage = () => {
  return (
    <>
      <h1>Unit Test</h1>
      <CustomMarkdown>{markdown}</CustomMarkdown>
    </>
  );
};

export default UnitTestPage;
