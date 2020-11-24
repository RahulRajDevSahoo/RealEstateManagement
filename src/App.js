import React from 'react';
import {HashRouter , Route} from 'react-router-dom';

import Login from './login';
import Header from './header';
import Home from './home';
import Signup from './signup';
import Project from './project';
import NewProject from './newproject';

function App() {

  return <HashRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/newproject" component={NewProject}/>

         </HashRouter>;
}

export default App;

