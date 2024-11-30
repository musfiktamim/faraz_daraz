import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Dlogo from "../assets/images/logo.png"
import Dcart from "../assets/images/cart.svg"
import Dsearch from "../assets/images/search.png"

function Navbar() {
  const [Search, setSearch] = useState("")
  const [mini,setMini] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const scrollTop = document.documentElement.scrollTop
      if(scrollTop>100){
        return setMini(true)
      }
      return setMini(false)
    })
  },[])
  
  function onSubmitHandle(e) {
    e.preventDefault();
  }
  return (
    <div className={`w-full flex justify-center transition-all duration-500 gap-[100px] sticky top-0 z-50 items-center h-[50px] ${mini?"md:md:h-[60px]":"md:h-[120px]"} bg-[#F85606]`}>
      <NavLink to={"/"} className={"h-1/3 md:flex hidden"}>
        <img src={Dlogo} alt="Logo" className='w-full h-full' />
      </NavLink>
      <div className='md:w-2/4 w-[95%] h-[85%] overflow-hidden bg-white md:h-[40px]'>
        <form className='w-full h-full flex' onSubmit={onSubmitHandle} >
          <input type="text" onChange={(e) => {
            setSearch(e.target.value);
          }} className='w-[93%] h-full border-none outline-none px-2' placeholder='Search in Faraz' />
          <button type='submit' className='w-[7%] flex items-center justify-center h-full bg-[#FFE1D2]'>
            <img src={Dsearch} alt="" className='h-[50%]' />
          </button>
        </form>
      </div>
      <img className='md:flex hidden' src={Dcart} alt="" />
    </div>
  )
}

export default Navbar