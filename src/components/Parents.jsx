import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
// pasing information from parent to child

const Parents = () => {
  // const [value,setvalus]=useState("")
  const [ChildValue,setChildValue]=useState("")
  // const getChildValue =(newvalue)=>{
  //   //child value is updated
  //   setChildValue(ChildValue)
  // }
  return (
    <div>
    

   
    Parents:{ChildValue}
      <Child1  ChildValue={ChildValue} setChildValue={setChildValue} />
      {/* child 1 value:{ChildValue} */}
      <Child2/>
      
  
    </div>
  )
}

export default Parents
