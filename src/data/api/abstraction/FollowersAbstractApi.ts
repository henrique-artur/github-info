import FollowerResponse from "../../../core/domain/Response/FollowerResponse";

abstract class FollowersAbstractApi {
  abstract indexFollowers(username: string): Promise<FollowerResponse[]>
  abstract indexFollowing(username: string): Promise<FollowerResponse[]>
}

export default FollowersAbstractApi
