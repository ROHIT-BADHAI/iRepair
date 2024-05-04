import React from 'react'

function Details({details}) {
  let dateArray=(details[0].v).slice(5,details[0].v.length-1).split(',');
  let month= [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];
    let dateTime=dateArray[2]+" "+month[dateArray[1]-1]+" "+dateArray[0]+"  Time - "+dateArray[3]+" "+dateArray[4];
  return (
    <div className='detailsDiv'>
    <h2>Customer Details!</h2>
    <div>
    <table className='detailsTable' border="1px">
    <tr>
        <td>Timestamp</td>
        <td>{dateTime}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{details[1]?.v}</td>
      </tr>
      <tr>
        <td>Device</td>
        <td>{details[2]?.v} {details[3]?.v}</td>
      </tr>
      <tr>
        <td>Issue</td>
        <td>{details[4]?.v}</td>
      </tr>
      <tr>
        <td>Status</td>
        <td><span> {details[5]?.v} </span></td>
      </tr>
    </table>
      </div>
    </div>
  )
}

export default Details
