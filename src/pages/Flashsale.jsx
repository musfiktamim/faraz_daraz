import React, { useEffect, useState } from 'react'
import { IoIosArrowDown} from 'react-icons/io'
import CategoriesBoxes from '../components/CategoriesBoxes'
import ProductOne from "../components/ProductOne"

function Flashsale() {
  const [flashNavs,setFlashNavs] = useState(false)

  const items = [
    {
      main:"Women's & Girls' Fashion",
      child:[
        {
          main:"Watches"
        },
        {
          main:"Bags",
          child:[
            {
              main:"Wallets"
            },
            {
              main:"Bag Charms & Accessories"
            },
            {
              main:"Crossbody & Shoulder Bags",
              child:[
                {main:"hello1",child:[{main:"hello11"},{main:"hello12"},{main:"hello13"},{main:"hello14"}]},
                {main:"hello2",child:[{main:"hello21"},{main:"hello22"},{main:"hello23",child:[{main:"hello231"},{main:"hello232"}]}]}
              ]
            },
            {
              main:"Tote Bags"
            },
            {
              main:"Wristlets"
            },
            {
              main:"Top Handle Bags"
            },
            {
              main:"Clutches"
            },            
            ]
        },
        {
          main:"Western Wear"
        },
        {
          main:"Muslim Wear"
        },
        {
          main:"Traditional Wear"
        },
        {
          main:"Shoes"
        },
        {
          main:"Innerwear"
        }
      ]
    },
    {
      main:"hello"
    }
  ]

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
      <div className='h-5 bg-white w-full transition duration-700 ease-in-out sticky top-[60px] hidden md:flex md:px-[5%]'>
        <button className={`text-black hidden gap-x-3 px-1 items-center md:flex ${flashNavs?"md:text-[#F85606]":"text-black"} transition`} onMouseOver={e=>setFlashNavs(true)} onMouseLeave={e=>setFlashNavs(false)} >
          <p>Categories</p>
          <IoIosArrowDown style={{transform:`${ flashNavs?"rotate(180deg)":"rotate(0deg)"}`}} className='duration-150 transition' size={"1.3rem"} />
        </button>
        <div className={`absolute bg-white flex-col min-h-max-[70%] mt-5 transition-all duration-500 w-fit z-50 border ${flashNavs?"flex":"hidden"} `} onMouseOver={e=>setFlashNavs(true)} onMouseLeave={e=>setFlashNavs(false)}>
          {
            items.map((item,index)=><CategoriesBoxes key={index} item={item} />)
          }
        </div>
      </div>
      <div className='bg-[#EFF0F4] flex flex-wrap mt-2 gap-x-2 gap-y-1 items-center w-full md:w-[95%] m-auto justify-center'>
          {
            flashItem.map((item)=><ProductOne isDiscount={true} isProduct={false} key={item} />)
          }
      </div>
    </div>
  )
}

export default Flashsale