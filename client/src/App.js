import React, { Component } from 'react';
// import axios from 'axios'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store';
import Profiles from './components/Profiles'
import CreateProfile from './components/CreateProfile'



class App extends Component {



  render() {
    return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Route exact path="/" component={Profiles}/>
        <Route exact path="/create-profile" component={CreateProfile}/>
      </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
