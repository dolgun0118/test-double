import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserList } from "./User";
import UserComponent from "./UserComponent";

test("UserComponent renders user name when user exists", () => {
  const stubUserList: UserList = {
    data: [],
    getUserById: (id: string) => {
      return id === "1"
        ? { id: "1", name: "John Doe", email: "John@tmax.co.kr" }
        : null;
    },
    fetch: async () => {},
  };

  render(<UserComponent userId="1" userList={stubUserList} />);

  expect(screen.getByTestId("user-name")).toHaveTextContent("John Doe");
});

test("UserComponent shows 'Not Found' when user does not exist", () => {
  const stubUserList: UserList = {
    data: [],
    getUserById: (id: string) => {
      return id === "1"
        ? { id: "1", name: "John Doe", email: "John@tmax.co.kr" }
        : null;
    },
    fetch: async () => {},
  };

  render(<UserComponent userId="2" userList={stubUserList} />);

  expect(screen.getByTestId("user-name")).toHaveTextContent("Not Found");
});
