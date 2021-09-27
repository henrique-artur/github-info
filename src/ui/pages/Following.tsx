import { useContext } from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Subtitle from "../components/Subtitle"
import { FollowersContext } from "../contexts/FollowersContext"
import { UserContext } from "../contexts/UserContext"
import '../styles/pages/Followers.css'

function Following(): JSX.Element {

  const { following } = useContext(FollowersContext)
  const { user } = useContext(UserContext)

  return (
    <>
      <div className="container">
        <Header label={`${user?.followers} Seguidores`}/>
        <div className="scroll-followers">
          {following && (
            following.map((follow) => (
              <>
                <Subtitle key={follow.login} prefixIcon={<img alt="avatar-following" src={follow.avatarUrl}/>}
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

export default Following
