import CustomMarkdown from "../../components/CustomMarkdown";
import { markdown } from "./FrontEnd.md";

const FrontEndPage = () => {
  return (
    <>
      <h1>프론트엔드 관점에서의 Test 대상</h1>
      <div
        style={{
          display: "grid",
          height: "80%",
          gridTemplateColumns: "1fr 800px",
        }}
      >
        <div style={{ height: "100%", overflow: "auto" }}>
          <CustomMarkdown>{markdown}</CustomMarkdown>
        </div>
      </div>
    </>
  );
};

export default FrontEndPage;
