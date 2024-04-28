import React from 'react'

function Details({details}) {
  return (
    <div className='detailsDiv'>
    <h2>Customer Details!</h2>
    <div>
    <table className='detailsTable' border="1px">
      <tr>
        <td>Name</td>
        <td>{details[0]?.v}</td>
      </tr>
      <tr>
        <td>Device</td>
        <td>{details[1]?.v} {details[2]?.v}</td>
      </tr>
      <tr>
        <td>Issue</td>
        <td>{details[3]?.v}</td>
      </tr>
      <tr>
        <td>Status</td>
        <td><span> {details[4]?.v} </span></td>
      </tr>
    </table>
      </div>
    </div>
  )
}

export default Details
