import React from 'react';
import NavBar from './Components/NavBar';
import { useAuth0 } from './react-auth0-spa';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile";
import PollView from "./Components/Polls/PollView";
import PollForm from "./Components/Polls/PollForm";
import LocalPolls from "./Components/Polls/LocalPolls";
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
          <Route path="/poll/:id" component={PollForm} />
          <Route path="/poll-view/:id" component={PollView} />
          <PrivateRoute path="/profile/:id" component={Profile} />
          <PrivateRoute path="/nearby-polls" component={LocalPolls} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
