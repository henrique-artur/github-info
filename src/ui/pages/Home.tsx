import { IoMdExit } from 'react-icons/io'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Menu from '../components/Menu'
import { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'
import { ReposContext } from '../contexts/ReposContext'
import { FollowersContext } from '../contexts/FollowersContext'
import '../styles/pages/Home.css'

function Home(): JSX.Element {
  const { user } = useContext(UserContext)
  const { show } = useContext(ReposContext)
  const { indexFollowers, indexFollowing } = useContext(FollowersContext)

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
  })

  return (
    <div className="container">
      <div className="header">
        <strong>{user?.login}</strong>
        <div className="exit">
          <span>
            <Link to="/">Sair</Link>
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
        </div>
        <div className="cardsProfile">
          <div className="card">
            <strong>{user?.followers}</strong>
            <span>Seguidores</span>
          </div>
          <div className="card">
            <strong>{user?.following}</strong>
            <span>Seguindo</span>
          </div>
          <div className="card">
            <strong>{user?.publicRepos}</strong>
            <span>Repos</span>
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
