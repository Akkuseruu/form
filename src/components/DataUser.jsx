import React from "react";

export default function DataUser({ loggedInUser }) {
  if (!loggedInUser) {
    return <p>No hay datos disponibles. Por favor, inicia sesión.</p>;
  }

  return (
    <div>
      <h1>Datos del Usuario</h1>
      <p>
        <strong>Nombre:</strong> {loggedInUser.name}
      </p>
      <p>
        <strong>Apellidos:</strong> {loggedInUser.lastName}
      </p>
      <p>
        <strong>Correo:</strong> {loggedInUser.email}
      </p>
      <p>
        <strong>Edad:</strong> {loggedInUser.age}
      </p>
      <p>
        <strong>Teléfono:</strong> {loggedInUser.phone}
      </p>
    </div>
  );
}
