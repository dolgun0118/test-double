import { Link } from "react-router-dom";

const GlobalNavigationBar = () => {
  return (
    <nav className="global_navigation_bar">
      <ul>
        <li>
          <Link to="home">Test란</Link>
          <ul>
            <li>
              <Link to="home/unit-test">Unit Test</Link>
            </li>
            <li>
              <Link to="home/integration-test">Integration Test</Link>
            </li>
            <li>
              <Link to="home/e2e-test">E2E Test</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="front-end">프론트 관점에서의 Test 대상</Link>
          <ul>
            <li>
              <Link to="front-end/unit-test">Unit Test</Link>
            </li>
            <li>
              <Link to="front-end/integration-test">Integration Test</Link>
            </li>
            <li>
              <Link to="front-end/e2e-test">E2E Test</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="test-double">테스트를 위한 객체 - Test Double</Link>
          <ul>
            <li>
              <Link to="test-double/dummy">Dummy</Link>
            </li>
            <li>
              <Link to="test-double/fake">Fake</Link>
            </li>
            <li>
              <Link to="test-double/stub">Stub</Link>
            </li>
            <li>
              <Link to="test-double/spy">Spy</Link>
            </li>
            <li>
              <Link to="test-double/mock">Mock</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalNavigationBar;
