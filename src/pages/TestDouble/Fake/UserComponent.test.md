```typescript
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { UserList } from "./User";
import UserComponent from "./UserComponent";

test("UserComponent", () => {
  const fakeUserList: UserList = {
    data: [{ id: "1", name: "John Doe", email: "John@tmax.co.kr" }],
    getUserById: jest.fn().mockImplementation((id: string) => {
      return id === "1" ? { id: "1", name: "John Doe" } : null;
    }),
    fetch: async () => {},
  };
  render(<UserComponent userId="1" userList={fakeUserList} />);

  expect(screen.getByTestId("user-name")).toHaveTextContent("John Doe");

  // getUserById 메서드가 호출되었는지 확인
  expect(fakeUserList.getUserById).toHaveBeenCalledWith("1");
});
```