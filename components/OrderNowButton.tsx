import React from 'react'
import { Button } from './ui/button'

export default function OrderNowButton() {
  return (
    <Button className="bg-[#2C4B7E] text-white text-2xl rounded-full"
    style={{
        boxShadow : '0px 2px 8px 2px rgba(0, 0, 0, 0.40) inset',
        padding : '38px 63px 39px 62px'
    }}
    >Order Now</Button>
  )
}