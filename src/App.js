import React from 'react';
import './App.css';
import logo from './assets/img/bridgelabz.png'

class App extends React.Component{
  url="https://www.bridgelabz.com";
  constructor(){
    super()
    this.state={
      userName:'',
      nameError:''
    }
  }

//onClick function
onClick=($event) => {
  console.log("save button is clicked",$event);
  window.open(this.url,"_blank");
}

onNameChange=(event) =>{
  console.log("value is ", event.target.value);
  const nameRegex= RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  //set thetitle using setState method
  this.setState({userName: event.target.value})
  if(nameRegex.test(event.target.value)){
    this.setState({nameError:''})
  }else{
    this.setState({nameError:'Name is Incorrect'})
  }
  }

  render(){ 
    return(
      <>
      <div className="App">
      <h1>Hello {this.state.userName} from Bridgelabz</h1>
      <img src={logo} onClick={this.onClick}
      className="App-logo" alt="logo" />
      </div>
      <div className="App">
        <br/><input onChange={this.onNameChange}/>
        <span className="error-output">{this.state.nameError}</span>
        </div>
        <p>At Bridgelabz we are a Community of</p>
    <ul>
      <li>Technologists</li>
      <li>Thinkers</li> 
      <li>Builders</li> 
     </ul>
       <p>Working together to keep the employability of Engineers alive and accessible, so Tech Companies worldwide can get contributors and creators for technology Solutions. We belive this act of human collaboration across an employability platfor is essential to individual growth and our collevtive future.</p>
       <p>To know more about us, visit <a href="https://www.bridgelabz.com/">Bridgelabz</a> to learn even more about out mission</p>
       <p><strong>i.e Employability to all.</strong></p>
    
    </>
    )
  }
}

export default App;
