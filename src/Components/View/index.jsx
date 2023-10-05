import clsx from 'clsx'
import React, { useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
const View = ({notes,deleteNote,openmodal}) => {
  const [open,setOpen]=useState(true)

   
  const newData = new Date()
  // const getMinutes = newData.getMinutes()
  // const getHours = newData.getHours()
  // const getMonth = newData.getMonth()
  console.log(newData);
  // const getDay = newData.getDay()< 10 ? '0'+ newData.getDay() : newData.getDay()
  return (
    <div className='grid grid-cols-5 gap-x-2'>
      {
        notes.map((item)=>(
            <div className='rounded p-1 bg-orange-300	relative ' key={item.isbn}>
             <h1 className='text-xl font-semibold '>{item.title}</h1>
             <h1>{item.author}</h1>
             
             <div className='text-right'>
              <div>
              </div>
              <button onClick={()=>deleteNote(item.uuid)}  className=' text-orange-900 p-1'>
               <AiOutlineDelete className='font-bold' size={20}/>
             </button>
             </div>
             
            </div>
        ))
      }

       
    </div>
  )
}

export default View
