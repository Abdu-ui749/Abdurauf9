import React from 'react'
const Header = () => {
  return (

    <nav className="flex justify-between items-center p-4 bg-gray-800 " >
      <img className='w-[65px] mt-[0.5px]' src="./src/assets/unnamed.png" alt="" />
      <input className=' ml-[400px] p-[10px] rounded-l-[5px]' placeholder='Type here...' type="text" />
      <img className='w-[45px] mt-[0.5px] rounded-r-[5px] ml-[-195px]' src="./src/assets/logo.png" alt="" />
<ul className='flex text-[20px] gap-[35px]  text-white '>
<a href="#"><li>Home</li></a>
 <a href="#"><li>About</li></a> 
<a href="#"><li>Contact</li></a> 
</ul>
    </nav>
  )
}

export default Header;