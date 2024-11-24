import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Login from './pages/Login';
import Proximamente from './pages/Proximamente';
import InterfaceUser from './pages/InterfaceUser';
import UsuarioTransacciones from './pages/UsuarioTransacciones';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/proximamente" element={<Proximamente />} />
      <Route
        path="/interfaceuser"
        element={
          <ProtectedRoute>
            <InterfaceUser />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transacciones"
        element={
          <ProtectedRoute>
            <UsuarioTransacciones />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
