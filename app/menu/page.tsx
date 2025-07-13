import React from 'react'
import Image from 'next/image'
import MenuHeader from '@/components/MenuHeader'
import MenuCategories from '@/components/MenuCategories'
const Menu = () => {
  return (
    <main className='flex flex-col items-center justify-center w-full h-full mt-30 pb-30'>
        {/* <section className='flex flex-col relative items-center justify-center w-full h-full'>
            <div className='flex items-end w-full h-full'>
                <Image src='/lazablack.jpg' alt='bg wave' fill className='object-cover' />
            </div>
            <div className=' flex flex-col space-y-8'>
                <p className='text-center text-5xl font-[--font-playfair] font-500'>Explore Our Menu</p>
                <p className='text-center text-xl w-[60%] self-center'>Handcrafted indulgences that captured the spotlight, each bite 
                a testament to dessert artistry at Laza.</p>
            </div>
        </section> */}
        <MenuHeader />
        <MenuCategories />
    </main>
  )
}

export default Menu