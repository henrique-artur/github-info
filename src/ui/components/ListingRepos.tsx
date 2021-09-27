import { AiOutlineStar } from "react-icons/ai";
import { FiUnlock } from "react-icons/fi";
import Subtitle from "./Subtitle";
import Text from "./Text";
import '../styles/components/ListingRepos.css';
import { useContext } from "react";
import { ReposContext } from "../contexts/ReposContext";

function ListingRepos(): JSX.Element {
  const { repos } = useContext(ReposContext)

  return (
    <>
      {repos && (repos.map((item, index) => (
        <>
          <Subtitle key={index} label={item.name} />
          <Text key={index}  label={item.description} />
          <div key={index} className="repoInfo">
            <div className="stars">
              <AiOutlineStar size={30} />
              <p>{item.stargazersCount}</p>
            </div>
            <div className="locked">
              <FiUnlock size={30}/>
            </div>
          </div>
          <hr/>
        </>
      )))}
    </>
  )
}

export default ListingRepos