import React from 'react'
import './Collection.scss'
import Collection1 from '../../Images-Zomato/collection1.webp'
import Collection2 from '../../Images-Zomato/collection2.webp'
import Collection3 from '../../Images-Zomato/collection3.webp'
import Collection4 from '../../Images-Zomato/collection4.webp'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Collection = () => { 
  return (
    <div className='Collections'> 
      <h1>Collection</h1>
      <div className='collectionText'>
        <h5>Explore curated lists of top restaurants,cafes,pubs and bars in bhopal,based on trends</h5>
        <span>All collection in bhopal <KeyboardArrowRightIcon/></span>
      </div>
      <div className='collectionCard'>
        <div className='collectionImage'>
            <img src={Collection1} alt="collectionImg1" />
            <h3>Must Visit Places For Christmas</h3>
            <span>9 Places<KeyboardArrowRightIcon/></span>
        </div>

        <div className='collectionImage'>
            <img src={Collection2} alt="collectionImg2" />
            <h3>27 Finest Buffet Places</h3>
            <span>7 Places<KeyboardArrowRightIcon/></span>
        </div>

        <div className='collectionImage'>
            <img src={Collection3} alt="collectionImg3" />
            <h3>4 Top & Picturesque Cafes</h3>
            <span>7 Places<KeyboardArrowRightIcon/></span>
        </div>

        <div className='collectionImage'>
            <img src={Collection4} alt="collectionImg4" />
            <h3>10 Best Luxury Dinning Places</h3>
            <span>10 Places<KeyboardArrowRightIcon/></span>
        </div>
      </div>
    </div>
  )
}

export default Collection
