// UserComponent.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserComponent from "./UserComponent";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { User, UserList } from "./User";

const server = setupServer(
  http.get("/greeting", () => {
    return HttpResponse.json({ greeting: "hello there" });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

class MockUserList implements UserList {
  data: User[] = [];
  getUserById = jest.fn((id: string) => {
    return id === "1"
      ? { id: "1", name: "John Doe", email: "John@tmax.co.kr" }
      : null;
  });

  fetchUsers = async () => {
    const res = await fetch("/userData");
    const jsonData: User[] = await res.json();
    this.data = jsonData;
  };
}

test("UserComponent renders user names from server data", async () => {
  const mockUserList: UserList = new MockUserList();

  render(<UserComponent userId="2" userList={mockUserList} />);

  fireEvent.click(screen.getByRole("button"));

  expect(mockUserList.data.length).toBe(2);
});
