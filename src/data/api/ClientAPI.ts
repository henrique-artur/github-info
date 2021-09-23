import HTTPConnection from "../../core/utils/HTTPConnection";

const ClientAPI = new HTTPConnection(
  'https://api.github.com/'
)

export default ClientAPI
