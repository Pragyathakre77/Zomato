// import React from 'react'
// import './Header.scss'

// const Header = () => {
//   return (
//     <div className='header'>
//        <nav>
//          <span>Get the App</span>
//          <div className='RightSide nav'>
//            <span>Investor Relations</span>
//            <span>Add Restaurant</span>
//            <span>Log in</span>
//            <span>Sign in</span>
//          </div>
//        </nav>
//     </div>
//   )
// }

// export default Header



import React from 'react'
import './Header.scss'
import Logo from '../../Images-Zomato/Zomato-Logo.png'
import { Search,MapPin} from 'lucide-react'
// import {NavLink} from 'react-router-dom' 

const Header = () => {
  return (
    <div className='Header'>

        <img className='img' src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png' alt='image'/>
        
        <div className='header_nav'>
            <span className='span'><i>Get The App</i></span>
          <div className='navbar'>
            <span><i>Investor Relation</i></span>
            <span><i>Add Restaurant</i></span>
            <span><i>Log in</i></span>
            <span><i>Sign in</i></span>
          </div>
        </div> 

        <div className='HeaderContent'>
           <img src={Logo} alt="Zomato-Logo" />
           <h3><i>Discover the best food & drink in bhopal</i></h3>
           <div className='input'>
           <MapPin />
              <select>
                <option value="bhopal"> Bhopal </option>
                <option value="indore"> Indore </option>
                <option value="gwalior"> Gwalior </option>
                <option value="delhi"> Delhi </option>
              </select>
              <Search />
              <input type="text" placeholder='Search for restaurant,cuisine or dish' />

           </div>
        </div>
     
    </div>

   
  )
}

export default Header

