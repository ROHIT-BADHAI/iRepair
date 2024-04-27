import React from 'react'

function Input({setId,id,handleFetch,inputError}) {
  return (
    <div className='userInputDiv'>
      <div className='userInput'>
      <label htmlFor='invoice'>Invoice Number</label>
        <input type='number' id='invoice' placeholder='Invoice number...' value={id} onChange={e=>setId(e.target.value)} onWheel={()=>false}/>
        <span>{inputError}</span>
      </div>
      <div className='submitBtn'>
        <button onClick={handleFetch}>View Details</button>
      </div>
    </div>
  )
}

export default Input
