import React from 'react'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import OrderNowButton from '@/components/OrderNowButton'
import OrderForm from '@/components/OrderForm'
const Catering = () => {
  return (
    <main>
         <section className="relative aspect-video h-full w-full">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/cateringvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40"></div>{" "}
            {/* Slight overlay for contrast */}
            </div>
            <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(102, 102, 102, 0.00) 0%, #000 100%)",
                    }}
                />
            <div className="absolute left-10 bottom-12 p-6">
                    <span className="text-white text-5xl md:text-6xl font-[--font-playfair] drop-shadow-lg">
                        Catering
                    </span>
                </div>
         </section>

         <section className="flex relative flex-col items-center justify-center h-full w-full min-h-screen overflow-hidden lg:mt-20 md:mt-10 mt-6">
         <div className=" absolute xl:-top-20 top-0 left-0 z-4 w-full h-full inset-0 max-w-8xl overflow-hidden">
                    <FadeIn>
                        <p className="text-start xl:text-[26rem] md:text-[16rem] text-8xl"
                            style={{
                                background: "linear-gradient(180deg, #FFF 0%, #F1F1F1 100%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontFamily: "var(--font-playfair)",
                            }}
                        >SWEET</p>
                    </FadeIn>
                </div>

            <h2 className="text-5xl md:text-7xl font-[--font-playfair] font-500 mb-16 lg:mt-40 md:mt-24 mt-10 z-10 relative">Plan Your Event</h2>

            <div className='flex flex-row z-10 xl:-space-x-2 lg:-space-x-6 -space-x-10  items-center justify-center w-full h-full lg:mt-30 sm:mt-20 lg:px-0 px-6'>
            <div className='relative lg:w-80 sm:w-70 w-50 lg:h-60 h-20 sm:h-30 lg:rounded-l-[4rem] rounded-l-3xl overflow-hidden'>
            <Image src="/pistachio.jpg" alt="Ferro Shake" className='object-cover' fill />
                </div>
                <div className='relative sm:w-140 w-100  z-10 aspect-video rounded-[4rem] overflow-hidden shadow-2xl'>
                <Image src="/strawberrybanana.png" alt="Okyway Kunafa Ice Cream" className='object-cover' fill />
                </div>
                <div className='relative lg:w-80 sm:w-70 w-50 lg:h-60 h-20 sm:h-30 lg:rounded-r-[4rem] rounded-r-3xl overflow-hidden'>
                <Image src="/triplechoccake.png" alt="Triple Chocolate Cake" className='object-cover' fill />
                </div>
            </div>
            
            <p className='text-center text-xl z-10 md:w-[60%] w-[90%] mt-20'>We offer a variety of catered dessert options to complement your special event, from weddings and corporate gatherings to birthday parties and everything in between. We’re easy to work with and happy to customize your order. Don’t see it on the menu? Just ask and we’ll make it for you. Reach out today for a quick, free consultation.</p>
            
            <div className='relative w-full h-full'>
                <div className='w-full h-full relative max-w-[1440px] mt-20  mx-auto flex items-center justify-center z-10 '>
                    <OrderForm />
                </div>
                <div className=" absolute bottom-0 w-full h-full [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]  "
                    style={{
                    }}
                    >
                    <Image src={'/bgwave2.png'} alt="bg wave" fill className=" object-cover aspect-2/1 w-full " />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Catering