import React from 'react';
import Inicio from './components/Inicio';
import Base from './components/Base';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



function App() {
  return (
    <Router>      
      <Link to="/">Usuarios</Link>
      <Switch>
        <Route exact path="/">
          <Usuarios></Usuarios>
        </Route>
        <Route path="/usuario/:id">
          <Usuario></Usuario>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
