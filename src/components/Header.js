import React from 'react'
import logo from "../components/logo.jpg"
function Header() {
  return (
    <div className='navContainer'>
      <div className='leftNav'>
      <div><img height="100px" width="100px" src={logo}/></div>
      </div>
      {/* <div className='rightNav'>
        <div>Contact - 9339331818 / 9339330505
</div>
      </div> */}
    </div>
  )
}

export default Header
