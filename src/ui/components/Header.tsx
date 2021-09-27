import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import '../styles/components/Header.css';

interface HeaderProps {
  label: string
}

function Header({label}: HeaderProps): JSX.Element {
  return (
    <div className="appHeader">
      <Link to="/user"> <IoMdArrowRoundBack size={32}/> </Link>
        <div className="labelHeader">
          <span>{label}</span>
        </div>
    </div>
  )
}

export default Header
