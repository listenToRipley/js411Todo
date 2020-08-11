import React from 'react';

//this is the data passed from the app, to then create the component function 
const FirstComponent = (props) => {
  // console.log('this FirstComponent Props @@@', props.todos)
  // console.log(`and the props.listValue is ${props.listValue}`)
  //if the whole li has a key, do we still need one in each item? 
  
  return (
    <div>
    {/* creates a line item pre-individual entry*/}
       <li>
       {/* need to be able to attached trigger to this*/}
       <button onClick={props.updateThis}>Edit</button>
       {/* the individual li */}
       {props.edit && 
        <input value={props.listValue} />
       }
       {props.listValue}
       {/* includes a button for the line item, with a key that is the index number of the passed prop from the todo array  */}
       <button onClick={props.deleteThis}>Delete</button>
       </li>
    </div>
  )
}

export default FirstComponent