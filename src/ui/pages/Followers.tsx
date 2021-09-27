import { useContext } from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Subtitle from "../components/Subtitle"
import { FollowersContext } from "../contexts/FollowersContext"
import { UserContext } from "../contexts/UserContext"
import '../styles/pages/Followers.css'

function Followers(): JSX.Element {

  const { followers } = useContext(FollowersContext)
  const { user } = useContext(UserContext)

  document.title = `Seguidores - ${user?.login}`

  return (
    <>
      <div className="container">
        <Header label={`${user?.followers} Seguidores`}/>
        <div className="scroll-followers">
          {followers && (
            followers.map((follow, index) => (
              <>
                <Subtitle key={index} prefixIcon={<img alt="avatar-follows" src={follow.avatarUrl}/>}
                label={follow.login} />
                <hr />
              </>
            ))
          )}
        </div>
        <Menu />
      </div>
    </>
  )
}

export default Followers