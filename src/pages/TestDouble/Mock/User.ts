export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserList {
  data: User[];
  getUserById(userId: string): User | null;
  fetchUsers: () => Promise<void>;
}
