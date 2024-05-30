import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { UserList } from "./User";
import UserComponent from "./UserComponent";

test("UserComponent", () => {
  const dummyUserList: UserList = {
    data: [],
    getUserById: () => null,
    fetch: async () => {},
  };

  render(<UserComponent userId="1" userList={dummyUserList} />);

  expect(screen.getByTestId("user-name")).toHaveTextContent("Not Found");
});
