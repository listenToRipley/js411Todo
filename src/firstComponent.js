import React from 'react';

function FirstComponent(props) {
  console.log('this FirstComponent Props @@@', props.items)
  return (
    <div>
      <h1>This is Our Listing Component</h1>
      <ul>
      {props.items.map((item, index) => {
      return <li key={index}>{props.trimmed[index]}</li>
    })}
    </ul>
  </div>
  )
}

export default FirstComponent