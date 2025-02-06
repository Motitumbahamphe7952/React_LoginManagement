import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        Parent
        <Child></Child>
    </div>
  )
}

export default Parent




// store
// name="nitan"

// parent name="nitan"
  //    |
  //  Child
  //    |
  // GrandChild
  //    |
  //    AAA
  //    |
  //    BBB
  //    |
  //    CCCC


// In App.jsx
  // create context
  // provide context
  // add value to the context


// In Child.jsx 
  // get value from the context
  // change value in the context