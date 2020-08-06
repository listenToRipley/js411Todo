import React from 'react';

const FirstComponent = (props) => {
  // console.log('this FirstComponent Props @@@', props.todos)
  // console.log(`and the props.listValue is ${props.listValue}`)
  return (
    <div>
       <li>{props.listValue}</li>
       <button key={props.index} onClick={props.deleteThis}>Delete</button>
    </div>
  )
}

export default FirstComponent