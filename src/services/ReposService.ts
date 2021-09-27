import Repos from "../core/domain/models/Repos";
import ServiceResponse from "../core/domain/Response/ServiceResponse";
import { responseToRepos } from "../core/utils/ResponseUtils";
import ReposApi from "../data/api/ReposApi";
import ReposAbstractService from "./abstraction/ReposAbstractService";

class ReposService extends ReposAbstractService {
  async show(username: string): Promise<ServiceResponse<Repos[]>> {
    const result: ServiceResponse<Repos[]> = {}
    
    try {
      const response = await new ReposApi().show(username)
      
      result.data = responseToRepos(response)
    } catch(err) {
      result.error = err
    }

    return result
  }
}

export default ReposService
