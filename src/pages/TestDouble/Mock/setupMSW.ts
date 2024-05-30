// setupMSW.ts
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  // 가짜 userData 응답 설정
  http.get("/userData", () => {
    return HttpResponse.json([
      { id: "1", name: "John Doe", email: "John@tmax.co.kr" },
      { id: "2", name: "Jane Smith", email: "Jane@tmax.co.kr" },
    ]);
  })
);

export { server };
