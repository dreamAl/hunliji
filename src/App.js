import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Routers from './components/routers'
import First from './pages/first'
import Says from './pages/says'
import Gift from './pages/gift'
import Collect from './pages/collect'
import We from './pages/we'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
              <Routers/>
              <Route path="/first" component={First}></Route>
              <Route path="/says" component={Says}></Route>
              <Route path="/gift" component={Gift}></Route>
              <Route path="/collect" component={Collect}></Route>
              <Route path="/we" component={We}></Route>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
