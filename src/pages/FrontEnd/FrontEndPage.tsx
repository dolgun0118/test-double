import CustomMarkdown from "../../components/CustomMarkdown";
import { markdown } from "./FrontEnd.md";

const FrontEndPage = () => {
  return (
    <>
      <h1>프론트엔드 관점에서의 Test 대상</h1>
      <CustomMarkdown>{markdown}</CustomMarkdown>
    </>
  );
};

export default FrontEndPage;
