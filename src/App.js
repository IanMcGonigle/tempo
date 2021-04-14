import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import TeamDetail from './routes/TeamDetail';
import UserIndex from './routes/UserIndex';
import TeamIndex from './routes/TeamIndex';

function App() {

  // Get the user data
  React.useEffect( () => {
    axios.get('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/').then( response => {
      console.log("users ", response);
      setUserData(response.data)
    })
  }, []);

  //Get the teams data
  React.useEffect( () => {
    axios.get('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/').then( response => {
      console.log("teams ", response);
      setTeamData(response.data);
    })
  }, []);

  const [teamData, setTeamData] = React.useState([]);
  const [userData, setUserData] = React.useState([]);

  // Team overview?
  // 7676a4bf-adfe-415c-941b-1739af07039b
  return (
    <div className="TempoDemo">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/team/:id">
            <TeamDetail />
          </Route>
          <Route path="/users">
            <UserIndex data={userData}/>
          </Route>
          <Route path="/user/:id">
            <UserIndex />
          </Route>
          <Route path="/">
            <TeamIndex data={teamData}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
