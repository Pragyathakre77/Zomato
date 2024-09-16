import React from 'react'
import './City.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const City = () => {
  return (
    <div className='Cities'>
      <h1>Popular localities in and around <span>Bhopal</span></h1>
      <div className='CityContainer'>

       <div className='city'>
          <div className='cityLeft'>
            <h3>MP Nagar</h3>
            <span>436 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
       </div> 

       <div className='city'>
          <div className='cityLeft'>
            <h3>TT Nagar</h3>
            <span>345 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
       </div> 

       <div className='city'>
          <div className='cityLeft'>
            <h3>Arera Colony</h3>
            <span>257 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
       </div> 

       <div className='city'>
          <div className='cityLeft'>
            <h3>Gulmohar Colony</h3>
            <span>317 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
       </div> 

       <div className='city'>
          <div className='cityLeft'>
            <h3>Kofefiza</h3>
            <span>189 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
       </div> 

       <div className='city'>
          <div className='cityLeft'>
            <h3>Peer Gate Area</h3>
            <span>218 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
       </div> 

       <div className='city'>
          <div className='cityLeft'>
            <h3>Habib Ganj</h3>
            <span>121 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
       </div> 

       <div className='city'>
          <div className='cityLeft'>
            <h3>BHEL</h3>
            <span>528 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
       </div> 

       <div className='city'>
          <div className='cityLeft'>
            <h3>See more</h3>
          </div>
          <div className='icon'>
            <KeyboardArrowDownIcon/>
          </div>
       </div> 
      </div> 
    </div>
  )
}

export default City
