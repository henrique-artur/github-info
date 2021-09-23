import { ReactNode, createContext, useState } from "react"
import Repos from "../../core/domain/models/Repos"
import ReposService from "../../services/ReposService"

interface ReposContexProps {
  repos: undefined | Repos[]
  show: (username: string) => Promise<void>
}

interface ReposProviderProps {
  children: ReactNode
}

const ReposContex = createContext({} as ReposContexProps)

function ReposProvider({ children }: ReposProviderProps): JSX.Element {
  const [repos, setRepos] = useState<Repos[]>()

  async function show(username: string): Promise<void> {
    const response = await new ReposService().show(username)

    if (response.data) {
      setRepos(response.data)
    } else if (response.error) {
    }
  }

  return (
    <ReposContex.Provider value ={{
      repos,
      show,
    }}>
      {children}
    </ReposContex.Provider>
  )
}

export default ReposProvider