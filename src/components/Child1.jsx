import React from 'react'
// pasing information from child to parent we con't pass child to parent directly
const Child1 = (props) => {
  return (
    <div>
      <input onChange={(e)=>{props.setChildValue(e.target.value)}}/>
      Child1
      <span>information:{props.ChildValue}</span>
      
      
    </div>
  )
}

export default Child1
