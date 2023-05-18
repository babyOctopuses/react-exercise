import Navbar from './Navbar/Navbar';
import Home from './Navbar/Home';
import Create from './Navbar/Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
