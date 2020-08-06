import React, {Component} from 'react';
import ReactDom from 'react-dom'
import FirstComponent from './FirstComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      isClicked: false
    };
  };

   onChange = e => {
    //  console.log(`this is the state ${this.state.isClicked}`)
     this.setState({
       text: e.target.value
     })
   }
   
   changeisClickedState = event => {
     event.preventDefault();
    //  console.log(`this is the current state: ${this.state.todos}`)
     this.setState({
       todos: [... this.state.todos, this.state.text],
       text: ''
     })
   }

   deleteItem = (index) => () => {
    console.log('here is the index from the delete item',index)
    //this is making a copy
    let todoList = [... this.state.todos]
    todoList.splice(index, 1)
    this.setState({
      todos: todoList
    })
  }

    render() {

      return (
        <div className="App">
        <h1>Make a To Do List</h1>
          <input value={this.state.text} onChange={this.onChange}/>
            <button onClick={this.changeisClickedState}>{`${this.state.isClicked}`}</button>
         <div>
            <ul>
              {this.state.todos.map((todo, index) => {
                return <FirstComponent key={index} deleteThis={this.deleteItem(index)} listValue={todo}/> 
               })
               }
             </ul>
            <FirstComponent todos={this.state.todos}/>
          </div>     
      </div>
      )
      }
  }

export default App;