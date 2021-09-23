import ReposResponse from "../../../core/domain/Response/ReposResponse";

abstract class ReposAbstractApi {
  abstract show(username: string): Promise<ReposResponse[]>
}

export default ReposAbstractApi
