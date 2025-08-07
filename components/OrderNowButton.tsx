import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
const link = `https://order.toasttab.com/online/locations/e4e3218e-7ad2-411f-a156-ec157a00652f/default`

export default function OrderNowButton() {
  return (
    <Link href={link} className="bg-[#2C4B7E] hover:bg-[#2C4B7E] text-white sm:text-2xl hover:scale-105 transition-all duration-300 text-xl rounded-full w-fit h-fit sm:px-6 px-4 sm:py-4 py-2"
    style={{
        boxShadow : '0px 2px 8px 2px rgba(0, 0, 0, 0.40) inset',
    }}
    >Order Now</Link>
  )
}