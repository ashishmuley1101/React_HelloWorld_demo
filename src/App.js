import React from 'react';
import './App.css';
import logo from './assets/img/bridgelabz.png'

class App extends React.Component{

  constructor(){
    super()
    this.state={
      title:'Hello from Bridgelab'
    }
  }
  render(){ 
    return(
      <div className='App'>
      <h1>{this.state.title}</h1>
      <img src={logo}
      alt="The bridgelabz logo: a bridge to Employee lab works"/>
      </div>
    );
  }
}

export default App;
