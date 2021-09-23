interface ServiceResponse<T = Record<string, unknown>> {
  data?: T
  error?: unknown
}

export default ServiceResponse