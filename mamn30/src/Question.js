import React, { Component} from 'react';
import './App.css';
import * as data from "./questions.json";

class Question extends Component {

state = {
      qId: 1,
      qText: "Vad är ett projekt? Definiera och förklara."
  }

  getQuestion = () => {
      var compare = this.props.id;
      var q = data.questions.filter(
          function(question) {
              return question.id === compare;
          }
      )[0]
      return q.text;
  }

render() {
  return (
    <div className="Question">
      <h3>{this.props.id}. {this.getQuestion()}</h3>
    </div>
  );
}
}

export default Question;
