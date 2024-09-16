import React from 'react'
import './Card.scss'
// import Dine from '../../Images-Zomato/Dine-Out.png'
// import Night from '../../Images-Zomato/Night-Life.png'
// import Online from '../../Images-Zomato/Online-Food.png'

const Card = () => {
  return (
    <div className='Cards'>
       <div className='card_img'>
        <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="dine_img" style={{width:"100%",height:"190px"}}/>
        <h1>Order Online</h1>
        <span>Stay home and order to your doorstep</span>
       </div>

       <div className='card_img'>
        <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="night_img" style={{width:"100%",height:"190px"}}/>
        <h1>Nightlife and clubs</h1>
        <span>Explore the city's top nightlife outlets</span>
       </div>

       <div className='card_img'>
        <img src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="online_img" style={{width:"100%",height:"190px"}}/>
        <h1>Dinning</h1>
        <span>Views the city's favroite venues</span>
       </div>
    </div>
  )
}

export default Card
