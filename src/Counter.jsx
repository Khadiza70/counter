import React from 'react'

export default function Count({ 
  id, count, 
  handleRemove, handleChange
}) {

  return (
    <div className='p-3'>
      <div>
      Count: <span className={`badge bg-${count===0 ? "danger" : count>0 ? "success" : 'warning'}`}>{count}</span>
        <button 
          className='ms-5 bg-danger'
          onClick={()=>handleRemove(id)}
        >X</button>
      </div>
      <br/>
      <button onClick={()=>handleChange(id, "Decrement")}>Decrement</button>
      <button className='mx-2' onClick={()=>handleChange(id, "Reset")}>Reset</button>
      <button onClick={()=>handleChange(id, "Increment")}>Increment</button>
      <hr />
    </div>
  )
}
