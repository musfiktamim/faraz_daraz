import React, { useEffect, useMemo, useState } from 'react'
import Carousel from '../components/Carousel'
import car1 from "../assets/images/car1.jpg"
import car2 from "../assets/images/car2.jpg"
import car3 from "../assets/images/car3.jpg"
import car4 from "../assets/images/car4.jpg"
import car5 from "../assets/images/car5.jpg"
import car6 from "../assets/images/car6.jpg"
import car7 from "../assets/images/car7.jpg"
import car8 from "../assets/images/car8.jpg"
import car9 from "../assets/images/car9.jpg"
import car10 from "../assets/images/car10.jpg"
import car11 from "../assets/images/car11.jpg"
import car12 from "../assets/images/car12.jpg"
import flashsale from "../assets/images/flashsale.webp"

import { IoArrowBack, IoArrowBackCircleOutline, IoArrowForward, IoArrowForwardCircleOutline, IoArrowForwardOutline, IoPlayForward } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import ProductOne from '../components/ProductOne'
import { BiArrowBack, BiArrowFromBottom } from 'react-icons/bi'
import { MdForward5 } from 'react-icons/md'
import Categories from '../components/Categories'
import icos from "/loading.ico";
import { DNA } from 'react-loader-spinner'

function Home() {
  const carList = [
    {
      "image": car1,
      "label": "car1",
      "index": 1,
    },
    {
      "image": car2,
      "label": "car2",
      "index": 2,
    },
    {
      "image": car3,
      "label": "car3",
      "index": 3,
    },
    {
      "image": car4,
      "label": "car4",
      "index": 4,
    },
    {
      "image": car5,
      "label": "car5",
      "index": 5,
    },
    {
      "image": car6,
      "label": "car6",
      "index": 6,
    },
    {
      "image": car7,
      "label": "car7",
      "index": 7,
    },
    {
      "image": car8,
      "label": "car8",
      "index": 8,
    },
    {
      "image": car9,
      "label": "car9",
      "index": 9,
    },
    {
      "image": car10,
      "label": "car10",
      "index": 10,
    },
    {
      "image": car11,
      "label": "car11",
      "index": 11,
    },
    {
      "image": car12,
      "label": "car12",
      "index": 12,
    },

  ]


  const [flasheSaleT, setFlasheSaleT] = useState(0)
  const [flashSalesItem,setFlashSalesItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  const [flashSalesItem2,setFlashSalesItem2] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

  const [productsDivConsume, setProductsDivConsume] = useState(0)
  const [categoriesDivConsume, setCategoriesDivConsume] = useState(0)
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    const calc1 = flashSalesItem.length - ((window.innerWidth > 768 ? document.getElementById("products").clientWidth : window.innerWidth) / 198) + (window.innerWidth > 768 ? 1 : 0)
    const calc2 = ((window.innerWidth > 768 ? document.getElementById("categories").clientWidth : window.innerWidth) / 170).toFixed();
    setProductsDivConsume(calc1)
    setCategoriesDivConsume(calc2)
  }, [])

  const handlScollers = async () => {
    const windowsHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const calc = scrollHeight - (windowsHeight + scrollTop);
    if(window.innerWidth>768){
      if (calc == 0) {
        setLoading(true);
        setTimeout(()=>{
          setFlashSalesItem2((prev)=>[...prev,...flashSalesItem2])
          setLoading(false)
        },10000)
      }
    }else{
      
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handlScollers);
  }, [])

  return (
    <div className='w-full'>
      <div className='w-[95%] h-[160px] md:h-[400px] m-auto mt-[10px]'>
        <Carousel slides={carList} />
      </div>
      <div className='md:w-[95%] m-auto mt-2 w-full'>
        <h1 className='text-[#424242] md:flex hidden font-medium font-serif text-2xl'>Flash Sale</h1>
        <div className='w-full h-14 border-b flex items-center px-2 justify-between md:px-4 border-[#D5D5D5] '>
          <h1 className='font-medium hidden md:flex text-[#F85606]'>On Sale Now</h1>
          <NavLink to={"/flash_sale"} className={"py-1 hidden md:flex text-[#F85606] px-4 border-[#F85606] border"}>
            SHOP ALL PRODUCTS
          </NavLink>
          <img src={flashsale} alt="" className='md:hidden h-3' />
          <NavLink to={"/flash_sale"} className={"py-1 md:hidden text-[#F85606] text-sm"}>
            SHOP MORE{">"}
          </NavLink>

        </div>
      </div>

      {/* flash sale */}

      <div id='flash_sales' className='w-full h-8 flex items-center justify-between md:pr-12 pr-4'>
        <div></div>
        <div className='gap-x-2 flex'>
          <button onClick={() => setFlasheSaleT(prev => prev > 0 ? prev - 1 : prev)} className='p-1 bg-[#F85606] text-white rounded-full'>
            <IoArrowBack />
          </button>
          <button className='p-1 bg-[#F85606] text-white rounded-full' onClick={() => setFlasheSaleT(prev => productsDivConsume > prev ? prev + 1 : 0)}>
            <IoArrowForward />
          </button>
        </div>
      </div>

      <div id='products' className='md:w-[95%] mt-2 md:gap-7 flex-nowrap flex m-auto items-center overflow-hidden w-full'>
        <div className='flex gap-2 w-auto h-fit transition duration-500 ease-in-out' style={{ transform: `translateX(-${flasheSaleT * 198}px)` }}>
          {
            flashSalesItem.map((item, index) => <ProductOne key={index} />)
          }
          <div className='w-[190px] hover:text-[#F85606] transition duration-300 hover:border-[#F85606] h-[280px] border flex items-center justify-center'>
            <NavLink>SEE MORE</NavLink>
          </div>
        </div>
      </div>
      {/* Categories */}
      <div id='categories' className='m-auto mt-2 w-full h-10 md:w-[95%]'>
          <h1 className='md:text-2xl text-lg text-[#f85606]'>Categoriess</h1>
      </div>
      <div className='md:w-[95%] flex-wrap flex m-auto items-center justify-center overflow-hidden w-full'>
        {
          flashSalesItem.map((item, index) => <Categories />)
        }
      </div>

      <div className='m-auto h-auto mb-96 mt-5 w-full md:w-[95%] '>
        <h1 id='just_for_you' className='md:text-2xl text-lg mb-1 text-[#F85606]'>Just For You</h1>
        <div className='flex flex-wrap gap-2 md:gap-3'>
          {
            flashSalesItem2.map((item, index) => <ProductOne key={index} />)
          }
        </div>
        <div className='w-full h-auto py-5 flex justify-center items-center'>
          {
            loading?
              <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />:null
          }
        </div>
      </div>

      

    </div>
  )
}

export default Home