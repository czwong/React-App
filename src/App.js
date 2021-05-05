import './App.css';
import { useState } from 'react';
import Sidebar from './components/NavComponent/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Proxy from './pages/Proxy.js';
import Settings from './pages/Settings.js';
// import Logo from './components/Logo';
import { emailContext } from './components/Context/EmailContext';
import { ProxyContextProvider } from './components/Context/ProxyContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [email, setEmail] = useState('');
  const [Task, setTask] = useState([]);
  const [Id, setId] = useState(0);

  return (
    <>
      <Router>
        <div className='container'>
          <div className='logo'></div>
          <div className='header'></div>
          <div className='sideBar'>
            <Sidebar />
          </div>
          <div className='content'>
            <ProxyContextProvider>
              <emailContext.Provider
                value={{ email, setEmail, Task, setTask, Id, setId }}
              >
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/Proxy' component={Proxy} />
                  <Route path='/Settings' component={Settings} />
                </Switch>
              </emailContext.Provider>
            </ProxyContextProvider>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
