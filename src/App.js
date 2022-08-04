import React, { Component } from 'react';
// import './App.css';

class SomeText2 extends React.Component{
  render(){
    return(
    <div>
      <h4>Some text 2</h4>
      <p>My lastname {this.props.lastname}</p>



    </div>
    )
  }
}

function SomeText (props){

  return (
    <div>
      <h4>Some text1</h4>
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
        <SomeText2 lastname="Shchur" />    
      </div>
    );
  }
}

export default App;
