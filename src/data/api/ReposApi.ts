import ClientAPI from "./ClientAPI";
import ReposResponse from "../../core/domain/Response/ReposResponse";
import ReposAbstractApi from "./abstraction/ReposAbstractApi";

class ReposApi extends ReposAbstractApi {
  async show(username: string): Promise<ReposResponse[]> {
    const result = await ClientAPI.get<ReposResponse[]>(
      `users/${username}/repos`
    )

    return result
  }
}

export default ReposApi
