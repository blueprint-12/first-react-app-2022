import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}
export default App;
