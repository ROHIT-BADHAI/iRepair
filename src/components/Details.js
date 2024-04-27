import React from 'react'

function Details({details}) {
  return (
    <div>
    <h2>Customer Details!</h2>
    <div>
      <h4>Name  - {details[0]?.v}</h4>
      <h4>Device - {details[1]?.v} {details[2]?.v}</h4>
      <h4>Issue - {details[3]?.v}</h4>
      <h4>Status - <span> {details[4]?.v} </span></h4>
      </div>
    </div>
  )
}

export default Details
