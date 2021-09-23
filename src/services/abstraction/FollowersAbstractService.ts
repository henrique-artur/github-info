import Follower from "../../core/domain/models/Follower";
import ServiceResponse from "../../core/domain/Response/ServiceResponse";

abstract class FollowersAbstractService {
  abstract indexFollowers(username: string): Promise<ServiceResponse<Follower[]>>
  abstract indexFollowing(username: string): Promise<ServiceResponse<Follower[]>>
}

export default FollowersAbstractService
