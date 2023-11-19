import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Calendario } from '../screens/Calendario';
import { Usuarios } from '../screens/Usuarios';
import { Login } from '../screens/Login';
import { Cadastro } from '../screens/Paciente';
import { Home } from '../screens/Home';
import { DetailPaciente } from '../screens/DetailPaciente';
import { CriarUsers } from '../screens/CriarUsers';
import { AuthContext } from '../context/AuthContext';
import { Cadastrar } from '../screens/Cadastro';
import { Perfil } from '../screens/Perfil';


const ProtectedRoutes = () => {
  const { token } = useContext(AuthContext);

  if (!token) {
    // Se o token for null, redirecionar para a página de login
    return <Navigate to="/login" />;
  }

  return (
    <React.Fragment>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/userDetail/:id" element={<DetailPaciente />} />
        <Route path="/criarUsers/:title" element={<CriarUsers />} />
    </Routes>
    </React.Fragment>

  );
};

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Cadastrar />} />
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
