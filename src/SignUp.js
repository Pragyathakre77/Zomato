import React from 'react'
import './SignUp.scss'

const SignUp = () => {
  return (
    <>
    <div id="formpopup">
          <div className="signup">
            <span
              ><b><i>signup</i></b></span
            >
            <span id="ss"> x </span>
          </div>
          <div id="input">
            <input className="csa" type="text" placeholder="Name" />
            <input className="csa" type="text" placeholder="email" />
            <input className="csa" type="text" placeholder="pasword" />
            <button className="csa" id="asd">add</button>
          </div>
        </div>
    </>
  )
}

export default SignUp