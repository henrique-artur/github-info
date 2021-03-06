import ClientAPI from "./ClientAPI";
import FollowerResponse from "../../core/domain/Response/FollowerResponse";
import FollowersAbstractApi from "./abstraction/FollowersAbstractApi";

class FollowersApi extends FollowersAbstractApi {
  async indexFollowing(username: string): Promise<FollowerResponse[]> {
    const result = await ClientAPI.get<FollowerResponse[]>(`users/${username}/following`)

    return result
  }
  
  async indexFollowers(username: string): Promise<FollowerResponse[]> {
    const result = await ClientAPI.get<FollowerResponse[]>(`users/${username}/followers`)

    return result
  }
}

export default FollowersApi 