import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home/HomePage.tsx";
import { DummyPage, MockPage, SpyPage, StubPage, FakePage } from "./pages";
import FrontEndPage from "./pages/FrontEnd/FrontEndPage.tsx";

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
        element: <HomePage />,
      },
      {
        path: "front-end",
        element: <FrontEndPage />,
      },
      {
        path: "test-double",
        children: [
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
