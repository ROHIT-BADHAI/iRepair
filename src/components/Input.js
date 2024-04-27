import React from 'react'

function Input({setId,id,handleFetch,inputError}) {
  return (
    <div className='userInputDiv'>
      <div className='userInput'>
      <label htmlFor='invoice'>Invoice Number</label>
        <input id='invoice' placeholder='Invoice number...' value={id} onChange={e=>setId(e.target.value)}/>
        <span>{inputError}</span>
      </div>
      <div className='submitBtn'>
        <button onClick={handleFetch}>View Details</button>
      </div>
    </div>
  )
}

export default Input
