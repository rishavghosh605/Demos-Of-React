import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: "Welcome to React!",
      contentText: "In this lecture, we will go over the Components API"
    };
  }
  render() {
    return (
      <div className="App">
        {
          /*
          <h1>{this.state.headerText}</h1>
          <p>{this.state.contentText}</p>
          */
        }
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props){
    super(props);

    this.state={
      mval:"myInput"
    };
    this.myInputChanged=this.myInputChanged.bind(this);
  }
  myInputChanged(e){
    console.log(e.target);
    console.log(e.target.value);
    var myItem=e.target.value;
    this.setState({mval:myItem});
  }
  render() {
    return (
      <div className="App-intro">
        <h1>Forms in React</h1>
        <p>Lets see</p>
        <MyInputComponent inputValue={this.state.mval}
                          myInputChanged={this.myInputChanged}/>
        <h4>{this.state.mval}</h4>
        <MyEssayComponent/>
        <MyFalvorComponent/>
        </div>
    );
  }
}

class MyInputComponent extends Component{
  render(){
    return(
      <div>
        <input value={this.props.inputValue} onChange={this.props.myInputChanged}/>
      </div>
    );
  }
}

class MyEssayComponent extends Component{
  constructor(props){
    super(props);

    this.state={
      value:"Once upon a time in Mumbai",
      flavors:"grapes"
    };
    this.handleChanged=this.handleChanged.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChanged(e){
    this.setState({value:e.target.value});
  }
  handleSubmit(e){
    alert(this.state.value);
    e.preventDefault();

  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.value} onChange={this.handleChanged}/>
        <h4>{this.state.value}</h4>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class MyFalvorComponent extends Component{
  constructor(props){
    super(props);

    this.state={
      flavors:"grapes"
    };
    this.handleChanged=this.handleChanged.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChanged(e){
    this.setState({flavors:e.target.value});
  }

  handleSubmit(e){
    alert("The flavor you selected is"+this.state.flavors.toUpperCase());
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Select your favorite flavor:
        </label>
        <select onChange={this.handleChanged}>
          <option value="grapes">Grapes</option>
          <option value="apples">Apples</option>
          <option value="guava">Guava</option>
          <option value="gulab">Gulab</option>
          <option value="chilli">Chilli</option>
          </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class Reservation extends Component{
  constructor(props){
    super(props);
    this.state={
      isGoing: true,
      numberOfGuests:2
    };
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Are you going for the party
          </label>
          <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange}></input>
      </form>
    );
  }

}
export default App;
