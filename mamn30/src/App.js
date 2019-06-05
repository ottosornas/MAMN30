import React, { Component } from 'react';
import Question from './Question.js';
import './App.css';

class App extends Component {

 state = {
    number: 1
  }

increment = () => {
  if(this.state.number === 53){
    this.setState({number: 1});
  }else{
    var nr = this.state.number + 1;
    this.setState({number: nr});
  }
}

decrease = () => {
  if(this.state.number === 1){
    this.setState({number: 53});

  }else{
    var nr = this.state.number - 1;
    this.setState({number: nr});
  }
}

random = () => {
  var min=1; 
  var max=54;  
  var random =Math.floor(Math.random() * (+max - +min)) + +min;
  this.setState({number: random});
}

render() {
  return (
    <div className="App">
      <div>
        <button type="button" onClick={this.decrease}>Föregående</button>
        <button type="button" onClick={this.random}>Slumpa</button>
        <button type="button" onClick={this.increment}>Nästa</button>
      </div>
      <div>
        <Question id={this.state.number}></Question>
      </div>
    </div>
  );
}
}

export default App;
