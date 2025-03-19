import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function FormLogin({ registeredUser, setLoggedInUser }) {
  const navigate = useNavigate();
  const [intentos, setIntentos] = useState(0);

  const schema = yup.object().shape({
    email: yup.string().required("El email no debe estar en blanco").email("El email debe ser válido"),
    password: yup
      .string()
      .required("La contraseña no debe estar en blanco")
      .min(4, "La contraseña debe tener al menos 4 caracteres")
      .max(10, "La contraseña debe tener como máximo 10 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (registeredUser && data.email === registeredUser.email && data.password === registeredUser.password) {
      console.log("Inicio de sesión exitoso");
      setLoggedInUser(registeredUser); // Pasar todos los datos del usuario
      navigate("/usuario");
    } else {
      setIntentos(intentos + 1);

      if (intentos >= 3) {
        alert("Has superado el número máximo de intentos. Serás redirigido al formulario de registro.");
        navigate("/");
      } else {
        alert(`Email o contraseña incorrectos. Intentos restantes: ${3 - intentos}`);
      }
    }
  };

  return (
    <div style={{ gap: "20px" }}>
      <h1 style={{ width: "100%", textAlign: "center" }}>Sign in</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", gap: "20px", flexWrap: "wrap", textAlign: "start" }}
      >
        <div style={{ flex: "1 1 calc(50% - 20px)", display: "flex", flexDirection: "column" }}>
          <p>Correo</p>
          <input type="email" placeholder="Escribe tu correo" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", display: "flex", flexDirection: "column" }}>
          <p>Contraseña</p>
          <input type="password" placeholder="Escribe tu contraseña" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <input type="submit" value="Sign in" style={{ width: "fit-content", alignSelf: "center", marginTop: "20px" }} />
      </form>
    </div>
  );
}
