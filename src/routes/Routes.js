
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Calendario } from '../screens/Calendario';
import { Usuarios } from '../screens/Usuarios';
import { Login } from '../screens/Login';
import { Cadastro } from '../screens/Paciente';
import { Home } from '../screens/Home';
import { DetailPaciente } from '../screens/DetailPaciente';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/calendario" component={Calendario} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/userDetail/:id" component={DetailPaciente} />
      </Switch>
    </Router>
  );
};

export default Routes;
