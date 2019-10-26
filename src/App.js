import React from 'react';
import NavBar from './Components/NavBar';
import { useAuth0 } from './react-auth0-spa';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Events } from './Components/Events';
import Profile from "./Components/Profile";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/events" component={Events} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
