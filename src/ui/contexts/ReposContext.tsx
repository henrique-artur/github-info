import { ReactNode, createContext, useState } from "react";
import Repos from "../../core/domain/models/Repos";
import ReposService from "../../services/ReposService";

interface ReposContextProps {
  repos: undefined | Repos[]
  show: (username: string) => Promise<void>
}

interface ReposProviderProps {
  children: ReactNode
}

export const ReposContext = createContext({} as ReposContextProps)

function ReposProvider({ children }: ReposProviderProps): JSX.Element {
  const [repos, setRepos] = useState<Repos[]>()

  async function show(username: string): Promise<void> {
    const response = await new ReposService().show(username)

    if (response.data) {
      setRepos(response.data)
    }
  }

  return (
    <ReposContext.Provider value ={{
      repos,
      show,
    }}>
      {children}
    </ReposContext.Provider>
  )
}

export default ReposProvider