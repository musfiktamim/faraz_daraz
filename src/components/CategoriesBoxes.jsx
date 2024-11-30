import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

function CategoriesBoxes({item}) {
    const [hov,setHov] = useState(false)
  return (
    <div>
    {
        item.child?
        <button className='flex transition duration-500 items-center w-full hover:text-[#F85606] justify-between text-xs px-2 py-2 gap-5 hover:bg-blue-50' onMouseMove={e=>{setHov(true)}} onMouseLeave={e=>setHov(false)}>
            <p>{item.main}</p>
            {
                hov?<IoIosArrowForward size={"1rem"} className='transition duration-700' />:null
            }
        </button>:<NavLink to={"/h"} className='flex transition duration-500 items-center hover:text-[#F85606] justify-between text-xs px-2 py-2 hover:bg-blue-50'>
            <p>{item.main}</p>
        </NavLink>
    }
    {item.child? hov?<div onMouseOver={e=>{
        setHov(true)
        }} onMouseLeave={e=>setHov(false)} className='absolute flex-col bg-white min-h-[100%] w-[100%] border top-0 transition duration-1000 left-[100%] z-50'>
            {
                item.child.map((item,index)=><CategoriesBoxes key={index} item={item} />)
            }
            </div>:null :null
    }
    </div>
  )
}

export default CategoriesBoxes