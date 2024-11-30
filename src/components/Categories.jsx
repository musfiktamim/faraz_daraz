import cat1 from "../assets/images/category1.jpg"

function Categories() {
    return (
        <div className='flex gap-y-5 md:hover:shadow-lg md:hover:border-2 hover:border-gray-300 flex-col justify-center w-fit h-fit  items-center md:w-[170px] md:h-[170px] border'>
            <img className="w-[60px] md:w-[60%]" src={cat1} alt="" />
            <p className="md:text-sm text-xs text-gray-400" >Router</p>
        </div>
    )
}

export default Categories
