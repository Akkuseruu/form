import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

export default function FormLogin({ registeredUser }) {
  const navigate = useNavigate();
  const [intentos, setIntentos] = useState(0); 

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('El email no debe estar en blanco')
      .email('El email debe ser válido'),
    password: yup
      .string()
      .required('La contraseña no debe estar en blanco')
      .min(4, 'La contraseña debe tener al menos 4 caracteres')
      .max(10, 'La contraseña debe tener como máximo 10 caracteres'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    
    if (registeredUser && data.email === registeredUser.email && data.password === registeredUser.password) {
      console.log('Inicio de sesión exitoso');
      navigate('/usuario');
    } else {
      
      setIntentos(intentos + 1);

      if (intentos >= 2) { 
        alert('Has superado el número máximo de intentos. Serás redirigido al formulario de registro.');
        navigate('/');
      } else {
        alert(`Email o contraseña incorrectos. Intentos restantes: ${3 - intentos}`);
      }
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Type your email"
          {...register('email')}
        />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Type your password"
          {...register('password')}
        />
        <p>{errors.password?.message}</p>

        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
}