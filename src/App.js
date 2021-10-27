import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <h1>Home Page</h1>
            <Home />
          </Route>
          <Route path="/search">
            <h1>Search Page</h1>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
