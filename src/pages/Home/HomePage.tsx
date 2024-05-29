import CustomMarkdown from "../../components/CustomMarkdown";
import { markdown } from "./Home.md";

const HomePage = () => {
  return (
    <>
      <h1>Test란</h1>
      <CustomMarkdown>{markdown}</CustomMarkdown>
      <a
        target="_blank"
        href="https://d2908q01vomqb2.cloudfront.net/1b6453892473a467d07372d45eb05abc2031647a/2021/09/20/Picture1-2.png"
      >
        <img src="https://d2908q01vomqb2.cloudfront.net/1b6453892473a467d07372d45eb05abc2031647a/2021/09/20/Picture1-2.png" />
      </a>
    </>
  );
};

export default HomePage;
