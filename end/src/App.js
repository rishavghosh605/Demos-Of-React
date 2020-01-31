import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      headerText:"Welcome to React!",
      contentText:"In this lecture,we will go over the Component"
    };
  }
  render(){
    return (
      <div className="App">
        {/*The lines below show how the code saves states of the texts header and content}
        <h1>{this.state.headerText}</h1>
        <p>{this.state.contentText}</p>
        */}
        <Header/> {/*The Header and Content tag are stateless*/}
        <Content/>
        <Clock/>

      </div>
    );
  }
}

function Header(){
    const myStyle={
    fontSize: 100,
    color: 'red'
  };
  return(
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />

  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
  <h1 style={myStyle}>Hello World</h1>
  </header>
  );
}

class Content extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      data:[
        {
        "id":1,
        "name":"Foo",
        "age":30
        },
        {
          "id":2,
          "name":"Bar",
          "age":20
        },
        {
          "id":3,
          "name":"Vxa",
          "age":10
        }
          ]
              };
   }
  render(){
    return(
      <p className="App-intro">
        <h1>Mynnn Page starts heres</h1>
        Edit <code>src/App.js</code> and save to reload.

      <table>
        <thead>
          <td>Id </td>
          <td>Name</td>
          <td>Age</td>
        </thead>
        <tbody>
          {this.state.data.map((person,i)=><TableRow key={i} data={person}/>)}
        </tbody>
      </table>
      </p>
    );
  }
}

class Clock extends Component{
  constructor(props){
     super(props);
     this.state={date:new Date()};
  }
  componentDidMount(){
    this.timeID=setInterval(() => {
      this.tick();
    }, 1000);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  componentWillUnmount()
  {
    clearInterval(this.timeID)
  }
  render(){
    return(
      <div>
            <h1>Hello world</h1>
            <h2>The current time is: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
  }
}
class TableRow extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
