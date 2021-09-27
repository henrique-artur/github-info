import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { FollowersContext } from "../contexts/FollowersContext";
import Header from "../components/Header";
import Subtitle from "../components/Subtitle";
import Menu from "../components/Menu";
import '../styles/pages/Followers.css';

function Following(): JSX.Element {

  const { following } = useContext(FollowersContext)
  const { user } = useContext(UserContext)

  document.title = `Seguindo - ${user?.login}`

  return (
    <>
      <div className="container">
        <Header label={`${user?.following} Seguidores`}/>
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
