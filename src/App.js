import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { teamsState } from './state/';
import { TEAMS_URL } from './constants/'
import TeamDetail from './routes/TeamDetail';
import TeamsIndex from './routes/TeamsIndex';

function App() {
  const setTeams = useSetRecoilState(teamsState);

  //Get the teams data
  useEffect(() => {
    axios
      .get(TEAMS_URL)
      .then((response) => {
        setTeams(response.data);
      });
  }, [setTeams]);

  return (
    <div>
      <Router>
        <div>
        <header className="py-6 px-4 bg-indigo-700 text-white flex font-bold mb-6 shadow">
            <h1 className="text-2xl md:text-5xl">
              Tempo.io
              <small className="block text-xs mt-1">Code assignment by Ian McGonigle</small>
            </h1>
          </header>
          <Link className="m-4 py-2 px-4 bg-indigo-700 rounded text-white shadow hover:shadow-md font-bold hover:bg-indigo-500" to='/'>View All Teams</Link>
          <Switch className="my-8">
            <Route path='/team/:id'>
                <TeamDetail />
            </Route>
            <Route path='/'>
              <TeamsIndex name='Team' store={teamsState} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
