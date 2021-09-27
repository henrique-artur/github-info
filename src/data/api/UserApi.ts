import ClientAPI from "./ClientAPI";
import UserResponse from "../../core/domain/Response/UserResponse";
import UserAbstractApi from "./abstraction/UserAbstractApi";

class UserApi extends UserAbstractApi {
  async login(username: string): Promise<UserResponse> {
    const result = await ClientAPI.get<UserResponse>(`users/${username}`)

    return result
  }

}

export default UserApi
