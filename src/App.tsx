import logo from './logo.svg';
import './App.css';
import TestText from './components/parts/TestText';
import TestStateCard from './components/mass/TestStateCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation></Navigation>
        </header>

        <body>
          <Routing></Routing>
          <TestText test={'aaa'}></TestText>
          <TestText></TestText>
          <TestStateCard initialNumber={100}></TestStateCard>
          <TestStateCard></TestStateCard>
        </body>
      </div>
    </Router>
  );
}

const Routing = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/users">
        <UsersPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  )
}

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/asdfsdfafdfa">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App;

const HomePage = () => <h2>Home</h2>
const AboutPage = () => <h2>About</h2>
const UsersPage = () => <h2>Users</h2>
