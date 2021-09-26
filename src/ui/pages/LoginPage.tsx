import Button from '../components/Button';
import UserDTO from '../../core/domain/dto/userDTO';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineGithub } from 'react-icons/ai';
import { GrFormNextLink } from 'react-icons/gr';
import './../styles/pages/LoginPage.css';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function LoginPage() {
  let className = 'loginError'

  const { login } = useContext(UserContext)
  
  const { handleSubmit, register, formState: { errors } } = useForm<UserDTO>()
  const onSubmit: SubmitHandler<UserDTO> = async (data) => {
    await login(data.username)
  }

  return (
    <div className={"loginPageContainer"}>
      <div className={"formLogin"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AiOutlineGithub size={110} />
          <div className={errors.username ? `inputContainer ${className}` : 'inputContainer'}>
            <input 
              className={"appInput"}
              placeholder={"Usuário"}
              type={"text"}
              {...register("username", { required: true })}
            />
            <span className={"feedback"}>Campo obrigatório</span>
          </div>
          <Button
            suffixIcon={<GrFormNextLink size={32}/>}
            btnType="submit"
          >
            <span>Entrar</span>
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
