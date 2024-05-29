import { Link } from "react-router-dom";

const GlobalNavigationBar = () => {
  return (
    <nav className="global_navigation_bar">
      <ul>
        <li>
          <Link to="">Test란</Link>
        </li>
        <li>
          <Link to="front-end">프론트 관점에서의 Test</Link>
        </li>

        <li>
          <Link to="test-double">테스트를 위한 객체 - Test Double</Link>
          <ul>
            <li>
              <Link to="test-double/dummy">Dummy</Link>
            </li>
            <li>
              <Link to="test-double/stub">Stub</Link>
            </li>
            <li>
              <Link to="test-double/spy">Spy</Link>
            </li>
            <li>
              <Link to="test-double/fake">Fake</Link>
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
