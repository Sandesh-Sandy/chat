import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header'

function App() {
  return (
      <Router>
        <Header />
        <div className='app'>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>              
          </Switch>            
      </div>
    </Router>
  );
}

export default App;
