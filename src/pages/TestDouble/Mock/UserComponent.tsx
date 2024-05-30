import React, { useEffect, useState } from "react";
import { UserList, User } from "./User";

interface UserComponentProps {
  userId: string;
  userList: UserList;
}

const UserComponent: React.FC<UserComponentProps> = ({ userId, userList }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(userList.getUserById(userId));
  }, [userId, userList]);

  return (
    <div>
      <h4 data-testid={"user-name"}>{user ? user.name : "Not Found"}</h4>
      <button data-testid={"button"} onClick={userList.fetchUsers}>
        Refetch
      </button>
    </div>
  );
};

export default UserComponent;
