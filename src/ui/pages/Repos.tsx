import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import ListingRepos from "../components/ListingRepos";
import Menu from "../components/Menu";
import '../styles/pages/Repos.css';

function Repos(): JSX.Element {
  const { user } = useContext(UserContext)

  document.title = `Repos - ${user?.login}`

  return(
    <div className="container">
      <Header label={`${user?.publicRepos} Repositórios`}/>
      <div className="scrool">
        <ListingRepos />
      </div>
      <Menu />
    </div>
  )
}

export default Repos
