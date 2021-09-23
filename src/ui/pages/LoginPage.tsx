import './../styles/pages/LoginPage.css';
import Form from '../components/Form';
import { AiOutlineGithub } from 'react-icons/ai';

function LoginPage() {
  return (
    <div className={"loginPageContainer"}>
      <div className={"formLogin"}>
        <AiOutlineGithub size={110} />
        <Form />
      </div>
    </div>
  )
}

export default LoginPage