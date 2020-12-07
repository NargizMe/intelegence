import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import MoreNews from './components/newsPage/MoreNews';
import Main from './components/mainPage/Main';
import Admin from './admin/Admin';
import AdminMain from './admin/AdminMain';
import BrainRing from './admin/adminComponents/brainRing/BrainRing';

class App extends Component {
  render (){
  return (
    <Switch>
      <Route exact path='/news' component={MoreNews} />
      <Route exact path='/' component={Main} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/admin-main' component={AdminMain} />
      <Route exact path='/brainRing' component={BrainRing} />
    </Switch>
  );
  }
}

export default App;
