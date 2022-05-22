import React, {useState } from 'react'
import Counter from './Counter'


export default function MyApp() {
  const [counters, setCounters] = useState([0])


  // const handleDecrement = (idx) => {
  //   const newCounters = [...counters]
  //   newCounters[idx] = newCounters[idx] - 1
  //   setCounters(newCounters)
  // }

  // const handleIncrement = (idx) => {
  //   const newCounters = [...counters]
  //   newCounters[idx] = newCounters[idx] + 1
  //   setCounters(newCounters)
  // }
  
  // const handleReset = (idx) => {
  //   const newCounters = [...counters]
  //   newCounters[idx] = 0
  //   setCounters(newCounters)
  // }

  
  const handleChange = (idx, type) => {
    const newCounters = [...counters]
    if(type==="Increment") newCounters[idx] = newCounters[idx] + 1
    if(type==="Decrement") newCounters[idx] = newCounters[idx] - 1
    if(type==="Reset") newCounters[idx] = 0;
    setCounters(newCounters)
  }


  const handleRemove = (idx) => {
    const newCounters = counters.filter((item, index) => index !== idx)
    setCounters(newCounters)
  }

  return (
    <div>
      {
        counters.length>0 ? 
        counters.map((counter, idx) => (
          <Counter 
            key={idx} 
            id={idx} 
            count={counter} 
            handleChange={handleChange}
            handleRemove={handleRemove}
          />
        ))
        : <p className='alert alert-danger'>Counter is empty</p>
      }
      <button 
        onClick={() => setCounters([ ...counters, 0])}
      >Add</button>
      <hr/>
    </div>
  )
}
