```typescript
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserList } from "./User";
import UserComponent from "./UserComponent";

test("UserComponent renders user name when user exists", () => {
  const stubUserList: UserList = {
    data: [],
    getUserById: jest.fn((id: string) => {
      return id === "1"
        ? { id: "1", name: "John Doe", email: "John@tmax.co.kr" }
        : null;
    }),
  };

  render(
    <UserComponent userId="1" userList={stubUserList} onClick={() => null} />
  );

  // 버튼이 활성화되고 올바른 사용자 이름이 표시되는지 확인
  expect(screen.getByRole("button")).not.toBeDisabled();
  expect(screen.getByRole("button")).toHaveTextContent("John Doe");

  // getUserById 메서드가 호출되었는지 확인
  expect(stubUserList.getUserById).toHaveBeenCalledWith("1");
});

test("UserComponent shows 'Not Found' when user does not exist", () => {
  const stubUserList: UserList = {
    data: [],
    getUserById: jest.fn((id: string) => {
      return id === "1"
        ? { id: "1", name: "John Doe", email: "John@tmax.co.kr" }
        : null;
    }),
  };

  render(
    <UserComponent userId="2" userList={stubUserList} onClick={() => null} />
  );

  // 버튼이 비활성화되고 "Not Found" 텍스트가 표시되는지 확인
  expect(screen.getByRole("button")).toBeDisabled();
  expect(screen.getByRole("button")).toHaveTextContent("Not Found");

  // getUserById 메서드가 호출되었는지 확인
  expect(stubUserList.getUserById).toHaveBeenCalledWith("2");
});
```
