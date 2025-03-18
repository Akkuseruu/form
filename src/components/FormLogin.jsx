import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export default function FormLogin() {
  const storedUser = JSON.parse(localStorage.getItem("user")); // Definido fuera del useEffect

  const schema = yup.object().shape({
    email: yup.string().required('El email no debe estar en blanco').email('El email debe ser válido'),
    password: yup.string().required('La contraseña no debe estar en blanco').min(4, 'La contraseña debe tener al menos 4 caracteres').max(10, 'La contraseña debe tener como máximo 10 caracteres'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {
    if (storedUser && (storedUser.email === data.email && storedUser.password === data.password ))  {
      alert("Has iniciado sesión correctamente");
    }else{
      alert("Las credenciales no son correctas")
    }
  }

  return (
    <div>
      <h1>FormLogin</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='email' placeholder='Correo electronico' {...register('email')} />
        <p>{errors.email?.message}</p>

        <input type="password" placeholder='Contraseña' {...register('password')} />
        <p>{errors.password?.message}</p>

        <input type="submit" value="Iniciar Sesion" />
      </form>
    </div>
  )
}
