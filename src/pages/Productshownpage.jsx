import React, { useEffect, useState } from 'react'
import CategoriesHeadBox from '../components/CategoriesHeadBox'
import image1 from "../assets/images/image1.webp"
import { BsBack } from 'react-icons/bs'
import { AiOutlineFastBackward, AiOutlineFastForward } from 'react-icons/ai'

function Productshownpage() {
  const items = [1,2,3,4,5,6,7,8,9,10,11,12]
  const [fottrans,setFottrans] = useState(0);
  const [counts,setCounts] = useState(0);
  useEffect(()=>{
    const containerWidth = document.getElementById("container").clientWidth;
    const itemsWidth = document.getElementById("items").clientWidth;
    const calc1 = (containerWidth / (itemsWidth+4)).toFixed();
    setFottrans((items.length-calc1)+1)
  },[])
  return (
    <div className='lg:w-[95%] m-auto md:[95%] w-full '>
      <CategoriesHeadBox />
      <div className='lg:flex lg:flex-row md:flex-col flex-col'>
          <div className='lg:w-1/3 w-full flex-col flex items-center justify-center md:w-full'>
            <img src={image1} className='h-[350px]' alt="" />
            <hr className='w-[95%] m-auto h-[2px] bg-gray-400 mt-1' />
            <div id='container' className='lg:w-full flex items-center relative overflow-x-hidden md:w-[350px] w-[350px]  m-auto mt-1'>
              <button onClick={()=>counts<=0?setCounts(fottrans):setCounts(counts-1)} className='absolute z-10 left-0 ml-1 mb-1'>
                <AiOutlineFastBackward className='hover:bg-white ' color='gray'/>
              </button>
              <button onClick={()=>fottrans>counts?setCounts(counts+1):setCounts(0)} className='absolute z-10 className=hover:bg-white  mr-1 mb-1 right-0'>
                <AiOutlineFastForward className='hover:bg-white' color='gray' />
              </button>
              <div className='flex w-fit transition duration-700 gap-x-1 h-[70px]' style={{transform:`translateX(-${counts*64}px)`}} >
                {
                  items.map(()=><div id='items' className='w-[60px] border border-black h-[60PX]'>
                  <img src={image1} className='w-full h-full' alt="" />
                </div>)
                }
              </div>
            </div>
          </div>
          <div className='lg:w-2/3 md:w-full w-full h-10 bg-red-600'>

          </div>
      </div>
    </div>
  )
}

export default Productshownpage