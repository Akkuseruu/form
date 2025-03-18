import React from 'react'
import { useForm } from 'react-hook-form';

export default function FormLogin() {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = (data) => {
    console.log("datos enviados", data);
  }


  return (
    <div>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input text="email" placeholder="Type your email" {...register('email')}/>
          <p>{errors.email?.message}</p>
          <input text="password" placeholder="Type your password"{...register('password')}/>
          <p>{errors.password?.message}</p>
          <input type = "submit" value = "Sign in"></input>
          </form>
    </div>
  )
}
