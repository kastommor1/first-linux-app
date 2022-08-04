import React, { Component } from 'react';
import './App.css';

class SomeText2 extends React.Component{
  render(){
    return()
  }
}

function SomeText (props){

  return (
    <div>
      <p>Some text1</p>
      <p>My name is {props.name}</p>
      <hr />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello world</h2>
        <SomeText name="Serhii" />

        
        
      </div>
    );
  }
}

export default App;
