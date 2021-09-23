import User from "../../core/domain/models/User";
import ServiceResponse from "../../core/domain/Response/ServiceResponse";

abstract class UserAbstractServices {
  abstract login(username: string): Promise<ServiceResponse<User>>
}

export default UserAbstractServices
