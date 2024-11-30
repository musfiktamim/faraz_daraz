import React, { useEffect, useState } from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

function Carousel({ slides }) {
  const [showcarts, setShowCarts] = useState(0)
  function next() {
    setShowCarts((prev) => slides.length - 1 < prev ? 0 : prev + 1)
  }
  useEffect(() => {
    setTimeout(() => {
      next();
    }, 20000);
  }, [showcarts])
  return (
    <div className='w-full h-full flex items-center justify-center rounded-md overflow-hidden relative'>
      <div className='flex transition ease-in-out duration-1000' style={{ transform: `translateX(-${showcarts * 100}%)` }}>
        {
          slides.map((s) => <img src={s.image} className='w-[100%] h-[100%]' />)
          // md:w-fit md:h-fit w-full h-full
        }
      </div>
      <div className='w-full px-2 flex items-center justify-between absolute z-10'>
        <button onClick={() => setShowCarts((prev) => 0 >= prev ? slides.length - 1 : prev - 1)} className='p-2 outline-[3px] bg-inherit border-black rounded-full hover:bg-white'>
          <IoArrowBack />
        </button>
        <button onClick={next} className='p-2 rounded-full hover:bg-white'>
          <IoArrowForward />
        </button>
      </div>
    </div>
  )
}

export default Carousel