import React, { Component } from 'react';
import './App.css';
import MyFirstComponent from './FirstComponent.jsx'

class App extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      input: '',
      todos: [], 
      isOn: false 
    }
  }

  inputUpdate = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  formSubmit = (event) => {
    event.preventDefault()
    this.setState({
      todo: [...this.state.todos, this.state.input],
      input: ''
    })
  }

  deleteListenItem =(index) => () => {
    console.log(index)
    this.setState({
      todos: this.state.todos.slice(index, index+1)
    })
  }

render() {
 
  return (
    <div className="App">
      <header className="App">
      <h1>Hello</h1>
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputUpdate}/>
          <button onClick={this.formSubmit}>{`${this.state.isOn}`}</button>
        </form>
        <ul>       
         {this.state.todos.map((todo, index)=> {
            return <li key={index}>{this.state.todos[index]}</li>
          }
         )}
        </ul>
          <MyFirstComponent/>
      </header>   
    </div>
    )
  }
}

export default App;
