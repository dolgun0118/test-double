```typescript
// UserComponent.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserList } from "./User";
import UserComponent from "./UserComponent";

test("UserComponent renders user name when user exists", () => {
  const spyGetUserById = jest.fn((id: string) => {
    return id === "1"
      ? { id: "1", name: "John Doe", email: "John@tmax.co.kr" }
      : null;
  });

  const spyUserList: UserList = {
    data: [],
    getUserById: spyGetUserById,
    fetch: jest.fn(async () => {}),
  };

  render(<UserComponent userId="1" userList={spyUserList} />);

  expect(screen.getByTestId("user-name")).toHaveTextContent("John Doe");

  // getUserById 메서드가 호출되었는지 확인
  expect(spyGetUserById).toHaveBeenCalledWith("1");
});

test("UserComponent shows 'Not Found' when user does not exist", () => {
  const spyGetUserById = jest.fn((id: string) => {
    return id === "1"
      ? { id: "1", name: "John Doe", email: "John@tmax.co.kr" }
      : null;
  });

  const spyUserList: UserList = {
    data: [],
    getUserById: spyGetUserById,
    fetch: async () => {},
  };

  render(<UserComponent userId="2" userList={spyUserList} />);

  // 버튼이 비활성화되고 "Not Found" 텍스트가 표시되는지 확인

  expect(screen.getByTestId("user-name")).toHaveTextContent("Not Found");

  // getUserById 메서드가 호출되었는지 확인
  expect(spyGetUserById).toHaveBeenCalledWith("2");
});
```
