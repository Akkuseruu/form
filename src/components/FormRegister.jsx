import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function FormRegister({ setRegisteredUser }) {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("El nombre no debe estar en blanco"),
    lastName: yup.string().required("El apellido no debe estar en blanco"),
    email: yup.string().required("El email no debe estar en blanco").email("El email debe ser válido"),
    age: yup
      .number()
      .typeError("La edad debe ser un número")
      .integer("La edad debe ser un número entero")
      .min(18, "La edad debe ser mayor a 18")
      .required("La edad no debe estar en blanco"),
    phone: yup
      .string()
      .max(10, "El número debe contener exactamente 10 dígitos")
      .required("El número no debe estar en blanco"),
    password: yup
      .string()
      .required("La contraseña no debe estar en blanco")
      .min(4, "La contraseña debe tener al menos 4 caracteres")
      .max(10, "La contraseña debe tener como máximo 10 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Debe confirmar la contraseña"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
    setRegisteredUser(data);
    navigate("/login");
  };

  return (
    <div style={{ gap: "20px" }}>
      <h1 style={{ width: "100%", textAlign: "center" }}>FORMULARIO DE REGISTRO</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", gap: "20px", textAlign: "start" }}>
        <div style={{ flex: "1 1 calc(50% - 20px)", display: "flex", flexDirection: "column" }}>
          <label for="name">Nombre:</label>
          <input id="name" type="text" placeholder="Nombre completo" {...register("name")} />
          <p>{errors.name?.message}</p>

          <label for="email">Correo electrónico:</label>
          <input id="email" type="email" placeholder="Correo electrónico" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label for="phone">Teléfono:</label>
          <input id="phone" type="tel" placeholder="Número telefónico" {...register("phone")} />
          <p>{errors.phone?.message}</p>

          <label for="confirmPassword">Confirmar contraseña:</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirme la contraseña"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", display: "flex", flexDirection: "column" }}>
          <label for="lastName">Apellidos:</label>
          <input id="lastName" type="text" placeholder="Apellidos" {...register("lastName")} />
          <p>{errors.lastName?.message}</p>

          <label for="age">Edad:</label>
          <input id="age" type="number" placeholder="Edad" {...register("age")} />
          <p>{errors.age?.message}</p>

          <label for="password">Contraseña:</label>
          <input id="password" type="password" placeholder="Contraseña" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <input
          type="submit"
          value="Registrar"
          style={{ width: "fit-content", height: "fit-content", marginTop: "20px" }}
        />
      </form>
    </div>
  );
}
