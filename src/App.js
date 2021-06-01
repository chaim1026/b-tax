import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import ReadFile from './pages/read-file/read-file.component';
import Output from './pages/output/output.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ReadFile} />
        <Route path='/output' component={Output} />
      </Switch>
    </div>
  );
}

export default App;
