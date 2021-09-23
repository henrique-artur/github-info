import Follower from "../core/domain/models/Follower";
import ServiceResponse from "../core/domain/Response/ServiceResponse";
import { responseToFollowers } from "../core/utils/ResponseUtils";
import FollowersApi from "../data/api/FollowersApi";
import FollowersAbstractService from "./abstraction/FollowersAbstractService";

class FollowersService extends FollowersAbstractService {
  async indexFollowing(username: string): Promise<ServiceResponse<Follower[]>> {
    const result: ServiceResponse<Follower[]> = {}

    try {
      const response = await new FollowersApi().indexFollowing(username)

      result.data = responseToFollowers(response)
    } catch(err) {
      result.error = err
    }

    return result
  }

  async indexFollowers(username: string): Promise<ServiceResponse<Follower[]>> {
    const result: ServiceResponse<Follower[]> = {}

    try {
      const response = await new FollowersApi().indexFollowers(username)

      result.data = responseToFollowers(response)
    } catch(err) {
      result.error = err
    }

    return result
  }

}

export default FollowersService
