import { ReactNode, createContext, useState } from "react"
import User from "../../core/domain/models/User"
import UserService from "../../services/UserService"

interface UserContextProps {
  user: undefined | User
  isAuth: undefined | boolean
  login: (username: string) => Promise<void> 
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps)

function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState<User>()
  const [isAuth, setIsAuth] = useState<boolean>(false)

  async function login(username: string): Promise<void> {
    const response = await new UserService().login(username)

    if (response.data) {
      setUser(response.data)
      setIsAuth(true)
    }
  }

  return (
    <UserContext.Provider value ={{
      user,
      isAuth,
      login,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider