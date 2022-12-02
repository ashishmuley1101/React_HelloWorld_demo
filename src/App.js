import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './components/Home.jsx';
import Page from './components/Page.jsx';


class App extends React.Component{
  render(){
    return(
      <div>
      <Switch>
      <Router>
      <Route exact path ='/'><Home/></Route>
      <Route path ='/page' ><Page/></Route>
      </Router>
      </Switch>
      </div>
    )
  }
}

export default App;
