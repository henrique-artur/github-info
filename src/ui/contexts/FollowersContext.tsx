import { ReactNode, createContext, useState } from "react"
import Follower from "../../core/domain/models/Follower"
import FollowersService from "../../services/FollowersService"

interface FollowersContextProps {
  followers: undefined | Follower[]
  following: undefined | Follower[]
  indexFollowers: (username: string) => Promise<void>
  indexFollowing: (username: string) => Promise<void>
}

interface FollowersProviderProps {
  children: ReactNode
}

export const FollowersContext = createContext({} as FollowersContextProps)

function FollowersProvider({ children }: FollowersProviderProps): JSX.Element {
  const [followers, setFollowers] = useState<Follower[]>()
  const [following, setFollowing] = useState<Follower[]>()

  async function indexFollowers(username: string): Promise<void> {
    const response = await new FollowersService().indexFollowers(username)

    if (response.data) {
      setFollowers(response.data)
    }
  }

  async function indexFollowing(username: string): Promise<void> {
    const response = await new FollowersService().indexFollowing(username)

    if (response.data) {
      setFollowing(response.data)
    }
  }

  return (
    <FollowersContext.Provider value ={{
      followers,
      following,
      indexFollowers,
      indexFollowing,
    }}>
      {children}
    </FollowersContext.Provider>
  )
}

export default FollowersProvider
