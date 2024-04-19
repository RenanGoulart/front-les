import api from "../../lib/axios";
import { IUserResponse } from "./dto/UserDTO";

class User {
  static async findFirst() {
    const { data } = await api.get<IUserResponse[]>("/user");
    return data[0];
  }
}

export default User;
