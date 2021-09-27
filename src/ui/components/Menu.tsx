import { BiHome } from "react-icons/bi"
import { FiGithub, FiUsers } from "react-icons/fi"
import { Link } from "react-router-dom"
import '../styles/components/Menu.css'

function Menu(): JSX.Element {
  return (
    <div className="divMenu">
      <div className="tab">
      <Link to="/user">
        <BiHome size={32}/>
        <span>HOME</span>
      </Link>
      </div>
      <div className="tab">
        <Link to="/repos">
          <FiGithub size={32}/>
          <span>REPOS</span>
        </Link>
      </div>
      <div className="tab">
        <Link to="/followers">
          <FiUsers size={32}/>
          <span>SEGUIDORES</span>
        </Link>
      </div>
      <div className="tab">
        <Link to="/following">
          <FiUsers size={32}/>
          <span>SEGUINDO</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu