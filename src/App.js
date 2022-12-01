import React from 'react';
import './App.css';
import logo from './assets/img/bridgelabz.png'

class App extends React.Component{
  url="https://www.bridgelabz.com";
  constructor(){
    super()
    this.state={
      title:'Hello from Bridgelab'
    }
  }

//onClick function
onClick=($event) => {
  console.log("save button is clicked",$event);
  window.open(this.url,"_blank");
}

  render(){ 
    return(
      <div className='App'>
      <h1>{this.state.title}</h1>
      <img src={logo} onClick={this.onClick}
      alt="The bridgelabz logo: a bridge to Employee lab works"/>
      </div>
    );
  }
}

export default App;
