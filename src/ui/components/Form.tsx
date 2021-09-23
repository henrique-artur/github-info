import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import Input, { IFormValues } from "./Input";
import { GrFormNextLink } from 'react-icons/gr';
import "../styles/components/Form.css";

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>()
  const onSubmit: SubmitHandler<IFormValues> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="username" register={register} required/>

      {errors.username && (
        <span 
          className="loginError"
        >
          Campo obrigatório
        </span>
      )}
      
      <Button
        suffixIcon={<GrFormNextLink size={32}/>}
        btnType="submit"
      >
        <span>Entrar</span>
      </Button>
    </form>
  );
}
