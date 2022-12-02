import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './components/Home.jsx';


class App extends React.Component{
  render(){
    return(
      <div>
      <Switch>
      <Router>
      <Route path ='/' ><Home/></Route>
      </Router>
      </Switch>
      </div>
    )
  }
}

export default App;
