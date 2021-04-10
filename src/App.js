import './App.css';
import Sidebar from './components/NavComponent/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Proxy from './pages/Proxy.js';
import Settings from './pages/Settings.js';
import Logo from './components/Logo';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <div className='logo'>
            <Logo />
          </div>
          <div className='header'></div>
          <div className='sideBar'>
            <Sidebar />
          </div>
          <div className='content'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Proxy' component={Proxy} />
              <Route path='/Settings' component={Settings} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
