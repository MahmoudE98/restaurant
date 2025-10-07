import React from 'react'

const Navbar = () => {
  return (
    <nav className=' text-white py-4 px-8 w-full flex items-center z-50 opacity-70 bg-black fixed'>
        <a href="/"><img src='/images/restaurant-building.png' className='w-10 z-10'/></a>
        <ul className="max-w-[1240px] w-full mx-auto px-8 flex justify-between items-center text-xl">
            <li><a href="/" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#menu" className="hover:text-cyan-400">Menu</a></li>
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar