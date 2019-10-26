import React from 'react';
import NavBar from './Components/NavBar';
import { useAuth0 } from './react-auth0-spa';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import GardenAPI from './Components/GardenAPI';

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
          <PrivateRoute path="/garden-api" component={GardenAPI} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
