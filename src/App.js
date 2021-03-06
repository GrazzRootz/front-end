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
import { NewCommunity } from './Components/NewCommunity';
import { FakeNewCommunity } from './Components/FakeNewCommunity';
import Container from 'react-bootstrap/Container'
import GardenPage from './Components/GardenPage';
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
            <Route path="/" exact component={NewCommunity} />
            <Route path="/poll/:id" component={PollForm} />
            <Route path="/poll-view/:id" component={PollView} />
            <Route path="/garden/:gardenName" component={GardenPage} />
            <Route path="/mycommunity" component={FakeNewCommunity} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/nearby-polls" component={LocalPolls} />
            <Route path="/profile" component={Profile} />
            <Route path="/garden-api" component={GardenAPI} />
            <Route path="/events" component={EventsAndEntries} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
