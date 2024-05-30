import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home/HomePage.tsx";
import {
  DummyPage,
  MockPage,
  SpyPage,
  StubPage,
  FakePage,
} from "./pages/TestDouble/index.ts";
import FrontEndPage from "./pages/FrontEnd/FrontEndPage.tsx";
import HomeUnitTestPage from "./pages/Home/UnitTest/UnitTestPage.tsx";
import HomeIntegrationTestPage from "./pages/Home/IntegrationTest/IntegrationTestPage.tsx";
import HomeE2ETestPage from "./pages/Home/E2ETest/E2ETestPage.tsx";
import FrontUnitTestPage from "./pages/FrontEnd/UnitTest/UnitTestPage.tsx";
import FrontIntegrationTestPage from "./pages/FrontEnd/IntegrationTest/IntegrationTestPage.tsx";
import FrontE2ETestPage from "./pages/FrontEnd/E2ETest/E2ETestPage.tsx";
import TestDoublePage from "./pages/TestDouble/TestDoublePage.tsx";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser.ts");
  return worker.start();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "unit-test",
            element: <HomeUnitTestPage />,
          },
          {
            path: "integration-test",
            element: <HomeIntegrationTestPage />,
          },
          {
            path: "e2e-test",
            element: <HomeE2ETestPage />,
          },
        ],
      },
      {
        path: "front-end",
        children: [
          {
            index: true,
            element: <FrontEndPage />,
          },
          {
            path: "unit-test",
            element: <FrontUnitTestPage />,
          },
          {
            path: "integration-test",
            element: <FrontIntegrationTestPage />,
          },
          {
            path: "e2e-test",
            element: <FrontE2ETestPage />,
          },
        ],
      },
      {
        path: "test-double",
        children: [
          {
            index: true,
            element: <TestDoublePage />,
          },
          {
            path: "dummy",
            element: <DummyPage />,
          },
          {
            path: "stub",
            element: <StubPage />,
          },
          {
            path: "spy",
            element: <SpyPage />,
          },
          {
            path: "fake",
            element: <FakePage />,
          },
          {
            path: "mock",
            element: <MockPage />,
          },
        ],
      },
    ],
  },
]);

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
});
