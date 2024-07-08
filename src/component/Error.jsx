import React from 'react'
import './error.css'
const Error = () => {
  return (
    <div>
      <div className='errors'>
        <img src='https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png' ></img>
        <div className='msg'>
        <span className='first'>Movie not</span><span className='second'> Found</span>
        </div>
      </div>
    </div>
  )
}

export default Error
