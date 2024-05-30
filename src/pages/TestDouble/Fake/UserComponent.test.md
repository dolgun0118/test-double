```typescript
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { User, UserList } from "./User";
import UserComponent from "./UserComponent";

class FakeUserList implements UserList {
  data: User[];

  constructor() {
    this.data = [];
  }

  getUserById = jest.fn((id: string) => {
    return id === "1"
      ? { id: "1", name: "John Doe", email: "John@tmax.co.kr" }
      : null;
  });

  fetch = jest.fn(async () => {
    this.data = [
      { id: "1", name: "John Doe", email: "John@tmax.co.kr" },
      { id: "2", name: "Jane Smith", email: "Jane@tmax.co.kr" },
    ];
    return Promise.resolve();
  });
}

test("UserComponent", () => {
  const fakeUserList = new FakeUserList();

  render(<UserComponent userId="1" userList={fakeUserList} />);

  expect(screen.getByTestId("user-name")).toHaveTextContent("John Doe");
  expect(fakeUserList.getUserById).toHaveBeenCalledWith("1");
  fireEvent.click(screen.getByRole("button"));
  expect(fakeUserList.data.length).toBe(2);
});
```
