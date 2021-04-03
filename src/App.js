import './App.css';
import Navbar from './components/NavComponent/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Proxy from './pages/Proxy.js';
import Settings from './pages/Settings.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Proxy' component={Proxy} />
        <Route path='/Settings' component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
