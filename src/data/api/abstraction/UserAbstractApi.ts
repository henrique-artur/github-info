import UserResponse from "../../../core/domain/Response/UserResponse";

abstract class UserAbstractApi {
  abstract login(username: string): Promise<UserResponse> 
}

export default UserAbstractApi