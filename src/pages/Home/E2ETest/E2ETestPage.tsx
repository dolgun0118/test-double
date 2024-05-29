import CustomMarkdown from "../../../components/CustomMarkdown";
import { markdown } from "./E2ETest.md";

const E2ETestPage = () => {
  return (
    <>
      <h1>E2E Test</h1>
      <CustomMarkdown>{markdown}</CustomMarkdown>
    </>
  );
};

export default E2ETestPage;
