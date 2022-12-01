import React from 'react';
import './App.css';
import logo from './assets/img/bridgelabz.png'

class App extends React.Component{
  url="https://www.bridgelabz.com";
  constructor(){
    super()
    this.state={
      userName:''
    }
  }

//onClick function
onClick=($event) => {
  console.log("save button is clicked",$event);
  window.open(this.url,"_blank");
}

onNameChange=(event) =>{
  console.log("value is ", event.target.value);
  //set thetitle using setState method
  this.setState({userName: event.target.value})
}

  render(){ 
    return(
      <>
      <div >
      <h1>Hello {this.state.userName} from Bridgelabz</h1>
      <img src={logo} onClick={this.onClick}
      alt="The bridgelabz logo: a bridge to Employee lab works"/>
      </div>
      <div>
        <input onChange={this.onNameChange} />
      </div>
      </>
    );
  }
}

export default App;
