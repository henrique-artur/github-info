import Model from "./Model";

interface Repos extends Model {
  name: string
  description: string
  stargazersCount: number
  private: boolean
}

export default Repos
