import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Login from './pages/Login';
import Cuenta from './pages/Cuenta'; // Importa el componente Cuenta

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cuenta" element={<Cuenta />} /> {/* Agrega la ruta de Cuenta */}
    </Routes>
  );
}

export default App;
