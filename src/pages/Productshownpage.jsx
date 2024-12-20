import  { useEffect, useState } from 'react'
import CategoriesHeadBox from '../components/CategoriesHeadBox'
import image1 from "../assets/images/image1.webp"
import { BsCash, BsFile } from 'react-icons/bs'
import mall from "../assets/images/mall.png"
import { AiOutlineFastBackward, AiOutlineFastForward, AiTwotoneSafetyCertificate } from 'react-icons/ai'
import { IoLocationOutline, IoShareSocial } from 'react-icons/io5'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import black from "../assets/images/color-black.webp"
import { IoMdCheckmark } from 'react-icons/io'
import { RiAddFill, RiSubtractFill } from 'react-icons/ri'
import { BiInfoCircle } from 'react-icons/bi'
import { ImXing } from 'react-icons/im'

import { PiNumberCircleSeven } from 'react-icons/pi'

function Productshownpage() {

  //dummy
  let isMall = true;
  let isdis = [true, 57];
  let prize = 1200;
  const [isInfoShow, setIsInfoShow] = useState(false)
  const [isReturnShow, setIsReturnShow] = useState(false)
  const [isShowDialogOfAddress, setIsShowDialogOfAddress] = useState(false)
  const ratings = 19
  const rate = [14,2,1,1,1]
  const [rateTotalRate,setRateTotalRate] = useState(0);

  







  

  const [CityName, setCityName] = useState([
    {
      main: "Barishal",
      child: [
        {
          main: "Barguna",
          child: [
            {main:"Barguna - Amtoli"},
            {main:"Barguna - Bamna"},
            {main:"Barguna Government College"},
            {main:"Barguna Sadar"},
            {main:"Barguna Taltali"},
            {main:"Barguna West Police Farry"},
            {main:"Betagi"},
            {main:"Darul Ulum"},
            {main:"Kakchira"},
            {main:"Nali Bandar"},
            {main:"Patharghata"}
          ]
        },
        {main:"Barishal - Agailjhara"},
        {main:"Barishal - Babuganj"},
        {main:"Barishal - Bakerganj"},
        {main:"Barishal - Gouranadi"},
        {main:"Barishal - Hizla"},
        {main:"Barishal - Mehendiganj"},
        {main:"Barishal - Muladi"},
        {main:"Barishal - Town"},
        {main:"Barishal - Uzirpur"},
        {main:"Bhola"},
        {main:"Jhalokati"},
        {main:"Patuakhali"},
        {main:"Pirojpur"}
      ]
    },
    {
      main: "Chattogram"
    },
    {
      main: "Dhaka"
    },
    {
      main:"Khulna"
    },
    {
      main:"Mymensingh"
    },
    {
      main:"Rajshahi"},
    {
      main:"Rangpur"
    },
    {
      main:"Sylhet"
    },
  ])

  console.log(CityName)
  
  const [address, setAddress] = useState([]);

  console.log(address)

  const [filteredCity,setFilteredCity] = useState()

  const [qty, setQty] = useState(1)

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [fottrans, setFottrans] = useState(0);
  const [counts, setCounts] = useState(0);
  useEffect(() => {

    if (address.length == 0) {
      setFilteredCity(CityName);
    } else if (address.length == 1) {
      const filtaredcitys = CityName.filter(({main})=>address[address.length-1]==main)[0].child
      if (filtaredcitys) {
        setFilteredCity(filtaredcitys)
      } else {
        setFilteredCity(CityName);
        setIsShowDialogOfAddress(false)
      }
      // setFilteredCity(filtaredcitys)
    } else if (address.length == 2) {
      const filtaredcitys = filteredCity.filter(({ main }) => address[address.length - 1] == main)[0].child;
      if (filtaredcitys.length != 0) {
        setFilteredCity(filtaredcitys)
      } else {
        setFilteredCity(CityName)
        setIsShowDialogOfAddress(false)
      }
    } else {
      setFilteredCity(CityName)
      setIsShowDialogOfAddress(false)
    }
  }, [address])
  
  
  useEffect(() => {
    const containerWidth = document.getElementById("container").clientWidth;
    const itemsWidth = document.getElementById("items").clientWidth;
    const calc1 = (containerWidth / (itemsWidth + 4)).toFixed();
    setFottrans((items.length - calc1) + 1)
    rate.map((item,index)=>setRateTotalRate((prev)=>prev+((5-index)*item)))
    setRateTotalRate((prev)=>(prev/ratings).toFixed(1))
  }, [])

  function ratesPer(star,alrate){
    alert(((star/alrate)*100).toFixed())
    return ((star/alrate)*100).toFixed()
  }

  return (
    <div className='lg:w-[95%] m-auto md:[95%] w-full '>
      <CategoriesHeadBox />
      <div className='lg:flex lg:flex-row h-auto mb-10 md:flex-col flex-col'>
        <div className='lg:w-1/3 w-full flex-col flex items-center justify-center md:w-full'>
          <img src={image1} className='h-[350px]' alt="" />
          <hr className='w-[95%] m-auto h-[2px] bg-gray-400 mt-1' />
          <div id='container' className='lg:w-full flex items-center relative overflow-x-hidden md:w-[350px] w-[350px]  m-auto mt-1'>
            <button onClick={() => counts <= 0 ? setCounts(fottrans) : setCounts(counts - 1)} className='absolute z-10 left-0 ml-1 mb-1'>
              <AiOutlineFastBackward className='hover:bg-white ' color='gray' />
            </button>
            <button onClick={() => fottrans > counts ? setCounts(counts + 1) : setCounts(0)} className='absolute z-10 className=hover:bg-white  mr-1 mb-1 right-0'>
              <AiOutlineFastForward className='hover:bg-white' color='gray' />
            </button>
            <div className='flex w-fit transition duration-700 gap-x-1 h-[70px]' style={{ transform: `translateX(-${counts * 64}px)` }} >
              {
                items.map((item) => <div id='items' key={item} className='w-[60px] border border-black h-[60PX]'>
                  <img src={image1} className='w-full h-full' alt="" />
                </div>)
              }
            </div>
          </div>
        </div>
        <div className='lg:w-2/3 md:w-full w-full lg:flex md:flex h-[420px]'>
          <div className='md:w-2/3 px-2 py-2 w-full h-full'>
            {/* mall or not  */}
            {isMall ?
              <div className='w-full h-5'>
                <img src={mall} className='h-full' alt="" />
              </div> : null
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
                    [1, 2, 3, 4, 5].map((item,index) => <div key={index} className={`${item <= rateTotalRate ? "bg-yellow-400" : "bg-gray-400"} clip-your-needful-style h-3 w-3`}>

                    </div>)
                  }
                </div>

                <p className='text-blue-500 text-xs hover:underline cursor-pointer'>
                  {ratings} Ratings
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
              <p className='text-[#f57224] text-[30px]'>৳ {((isdis[1] / 100) * prize).toFixed()}</p>
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
                <button onClick={() => qty <= 1 ? setQty(1) : setQty(qty - 1)} disabled={qty == 1 ? true : false} className={`w-7 h-7 ${qty == 1 ? "cursor-no-drop" : "cursor-pointer"} text-gray-500 transition duration-500 hover:bg-gray-300 flex items-center justify-center hover:text-gray-50`}>
                  <RiSubtractFill />
                </button>
                <p>{qty}</p>
                <button onClick={() => setQty(qty + 1)} className='w-7 h-7 text-gray-500 transition duration-500 hover:bg-gray-300 flex items-center justify-center hover:text-gray-50'>
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
              <button className='text-sm text-gray-500 font-bold' onClick={() => setIsInfoShow(!isInfoShow)}>
                <BiInfoCircle />
              </button>
              {/* info dialog  */}
              <div className={`absolute transition-[height] ${!isInfoShow ? "h-0 overflow-hidden" : "h-auto px-4 pt-6 overflow-hidden border"} right-0 w-[200%] top-7 bg-white shadow-sm shadow-[#E1E1E1]`}>
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
            <div className='w-full mt-2 py-2 gap-x-2 justify-between relative items-center flex'>
              <div className='flex items-start gap-x-1'>
                <IoLocationOutline size={"2rem"} />
                {
                  address.length!=0?
                  <h1 className='text-sm'>{address.length > 0 ? address[0] : null}{address.length > 1 ? " , "+ address[1] : null}{ address.length > 2 ? " , " + address[2] : null}</h1>
                  :null
                }
              </div>
              <button onClick={() =>setIsShowDialogOfAddress(!isShowDialogOfAddress)} className={"text-sm text-blue-600"}>CHANGE</button>
              {
                isShowDialogOfAddress ? <div className='w-full transition-[height] duration-1000 ease-in-out pt-2 flex flex-col absolute z-10 max-h-96 shadow-md shadow-gray-400 bg-white top-12'>
                  <div className='w-full flex h-1/5 flex-col px-2'>
                    <h1 className='text-sm  text-gray-400'>Select Address</h1>
                    <input type="tel" onChange={e=>e.target.value!=""?setFilteredCity(CityName.filter(({main})=>main.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))):setFilteredCity(CityName)} placeholder='Select Address' className='w-full overflow-x-hidden m-auto text-sm mt-3 h-11 border-[1px] focus:border-blue-500 px-2 outline-none rounded-md border-gray-400 ' />
                  </div>
                  <div className='w-full max-h-full flex flex-col overflow-y-auto'>
                    
                    {
                      filteredCity.map(({main},index)=><button onClick={()=>( address.length<3?setAddress(prev=>[...prev,main]):setAddress([main]))} key={index} className='w-full flex items-center justify-start py-3 px-2 text-sm font-normal font-serif'>
                      {main}
                    </button>)
                    }
                  </div>
                 </div> :null
              }
            </div>
            {/* standart delivery  */}
            <div className='w-full mt-2 py-2 gap-x-2 justify-between items-center flex'>
              <div className='flex items-start gap-x-1'>
                <BsFile size={"1.3rem"} />
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
                <BsCash size={"1.2rem"} />
                <h1 className='text-sm'>Cash on Delivery Available</h1>
              </div>
            </div>
            {/* Return & Warranty   */}
            <div className='w-full mt-7 text-gray-500 relative text-xs flex justify-between px-1'>
              <p className='font-bold'>Return & Warranty </p>
              <button onClick={() => setIsReturnShow(!isReturnShow)} className='text-sm'>
                <BiInfoCircle />
              </button>
              {/* return & warranty dialog */}
              <div className={`absolute transition-[height] ${!isReturnShow ? "h-0 overflow-hidden" : "h-auto px-4 pt-6 overflow-hidden border"} right-0 w-[200%] top-7 bg-white shadow-sm shadow-[#E1E1E1]`}>
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

      <div className='w-full flex flex-col gap-y-3'>
        <h1 className='text-xl font-normal font-sans'>Product details of  {"Kiss Beauty Lip Serum Essence Ultra Moisturising Rose 5ml"} </h1>
        <div className='grid sm:grid-cols-1 sm:px-1 lg:grid-cols-2 gap-1'>
              {
                [1,2,3,4].map((item)=><li className='list-item text-sm'>
                ALL-AROUND PROTECTION: Provide your Apple Airpods Pro with protection all round. Keep your device free from scratches and looking new. Shockproof silicone material will provide the defense against knocks and drops. Complete 360° coverage
                </li>)
              }
        </div>
      </div>

      <div className='w-full flex flex-col gap-y-3 mt-5'>
        <h1 className='text-xl font-normal font-sans'>Specifications of {"Kiss Beauty Lip Serum Essence Ultra Moisturising Rose 5ml"} </h1>
        <div className='grid sm:grid-cols-1 sm:px-1 lg:grid-cols-2 gap-1 text-sm'>
              {
                [1,2,3,4].map((item)=><div className='flex flex-col '>
                  <p className='text-gray-400'>{"Brand"}</p>
                  <p>{"No Brand"}</p>
                </div>)
              }
        </div>
      </div>
      <div className='w-full flex flex-col gap-y-3 mt-5'>
        <h1 className='text-xl font-normal font-sans'>Ratings & Reviews of {"Kiss Beauty Lip Serum Essence Ultra Moisturising Rose 5ml"} </h1>
        <div className='flex gap-10 items-center mt-5'>
            <div className='flex flex-col'>

              <p className='text-5xl flex'>
                {rateTotalRate}
                <sub className='text-3xl text-gray-500 font-sans'>/5</sub>
              </p>
              <div className='flex'>
                {[1,2,3,4,5].map((item,index)=><div key={index} className={`${item <= rateTotalRate  ? "bg-yellow-400" : "bg-gray-400"} clip-your-needful-style h-8 w-8`}></div>)}
              </div>
              <p className='text-sm font-serif text-gray-400'>{ratings} Ratings</p>

            </div>
            <div className='flex gap-x-4'>
              <div className='flex flex-col gap-y-2'>
                {
                  [1,2,3,4,5].map((item,index)=><div key={index} className='flex gap-x-2 gap-y-2'>
                      <Rates times={item} />
                  </div>)
                }


              </div>
              <div className='flex flex-col gap-y-1'>
                  {
                    rate.map((items,index)=><RateLine key={index} rate={items} alrate={ratings} />
                    )
                  }
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}


function Rates({times}){
  const [rate,setRate] = useState([])
  useEffect(()=>{
      for (let index = 0; index < (6-times); index++) {
        const element = index;
        setRate((prev)=>[...prev,element])
      }
  },[times])
  return(
    <div className='flex gap-x-1 h-4'>
      {
        rate.map((item)=><div className={`bg-yellow-400 clip-your-needful-style h-4 w-4`}></div>)
      }
    </div>
  )
  
}
function RateLine({rate,alrate}){
  const [per,setPer] = useState(((rate/alrate)*100).toFixed());
  console.log(per)
  return(<div className='flex gap-x-2'>
    <div className={`w-56 h-4 bg-gray-300 relative after:left-0 after:absolute after:contents-' ' ${per?`w-[${per}%]`:"w-0%"} after:bg-yellow-500 after:h-[100%] `}></div>
    <p className='text-sm'>{rate}</p>
  </div>)
}

export default Productshownpage