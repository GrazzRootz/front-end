import React from 'react';
import NavBar from './Components/NavBar';
import { useAuth0 } from './react-auth0-spa';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { EventsAndEntries } from './Components/Events';
import Profile from "./Components/Profile";
import PollView from "./Components/Polls/PollView";
import PollForm from "./Components/Polls/PollForm";
import LocalPolls from "./Components/Polls/LocalPolls";
import PrivateRoute from "./Components/PrivateRoute";
import GardenAPI from './Components/GardenAPI';
import Container from 'react-bootstrap/Container'

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

        <Container >
          <Switch>
            <Route path="/" exact />
            <Route path="/poll/:id" component={PollForm} />
            <Route path="/poll-view/:id" component={PollView} />
            <PrivateRoute path="/profile/:id" component={Profile} />
            <PrivateRoute path="/nearby-polls" component={LocalPolls} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/garden-api" component={GardenAPI} />
            <PrivateRoute path="/events" component={EventsAndEntries} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
