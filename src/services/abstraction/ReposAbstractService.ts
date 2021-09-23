import Repos from "../../core/domain/models/Repos";
import ServiceResponse from "../../core/domain/Response/ServiceResponse";

abstract class ReposAbstractService {
  abstract show(username: string): Promise<ServiceResponse<Repos[]>> 
}

export default ReposAbstractService
