import React from 'react'
import cube from "../assets/images/cube.webp"

function ProductOne({isProduct=true,isDiscount=true}) {
  const percentage=3
  // h-[280px]
  return (
    <div className='w-[190px] h-auto  hover:shadow-lg hover:border-b hover:border-l hover:border-r border-gray-300 mb-2 shadow-gray-500'>
      <img src={cube} className='w-full h-[190px]' alt="" />
      <div className='h-[40px] w-full px-1  overflow-clip'>
        <p className=' font-semibold hover:text-[#F85606] cursor-pointer transition duration-200 select-none hover:underline break-words font-[Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Microsoft YaHei", sans-serif] text-sm'>Baseus Bowie MA10 Wireless IPX6 Waterproof Bluetooth Earphone With Active Noise Cancellation Super Long Battery Life Wireless Earbuds Premium Sound With 4 ENC Mics</p>
      </div>
      <div className='w-full px-1 h-fit'>
        <p className='text-lg flex items-center text-[#F85606] select-none'><p className='text-xl mr-1'>৳</p><p>2,190</p>{isDiscount?<p className='ml-2 text-gray-600 text-xs'>-28%</p>:null}</p>
        {
          isProduct?
          <div className='mb-1 flex gap-x-[2px]'>
            {
              [1,2,3,4,5].map((index)=><div className={`${isDiscount? index<=percentage?"bg-yellow-400":"bg-gray-400":"bg-gray-400"} clip-your-needful-style h-3 w-3`}>

              </div>)
            }
          </div>:null
        }
      </div>
      
    </div>
  )
}

export default ProductOne