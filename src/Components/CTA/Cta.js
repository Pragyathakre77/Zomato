import React, { useState } from 'react'
import './Cta.scss'
import Iphone from '../../Images-Zomato/Iphone.png'
import Google from '../../Images-Zomato/Google-Play.png'
import App from '../../Images-Zomato/App-Store.png'

const Cta = () => {

  const [email,setEmail] = useState(false)
  const [phone,setPhone] = useState(false)
  
  return (
    <div className='CTA'>
       <div className='left'>
        <img src={Iphone} alt="phoneImg"/>
       </div>
       <div className='right'>
        <h1><i>Get The Zomato App</i></h1>
        <p>We will send you a link, open it on your phone to download the app</p>
        <div className='radio'>
           <div className='radioButton'>
            <input type="radio" name='radio' id='email' onClick={()=>setEmail(true) || setPhone(false)}/>
            <label htmlFor="email">Email</label>
           </div>
           <div className='radioButton'>
            <input type="radio" name='radio' id='phone' onClick={()=>setEmail(false) || setPhone(true)}/>
            <label htmlFor="phone">Phone</label>
           </div>
        </div>

        <form className='input'>
             {email && <input type="email" placeholder='Email'/>}
             {phone && <input type="number" placeholder='Number'/>}
             <button type='submit'> Share App Link</button>
        </form>
        <span>Download app from</span>
        <div className='img'>
            <img src={Google} alt="google" />
            <img src={App} alt="app" />
        </div>
       </div>
    </div>
  )
}

export default Cta
