import React from 'react'
import menuList from '@/data/info'
const MenuCard = ({title, description, img, price}) => {
  return (
    <div className=' border-white shadow-2xl rounded-2xl w-full bg-black overflow-hidden'>
        <img
        src={img}
        alt="something"
        className='w-full h-60 object-cover'>
        </img>
        <div className='text-white m-4'> 
            <div className='flex justify-between items-center mb-4'>
                <h1 className='font-bold text-2xl'>{title}</h1>
                <p className='text-lg text-cyan-400 font-semibold'>{price}</p>
            </div>
            <p className='text-gray-400'>{description}</p>
        </div>
    </div>
  )
}


const MenuCards = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] max-w-[1240px] mx-auto'>
            {menuList.map((item, index) => {
                return (
                    <MenuCard 
                    key={index}
                    title={item.title} 
                    description={item.description} 
                    img={item.img} 
                    price={item.price} 
                    />
                )
            })}
        </div>
    )
}
 

export default MenuCards;