import React, { useEffect, useState } from 'react'
import CategoriesHeadBox from '../components/CategoriesHeadBox'
import image1 from "../assets/images/image1.webp"
import { BsBack, BsCash, BsFile } from 'react-icons/bs'
import mall from "../assets/images/mall.png"
import { AiOutlineFastBackward, AiOutlineFastForward, AiTwotoneSafetyCertificate } from 'react-icons/ai'
import { SiSharex } from 'react-icons/si'
import { IoLocationOutline, IoShareSocial } from 'react-icons/io5'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import black from "../assets/images/color-black.webp"
import { IoMdCheckmark } from 'react-icons/io'
import { RiAddFill, RiSubtractFill } from 'react-icons/ri'
import { BiInfoCircle, BiLocationPlus } from 'react-icons/bi'
import { ImXing } from 'react-icons/im'
import { NavLink } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import { LuFileHeart } from 'react-icons/lu'
import { PiNumberCircleSeven } from 'react-icons/pi'

function Productshownpage() {

  //dummy
  let isMall = true;
  let isdis = [true,57];
  let prize = 1200; 
  const [isInfoShow,setIsInfoShow] = useState(false)
  const [isReturnShow,setIsReturnShow] = useState(false)

  const [qty,setQty] = useState(1)

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
          <div className='lg:w-2/3 md:w-full w-full lg:flex md:flex h-[420px]'>
                <div className='md:w-2/3 px-2 py-2 w-full h-full'>
                  {/* mall or not  */}
                  {isMall?
                  <div className='w-full h-5'>
                    <img src={mall} className='h-full' alt="" />
                  </div>:null  
                  }
                  {/* name  */}
                  <div className='w-full max-h-32 mt-2 overflow-clip'>
                    <p className='text-2xl'>
                      Kiss Beauty Lip Serum Essence Ultra Moisturising Rose 5ml
                    </p>
                  </div>
                  {/* fav or share  */}
                  <div className='w-full relative'>
                    <div className='flex items-center absolute right-0 gap-x-1'>
                      <button>
                        <IoShareSocial color='gray' size={"1.4rem"} />
                      </button>
                      <button>
                        <MdOutlineFavoriteBorder color='gray' size={"1.4rem"} />
                      </button>
                    </div>
                  </div>
                  {/* rate and answer  */}
                  <div className='flex items-center gap-x-2 mt-5'>
                    {/* rate  */}
                    <div className='flex items-center gap-x-1'>
                      <div className='flex gap-x-[0.5px]'>
                          {
                            [1,2,3,4,5].map((index)=><div className={`${index<=3?"bg-yellow-400":"bg-gray-400"} clip-your-needful-style h-3 w-3`}>

                            </div>)
                          }
                      </div>

                      <p className='text-blue-500 text-xs hover:underline cursor-pointer'>
                        552 Ratings
                      </p>
                    
                    </div>
                    <p className='text-gray-400 font-light'>|</p>
                    {/* answer */}
                    <p className='text-blue-500 text-xs hover:underline cursor-pointer'>177 Answered Questions</p>
                  </div>

                  {/* brand and more brand  */}

                  <div className='flex items-center gap-x-2 mt-3'>
                    {/* brand  */}

                      <p className='text-blue-500 text-xs hover:underline cursor-pointer'>
                      Kiss Beauty
                      </p>
                    <p className='text-gray-400 font-light'>|</p>
                    {/* and more brand */}
                    <p className='text-blue-500 text-xs hover:underline cursor-pointer'>More Makeup from Kiss Beauty</p>
                  </div>
                  {/* discount  */}
                  <div className='flex flex-col mt-7'>
                    <p className='text-[#f57224] text-[30px]'>৳ {((isdis[1]/100)*prize).toFixed()}</p>
                    <p className='flex text-sm gap-x-1'>
                      <p className='line-through text-gray-400'>৳ {prize}</p>
                      <p>{isdis[1]}%</p>
                    </p>
                  </div>

                  {/* color */}

                  <div className='w-full mt-4'>
                      <p className='flex gap-x-2'>
                        <p className='text-gray-500 font-thin'>Color Family</p>
                        <div className='flex flex-col gap-y-2'>
                          <p>Black</p>
                          <div className='flex flex-wrap w-full'>
                            <div className='w-10 h-10 border border-black relative'>
                              <img src={black} className='w-fit h-fit' alt="" />
                              <div className='w-[40%] flex items-center justify-center h-[30%] absolute bottom-0 rounded-ss-full right-0 bg-[#f57224]'>
                                <IoMdCheckmark color='white' size={"0.7rem"} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                  </div>

                  {/* Quantity */}

                  <div className='flex items-center gap-x-4 mt-3'>
                      <p className='text-gray-500'>Quantity</p>
                      <div className='flex items-center justify-center gap-x-3'>
                          <button onClick={()=>qty<=1?setQty(1):setQty(qty-1)} disabled={qty==1?true:false} className={`w-7 h-7 ${qty==1?"cursor-no-drop":"cursor-pointer"} text-gray-500 transition duration-500 hover:bg-gray-300 flex items-center justify-center hover:text-gray-50`}>
                            <RiSubtractFill />
                          </button>
                          <p>{qty}</p>
                          <button onClick={()=>setQty(qty+1)} className='w-7 h-7 text-gray-500 transition duration-500 hover:bg-gray-300 flex items-center justify-center hover:text-gray-50'>
                            <RiAddFill />
                          </button>
                      </div>
                  </div>

                  {/* buy & cart */}

                  <div className='flex w-full h-12 px-2 mt-3 gap-x-3'>
                    <button className='flex items-center text-white font-normal text-[1rem] justify-center w-1/2 bg-[#2ABBE8] hover:bg-[#26ABD4] transition duration-500 rounded-sm'>
                          Buy Now
                    </button>
                    <button className='flex items-center text-white font-normal text-[1rem] justify-center w-1/2 bg-[#F57224] hover:bg-[#D0611E] transition duration-500 rounded-sm'>
                          Add to Cart
                    </button>
                  </div>

                </div>
                {/* delivery */}
                <div className='md:w-1/3 md:flex gap-y-1 flex-col hidden h-full'>
                    {/* info  */}
                    <div className='w-full h-7  items-center relative flex justify-between'>
                        <p className='text-gray-500 font-bold text-xs'>Delivery Options </p>
                        <button className='text-sm text-gray-500 font-bold' onClick={()=>setIsInfoShow(!isInfoShow)}>
                          <BiInfoCircle />
                        </button>
                        {/* info dialog  */}
                          <div className={`absolute transition-[height] ${!isInfoShow?"h-0 overflow-hidden":"h-auto px-4 pt-6 overflow-hidden border"} right-0 w-[200%] top-7 bg-white shadow-sm shadow-[#E1E1E1]`}>
                            <h1 className='text-xl'>Delivery Options</h1>
                            <div className='h-20 mt-3 gap-x-4 flex w-full'>
                              <ImXing size={"1.5rem"} />
                              <div className='h-full flex flex-col justify-between'>
                                {/* find more */}
                                <div className='flex flex-col gap-y-4'>
                                  <p className='flex text-sm gap-x-1'>
                                    <p className=' flex-nowrap font-bold'>Standard Delivery:</p> Enjoy delivery of your order directly to the doorstep!
                                  </p>
                                  <a target='_blank' className='text-blue-500 font-sans' href="https://helpcenter.daraz.com.bd/page/home?spm=a2a0e.pdp_revamp.0.0.53121ab5FcWcFu&pageId=25">
                                  Find out more
                                  </a>
                                </div>
                                <div>
                                </div>
                              </div>
                            </div>
                            {/* cash on dalivery */}
                            <div className='h-auto mt-3 gap-x-4 flex w-full'>
                              <ImXing size={"1.5rem"} />
                                {/* find more */}
                                <div className='flex flex-col gap-y-4'>
                                  <p className='flex text-sm gap-x-1'>
                                    <p className=' flex-nowrap font-bold'>Cash on Delivery Available</p>
                                  </p>
                                <div>
                                </div>
                              </div>
                            </div>      
                          </div>
                    </div>
                    
                    {/* location  */}
                    <div className='w-full mt-2 py-2 gap-x-2 justify-between items-center flex'>
                        <div className='flex items-start gap-x-1'>
                          <IoLocationOutline size={"2rem"}/>
                          <h1 className='text-sm'>Dhaka, Dhaka North, Banani Road No. 12 - 19</h1>
                        </div>
                        <NavLink className={"text-sm text-blue-600"}>CHANGE</NavLink>
                    </div>
                    {/* standart delivery  */}
                    <div className='w-full mt-2 py-2 gap-x-2 justify-between items-center flex'>
                        <div className='flex items-start gap-x-1'>
                          <BsFile size={"1.3rem"}/>
                          <div className='flex flex-col'>
                            <h1 className='text-sm'>Standard Delivery</h1>
                            <p className='text-xs text-gray-500'>Get by 9-12 Dec</p>
                          </div>
                        </div>
                        <p className={"text-sm"}>৳ 60</p>
                    </div>
                    
                    {/* Cash on Delivery Available */}
                    <div className='w-full mt-2 gap-x-2 py-2 justify-between items-center flex'>
                        <div className='flex items-start gap-x-1'>
                          <BsCash size={"1.2rem"}/>
                          <h1 className='text-sm'>Cash on Delivery Available</h1>
                        </div>
                    </div>
                    {/* Return & Warranty   */}
                    <div className='w-full mt-7 text-gray-500 relative text-xs flex justify-between px-1'>
                        <p className='font-bold'>Return & Warranty </p>
                        <button onClick={()=>setIsReturnShow(!isReturnShow)} className='text-sm'>
                          <BiInfoCircle />
                        </button>
                          {/* return & warranty dialog */}
                        <div className={`absolute transition-[height] ${!isReturnShow?"h-0 overflow-hidden":"h-auto px-4 pt-6 overflow-hidden border"} right-0 w-[200%] top-7 bg-white shadow-sm shadow-[#E1E1E1]`}>
                            <h1 className='text-xl'>Delivery Options</h1>
                            <div className='h-20 mt-3 gap-x-4 flex w-full'>
                              <ImXing size={"1.5rem"} />
                              <div className='h-full flex flex-col justify-between'>
                                {/* find more */}
                                <div className='flex flex-col gap-y-4'>
                                  <p className='flex text-sm gap-x-1'>
                                    <p className=' flex-nowrap font-bold'>Standard Delivery:</p> Enjoy delivery of your order directly to the doorstep!
                                  </p>
                                  <a target='_blank' className='text-blue-500 font-sans' href="https://helpcenter.daraz.com.bd/page/home?spm=a2a0e.pdp_revamp.0.0.53121ab5FcWcFu&pageId=25">
                                  Find out more
                                  </a>
                                </div>
                                <div>
                                </div>
                              </div>
                            </div>
                            {/* cash on dalivery */}
                            <div className='h-auto mt-3 gap-x-4 flex w-full'>
                              <ImXing size={"1.5rem"} />
                                {/* find more */}
                                <div className='flex flex-col gap-y-4'>
                                  <p className='flex text-sm gap-x-1'>
                                    <p className=' flex-nowrap font-bold'>Cash on Delivery Available</p>
                                  </p>
                                <div>
                                </div>
                              </div>
                            </div>      
                          </div>
                    </div>

                    {/* 7 days return */}

                    <div className='w-full items-center gap-x-2 mt-3 flex'>
                      <PiNumberCircleSeven color='gray' size={"1.5rem"} />
                      <h1 className='text-sm'>7 Days Returns</h1>
                    </div>
                    {/* warenty */}
                    <div className='w-full items-center gap-x-2 mt-3 flex'>
                      <AiTwotoneSafetyCertificate color='gray' size={"1.5rem"} />
                      <h1 className='text-sm'>Warranty not available</h1>
                    </div>

                </div>
          </div>
      </div>
    </div>
  )
}

export default Productshownpage