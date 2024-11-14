import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Login from './pages/Login';
import Proximamente from './pages/Proximamente';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Proximamente" element={<Proximamente />} />
    </Routes>
  );
}

export default App;
