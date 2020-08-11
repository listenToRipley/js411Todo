import React, {Component} from 'react';
import FirstComponent from './FirstComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      isClicked: false,
    };
  };
   updateContent = (targetIndex, newText) => {
    
    let updatedTodos = this.state.todos.map((todo, index) => (
      index === targetIndex ?
      (todo.text: newText) :
      todo 
    ));

    this.setState({
      todos: updatedTodos
    });
    //find the todo item in index
    //change the todo.text = newText

  }
  //the changing state of the input field 
   onChange = event => {
     this.setState({
       text: event.target.value,
     })
    //  console.log('this is the text of onChange :', this.setState)
   }
   
   //updates the content of the array with items that were recently added, makes sure the input field remains blank without the previous entry being place in there 
   //handles Clicked State for add
   changeIsClickedState = event => {
     event.preventDefault();
     let ifClicked = this.state.isClicked == false ? true : false
    console.log('this is',event)
    //  console.log(`this is the current state: ${this.state.todos}`)

    //should add logic to prevent blank field 
     this.setState({
       todos: [... this.state.todos, 
        {toDoText: this.state.text,
        isEdited: false,
        status: ''
        }],
       text: '',
       isClicked: ifClicked
     })
   }

   //add the delete button 
   deleteItem = (index) => () => {
    // console.log('here is the index from the delete item',index)
    //this is making a copy
    let todoList = [... this.state.todos]
    todoList.splice(index, 1)
    this.setState({
      todos: todoList
    })
  }

    render() {

      let mapTodos = this.state.todos.map((todo, index) => {
        return <FirstComponent 
          key={index} 
          deleteThis={this.deleteItem(index)} 
          // updateThis={this.updateContent(targetIndex, newText)}
          listValue={todo.toDoText} edit={todo.isEdited}/> 
       })

      return (
        <div className="App">
        <h1>Make a To Do List</h1>
        {/* locates the input field provides the event function the sets the state of this element */}
          <input 
            value={this.state.text} 
            onChange={this.onChange}/>
          {/* this allows the content to be added to the new array, updating the render once the button is clicked*/}
            <button 
              onClick={this.changeIsClickedState}>
                {`${this.state.isClicked}`}</button>
         <div>
            <ul>
            {/* creates the new list of items from the todo array*/}
              {mapTodos}
             </ul>
          </div>     
      </div>
      )
      }
  }

export default App;