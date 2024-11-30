import React, { useEffect } from 'react'
import NavigationButtons from '../components/NavigationButtons'
import { SiFireship } from 'react-icons/si'
import { FaUserAstronaut } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import { BiCart, BiUser } from 'react-icons/bi'
import { AiOutlineBars } from 'react-icons/ai'
import { } from 'react-icons/ci'
import { BsApp } from 'react-icons/bs'

function Fotbar() {
  const hovered = true; 
  return (
    <div className='w-full md:justify-normal md:flex-col bg-white z-50 bottom-0  fixed md:bottom-2 px-2 flex gap-2 md:h-auto md:w-8 '>
      <NavigationButtons idlink={"flash_sales"} hides={true} Icons={SiFireship} label={"Flash Sale"} />
      <NavigationButtons idlink={"categories"} hides={true} Icons={AiOutlineBars} label={"Categories"} />
      <NavigationButtons idlink={"just_for_you"} hides={true} Icons={FaUserAstronaut} label={"Just For You"} />
      <NavigationButtons idlink={"just_for_you"} hides={true} Icons={FaUserAstronaut} label={"Just For You"} />

      <NavigationButtons idlink={"/"} hides={false} Icons={HiHome} label={"Home"} />
      <NavigationButtons idlink={"/categories"} hides={false} Icons={AiOutlineBars} label={"Categories"} />
      <NavigationButtons idlink={"/cart"} hides={false} Icons={BiCart} label={"Cart"} />
      <NavigationButtons idlink={"/account"} hides={false} Icons={BiUser} label={"Account"} />
    </div>
  )
}

export default Fotbar