import React, {useRef} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

export default function FormRegister({ setRegisteredUser }) {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required('El nombre no debe estar en blanco'),
    lastName: yup.string().required('El apellido no debe estar en blanco'),
    email: yup.string().required('El email no debe estar en blanco').email('El email debe ser válido'),
    age: yup.number().typeError('La edad debe ser un número').integer('La edad debe ser un número entero').min(18, 'La edad debe ser mayor a 18').required('La edad no debe estar en blanco'),
    phone: yup.string().max(10, 'El número debe contener exactamente 10 dígitos').required('El número no debe estar en blanco'),
    password: yup.string().required('La contraseña no debe estar en blanco').min(4, 'La contraseña debe tener al menos 4 caracteres').max(10, 'La contraseña debe tener como máximo 10 caracteres'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Debe confirmar la contraseña'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
  
    localStorage.setItem("user", JSON.stringify(data));
  
    navigate('/login');
  }
  

  return (
    <div>
      <h1>FORMULARIO DE REGISTRO</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Nombre completo' {...register('name')} />
        <p>{errors.name?.message}</p>

        <input type='text' placeholder='Apellidos' {...register('lastName')} />
        <p>{errors.lastName?.message}</p>

        <input type='email' placeholder='Correo electronico' {...register('email')} />
        <p>{errors.email?.message}</p>

        <input type="number" placeholder='Edad' {...register('age')} />
        <p>{errors.age?.message}</p>

        <input type="tel" placeholder='Número telefónico' {...register('phone')} />
        <p>{errors.phone?.message}</p>

        <input type="password" placeholder='Contraseña' {...register('password')} />
        <p>{errors.password?.message}</p>

        <input type="password" placeholder='Confirme la contraseña' {...register('confirmPassword')} />
        <p>{errors.confirmPassword?.message}</p>

        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
}