import React, { useEffect, useState } from 'react'
import ProductOne from "../components/ProductOne"
import CategoriesHeadBox from '../components/CategoriesHeadBox'

function Flashsale() {

  const [flashItem,setFlashItem] = useState([1,2,3,4,5,6,7,8,9,10,11,12])

  const handlScollers = async () => {
    const windowsHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const calc = scrollHeight - (windowsHeight + scrollTop);
    if(window.innerWidth>768){
      if (calc == 0) {
        setTimeout(()=>{
          setFlashItem((prev)=>[...prev,...flashItem])
        })
      }
    }else{
      
    }
  }
  

  useEffect(()=>{
    window.addEventListener("scroll",handlScollers)
  },[])
  
  
  return (
    <div>
      <CategoriesHeadBox />
      <div className='bg-[#EFF0F4] flex flex-wrap mt-2 gap-x-2 gap-y-1 items-center w-full md:w-[95%] m-auto justify-center'>
          {
            flashItem.map((item)=><ProductOne isDiscount={true} isProduct={false} key={item} />)
          }
      </div>
    </div>
  )
}

export default Flashsale