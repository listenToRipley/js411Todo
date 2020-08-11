import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './FirstComponent';

//we need to update the individual items targeted from the li and change them and update to the todo 
class UpdateContent extends Component {
  constructor (props) {
    super(props);

    console.log(props)

    this.state={
      isClick: false,
    // text: this should in the li that is clicked 
    };
  }
 
  editClicked = event => {
    
  }
    //we need to import the todoList
    //locate the item in the array
    //convert the item to an input text field 
    //make changes,
    //update that list item on the screen 
  render () {
    //this will update the individual li targeted 
  }
}

export default UpdateContent