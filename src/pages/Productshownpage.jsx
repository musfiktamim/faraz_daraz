import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import image1 from "../assets/images/image1.webp"
import { BiArrowBack } from 'react-icons/bi'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

function Productshownpage() {
    const {state} = useLocation()
    const [count,setCount] = useState(0)
    const [changed,setChanged] = useState(0)
    useEffect(()=>{
        const containerWidth = document.getElementById("container").clientWidth;
        const itemWidth = document.getElementById("item").clientWidth + 4;
        const consume = containerWidth / itemWidth
        setChanged(-(consume.toFixed()-8))        
    },[])

  return (
    <div>
        <div className='md:w-[90%] gap-x-2 flex m-auto border mt-2'>
            <div className='w-1/4 overflow-hidden bg-green-600 h-full'>
                <img src={image1} className='w-full h-[310px]' alt="" />
                <div id='container' className='w-full flex items-center relative overflow-x-hidden h-16'>
                    <div onClick={e=>count>0?setCount(count-1):setCount(changed)} className='absolute z-30 left-0 h-fit'>
                            <IoChevronBackOutline />
                    </div>
                    <div onClick={e=>count<changed?setCount(count+1):setCount(0)} className='absolute right-0 z-10 h-fit'>
                            <IoChevronForwardOutline />
                    </div>
                    <div className='h-full items-center w-fit flex py-[2px] gap-x-1 transition duration-500 px-1' style={{transform:`translateX(-${count*(56+4)}px)`}} >
                        <div id='item' className='bg-red-500 h-full w-14'></div>
                        <div className='bg-red-500 h-full w-14'></div>
                        <div className='bg-red-500 h-full w-14'></div>
                        <div className='bg-red-500 h-full w-14'></div>
                        <div className='bg-red-500 h-full w-14'></div>
                        <div className='bg-red-500 h-full w-14'></div>
                        <div className='bg-red-500 h-full w-14'></div>
                        <div className='bg-red-500 h-full w-14'></div>
                    </div>
                </div>
            </div>
            <div className='w-3/4 flex  bg-red-600 h-full'>
                <div className='w-3/5 border'></div>
                <div className='w-2/5'></div>
                <div></div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Productshownpage