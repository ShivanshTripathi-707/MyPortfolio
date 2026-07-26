import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <p>@{new Date().getFullYear()} <span>Shivansh Tripathi</span>,  All Rights Reserved.</p>
    </div>
  )
}

export default Footer
