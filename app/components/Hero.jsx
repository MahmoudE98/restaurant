import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[600px] text-white flex flex-row items-center justify-center px-4 gap-40'> 
    <div className='flex flex-col max-w-[600px]'>
        <h1 className='text-cyan-500 text-4xl font-extrabold mb-5'>Saporem Experire</h1>
        <p className='text-gray-200 mb-5 '> Gustus qui delectat, convivium quod meminisse velis.  
          Ubi cibus, amor et convivium in unum conveniunt.  
          Sapores ex toto orbe terrarum in uno loco congregantur,  
          ut sensus tuos excitent et memoriam suavis epulae relinquant.  
          Experire artem coquinae, ubi omnis gustus est narratio.</p>
    <button className='border-red-50 bg-amber-600 w-[150px] p-2 rounded-full font-semibold '>Order From Menu</button>
    </div>
    <img src='/images/chef2.png' className='hidden lg:block opacity-95 w-[480px]'/>
    
    </div>
  )
}

export default Hero