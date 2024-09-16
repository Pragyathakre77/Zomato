import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div className='inputform'>
    <div className="inputsignup">
      <span><b><i>login</i></b></span>
      <span id="iss"> x </span>
    </div>
    <div id="input">
      <input className="csa" type="text" placeholder="User Name" />
      <input className="csa" type="text" placeholder="pasword" />
      <button className="csa" id="asd">login</button>
    </div>
    </div>
  )
}

export default Login