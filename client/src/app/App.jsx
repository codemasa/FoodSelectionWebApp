import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Home } from './home';
import { Recipe } from './recipe';


class App extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/home'   component={Home}/>
          <Route path={'/recipe'}   component={Recipe}/>

          {/* Add all your remaining routes here, like /trending, /about, etc. */}
        </div>
      </Router>
    );
  }
}

export default App;
