import User from "../core/domain/models/User";
import ServiceResponse from "../core/domain/Response/ServiceResponse";
import { responseToUser } from "../core/utils/ResponseUtils";
import UserApi from "../data/api/UserApi";
import UserAbstractServices from "./abstraction/UserAbstractService";

class UserService extends UserAbstractServices {
  async login(username: string): Promise<ServiceResponse<User>> {
    const result: ServiceResponse<User> = {}

    try {
      const response = await new UserApi().login(username)

      result.data = responseToUser(response)

    } catch(err) {
      result.error = err
    }

    return result
  }
}

export default UserService
