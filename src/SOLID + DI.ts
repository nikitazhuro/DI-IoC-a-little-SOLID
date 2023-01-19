import axios from "axios";

interface IUser {
  id: number;
  name: string;
}

// Api interface
interface UsersApi {
  getUsers: () => Promise<Array<IUser>>
};

// Case with Axios
class UsersFromAxiosRequests implements UsersApi {
  async getUsers(): Promise<Array<IUser>> {
    const { data } = await axios.get<Array<IUser>>('https://jsonplaceholder.typicode.com/users?_limit=2');
    return data;
  }
}

// Case with fetch
class UsersFromFetchRequests implements UsersApi {
  async getUsers(): Promise<Array<IUser>> {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    return users.json();
  }
}

class Users implements UsersApi {
  private usersApi: UsersApi

  // Dependency Injection, so its no matter what would we use: axios, fetch or smth else;
  // We work with interface
  constructor(userApi: UsersApi) {
    this.usersApi = userApi;
  }

  public async getUsers() {
    const users = await this.usersApi.getUsers();
    return users;
  }
}

// This approach is called Dependency Inversion,
// when upper-level modules do not depend on lower-level modules, they depend on abstractions like UsersApi;

export const objFromFetch = new Users(new UsersFromFetchRequests());

export const objFromAxios = new Users(new UsersFromAxiosRequests());
