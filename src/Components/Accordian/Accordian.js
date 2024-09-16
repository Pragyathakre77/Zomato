import React from 'react'
import './Accordian.scss'
import AccContainer from '../AccordianContainer/AccContainer'
import dummyData from '../../dummyData'

const Accordian = () => {
  return (
    <div className='Accordian'>
       <h2>Explore options near me</h2>
       {dummyData.map(questions =>(
         <AccContainer question={questions} key={questions.id}/>
       ))}
    </div>
  )
}

export default Accordian
