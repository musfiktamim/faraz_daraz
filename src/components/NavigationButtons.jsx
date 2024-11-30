import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavigationButtons({ Icons, label, hides,idlink}) {
  function handlclicks(){
    const flash = document.getElementById(idlink)
    flash.scrollIntoView({behavior:"smooth",block:"center",inline:"end"})
  }
  const [hovered, sethovered] = useState(false)
  return (
    hides?
    <button onClick={handlclicks} className={`md:w-fit flex gap-1 w-1/4 items-center hover:bg-[#f5f5f5] ${hides ? "hidden" : "md:hidden"} rounded-md justify-center h-10 bg-white md:flex flex-col md:flex-row `} onMouseOver={() => sethovered(true)} onMouseLeave={() => sethovered(false)} >
      <Icons color={`${hovered ? "#F85606" : "grey"}`} size={"1.1em"} />
      <p className={`text-[#F85606] text-nowrap overflow-x-hidden duration-500 transition-[width] ease-in-out ${hovered ? label?"md:w-28 md:pr-2":null : "w-0"}`}>{hovered ? window.innerWidth > 768 ? label : "" : ""}</p>
    </button>:<NavLink to={`${idlink}`} className={`md:w-fit flex gap-1 w-1/4 items-center hover:bg-[#f5f5f5] ${hides ? "hidden" : "md:hidden"} rounded-md justify-center h-10 bg-white md:flex flex-col md:flex-row `} onMouseOver={() => sethovered(true)} onMouseLeave={() => sethovered(false)} >
      <Icons color={`${hovered ? "#F85606" : "grey"}`} size={"1.1em"} />
      <p className={`text-[#F85606] text-nowrap overflow-x-hidden duration-500 transition-[width] ease-in-out ${hovered ? "md:w-28 md:pr-2" : "w-0"}`}>{hovered ? window.innerWidth > 768 ? label : "" : ""}</p>
    </NavLink>
  )
}

export default NavigationButtons