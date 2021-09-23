import { Path, UseFormRegister } from "react-hook-form";
import "../styles/components/Input.css";

export interface IFormValues {
  username: string
}

interface InputProps {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
  className?: string
}
 
function Input({label, register, required, className}: InputProps): JSX.Element {
  return (  
    <input 
      className={className ? `appInput ${className}` : 'appInput'}
      placeholder={"Usuário"}
      type={"text"}
      {...register(label, { required })}
    />
  )
}
 
export default Input