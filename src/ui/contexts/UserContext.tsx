import { ReactNode, createContext, useState } from "react"
import User from "../../core/domain/models/User"
import UserService from "../../services/UserService"

interface UserContextProps {
  user: undefined | User
  login: (username: string) => Promise<void> 
}

interface UserProviderProps {
  children: ReactNode
}

const UserContext = createContext({} as UserContextProps)

function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState<User>()

  async function login(username: string): Promise<void> {
    const response = await new UserService().login(username)

    if (response.data) {
      setUser(response.data)
    } else if (response.error) {
    }
  }

  return (
    <UserContext.Provider value ={{
      user,
      login,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider