import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import FirstComponent from './firstComponent'

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      input: '',
      items: []
    };
  }

  // toggle = () => {
  //   this.setState({isOne: !this.state.isOne})
  // }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    console.log('##This is state', this.state.items)
    this.setState({ 
      items: [...this.state.items, this.state.input],
      input: '' 
    })
  }

  render() {
    // console.log('##this is the state of things##', this.state.isOne)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputUpdate}/>
          <button>Submit</button>
        </form>

  <FirstComponent items={this.state.items}/>
      </header>
    </div>
   );
  }
}

export default App;
