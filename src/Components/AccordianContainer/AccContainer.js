import React, { useState } from 'react'
import'./AccContainer.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AccContainer = ({question}) => {

    const [open,setOpen] = useState(false)

  return (
    <div className='accCon'>
      <div className='accordianContainer' onClick={()=> setOpen(!open)}>
        <div className='accTitle'>
            <h3>{question.title}</h3>
            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </div>
        {open && <p>{question.infos}</p>}
      </div>
    </div>
  )
}

export default AccContainer
