import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavBar from './components/sub-components/NavBar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Map from './components/Map'
import Search from './components/Search'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/Map'>
          <Map />
        </Route>

        <Route path='/Search'>
          <Search />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
