import React from 'react'
import "./Error.css"
import { useNavigate } from 'react-router-dom' 

const Error = () => {

    const navigate = useNavigate()

  return (
    <div className='error'>
      <h1>404!!</h1>
      <p>Page Not Found</p>
      <button className='btn' onClick={()=> navigate("/")}>Back To Home</button>
    </div>
  )
}

export default Error
