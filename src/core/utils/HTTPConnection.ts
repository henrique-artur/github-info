import axios, { AxiosInstance, AxiosResponse } from "axios";
import ApiResponse from "../domain/Response/ApiResponse";

class HTTPConnection {
  private readonly connection: AxiosInstance

  constructor(baseURL: string) {
    this.connection = axios.create({
      baseURL: baseURL,
    })
  }

  async get<T extends ApiResponse = ApiResponse>(urlPath: string): Promise<T> {
    const response = await this.request<T>(urlPath)

    return response.data
  }

  private request<T>(path: string): Promise<AxiosResponse> {
    let response: Promise<AxiosResponse>

    response = this.connection.get<T>(path, {
      headers: this.getDefaultHeaders(),
    })

    return response
  }

  private getDefaultHeaders(): Record<string, string> {
    const headers: Record<string, string> = {}

    headers['Content-type'] = 'application/json'

    return headers
  }
}

export default HTTPConnection
