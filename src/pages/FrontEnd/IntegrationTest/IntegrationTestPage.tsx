import CustomMarkdown from "../../../components/CustomMarkdown";
import { markdown } from "./IntegrationTest.md";

const IntegrationTestPage = () => {
  return (
    <>
      <h1>Integration Test</h1>
      <CustomMarkdown>{markdown}</CustomMarkdown>
    </>
  );
};

export default IntegrationTestPage;
