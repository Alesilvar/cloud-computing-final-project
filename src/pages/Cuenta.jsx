import React, { useState } from "react";
import axios from "axios";

const ListarCuentas = () => {
  const [usuarioId, setUsuarioId] = useState(""); 
  const [cuentas, setCuentas] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usuarioIdPrevio, setUsuarioIdPrevio] = useState(""); // Almacena el usuario_id de la última búsqueda

  // Función para listar cuentas por usuario_id
  const handleListarCuentas = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    setError(null); // Reinicia cualquier error anterior

    if (usuarioId === usuarioIdPrevio) {
      setError("Ya se han cargado los datos para este usuario.");
      return;
    }

    setLoading(true); // Activa el indicador de carga
    setCuentas([]); // Limpia los datos previos
    setUsuarioIdPrevio(usuarioId); // Almacena el usuario_id actual

    try {
      // Llamada a la API
      const response = await axios.post(
        "https://buey4muco2.execute-api.us-east-1.amazonaws.com/dev/cuentas/listar", // Endpoint de tu API
        { usuario_id: usuarioId }
      );

      // Procesa la respuesta si es exitosa
      if (response.status === 200 && response.data.body.length > 0) {
        setCuentas(response.data.body); // Guarda las cuentas en el estado
      } else {
        setError("No se encontraron cuentas para este usuario.");
      }
    } catch (err) {
      setError("Ocurrió un error al buscar las cuentas.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Listar Cuentas</h1>
      <form onSubmit={handleListarCuentas} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <label>
          Usuario ID:
          <input
            type="text"
            value={usuarioId}
            onChange={(e) => setUsuarioId(e.target.value)}
            required
            style={{ marginBottom: "10px", display: "block" }}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Listar Cuentas"}
        </button>
      </form>

      {/* Mostrar errores */}
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {/* Mostrar las cuentas obtenidas */}
      {cuentas.length > 0 && !loading && (
        <div style={{ marginTop: "20px" }}>
          <h2>Resultados:</h2>
          <ul>
            {cuentas.map((cuenta, index) => (
              <li key={index} style={{ marginBottom: "15px" }}>
                <p><strong>Cuenta ID:</strong> {cuenta.cuenta_id}</p>
                <p><strong>Nombre de la Cuenta:</strong> {cuenta.nombre_cuenta}</p>
                <p><strong>Saldo:</strong> ${cuenta.saldo.toFixed(2)}</p>
                <p><strong>Interés:</strong> {cuenta.interes}%</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListarCuentas;
