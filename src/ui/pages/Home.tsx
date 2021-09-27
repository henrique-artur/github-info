import { useContext, useEffect } from 'react'
import { IoMdExit } from 'react-icons/io'
import { UserContext } from '../contexts/UserContext'
import { ReposContext } from '../contexts/ReposContext'
import { FollowersContext } from '../contexts/FollowersContext'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import '../styles/pages/Home.css'

function Home(): JSX.Element {
  const { user, logoof } = useContext(UserContext)
  const { show } = useContext(ReposContext)
  const { indexFollowers, indexFollowing } = useContext(FollowersContext)

  document.title = `Home - ${user?.login}`

  useEffect(() => {
    (async () =>{
      if (user) {
        await show(user.login)
      }
    })();
    (async () =>{
      if (user) {
        await indexFollowers(user.login)
      }
    })();
    (async () =>{
      if (user) {
        await indexFollowing(user.login)
      }
    })();
  }, [user])

  return (
    <div className="container">
      <div className="header">
        <strong>{user?.login}</strong>
        <div className="exit">
          <span>
            <a href="/" onClick={() => logoof()}>Sair</a>
          </span>
          <IoMdExit size={23}/>
        </div>
      </div>
      <div className="imgProfile">
        <img src={user?.avatarUrl} alt="foto de perfil" />
      </div>
      <div className="scroll-home">
        <div className="infoProfile">
          <Subtitle label={user?.name ? user.name : user?.login}/>
          <Text label={user ? user.email : ''}/>
          <Text label={user? user.location : ''}/>
          <Text label={user? user.company : ''}/>
        </div>
        <div className="cardsProfile">
          <div className="card">
            <Link to="/followers">
              <strong>{user?.followers}</strong>
              <span>Seguidores</span>
            </Link>
          </div>
          <div className="card">
            <Link to="/following">
              <strong>{user?.following}</strong>
              <span>Seguindo</span>
            </Link>
          </div>
          <div className="card">
            <Link to="/repos">
              <strong>{user?.publicRepos}</strong>
              <span>Repos</span>
            </Link>
          </div>
        </div>
        <div className="bio">
          <Subtitle label="BIO"/>
          <Text label={user ? user.bio : ''} />
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default Home
