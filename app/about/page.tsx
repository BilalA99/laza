import React from 'react'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import OrderNowButton from '@/components/OrderNowButton'
import FAQSection from '@/components/FAQSection'
const AboutUs = () => {
  return (
    <main className='flex flex-col items-center justify-center w-full'>
        {/* Hero Section */}
       <section className='flex max-w-[1440px] flex-col items-start w-full mt-32'>
            <div className='relative inset-0 w-[75%] h-130'>
                <Image src="/bluelazaheader.png" alt="Blue Laza" fill className='object-cover object-center' />
            </div>
            <div className='absolute top-1/4 -right-10 w-200 h-180'>
                <Image src="/dubaichoclateheader.png" alt="Dubai Chocolate" fill className='object-cover object-center' />
            </div>

           <div className='flex flex-row items-start space-x-6  w-full px-20'>
                <div className='relative w-45 h-80 mt-6 rounded-full overflow-hidden'>
                    <Image src="/strawberrysmoothie.png" alt="Strawberry Smoothie" fill className='object-cover object-center' />
                </div>
                <div className='flex flex-col items-start justify-center w-[full] text-black space-y-4'>
                    <div>
                        <p className='text-lg '>WE ARE OPEN FROM<br/>
                        <span className=' text-[#2C4B7E] font-bold'> Sunday - Saturday</span>: 2:00pm - 2:00am</p>
                    </div>
                    <div className="bg-[#234B82] w-20 h-[3px] my-4" />
                    <p className='text-lg w-[50%]'>
                    Welcome to Laza Café, where dessert isn’t just a treat, it’s an experience.
                    </p>

                </div>
           </div>
       </section>

       <section className="flex relative flex-col items-center justify-center w-full h-full max-w-[1440px] overflow-hidden my-20">
            <div className=" absolute -top-32 left-0 z-4 w-full h-full inset-0 max-w-8xl overflow-hidden">
                <FadeIn>
                    <p className="text-start xl:text-[26rem]"
                    style={{
                        background: "linear-gradient(180deg, #FFF 0%, #F1F1F1 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "var(--font-playfair)",
                    }}
                    >ABOUT</p>
                </FadeIn>
            </div>
            <div className=" absolute bottom-12 w-full overflow-hidden h-[80%] [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]  "
            style={{
            }}
            >
                <Image src={'/bgwave.jpg'} alt="bg wave" fill className=" object-cover" />
            </div>
            <h2 className="text-5xl md:text-7xl font-[--font-playfair] font-500 mb-16 mt-40 z-10 relative">Why People Love Us</h2>
            <div className='flex flex-row z-10 -space-x-2 items-center justify-center w-full h-full mt-30'>
                <div className='relative w-80 h-60 rounded-l-[4rem] overflow-hidden'>
                    <Image src="/ferroshake.jpg" alt="Ferro Shake" className='object-cover' fill />
                </div>
                <div className='relative w-140 z-10 aspect-video rounded-[4rem] overflow-hidden shadow-2xl'>
                    <Image src="/desserts/ockywaykunafaicecream.png" alt="Okyway Kunafa Ice Cream" className='object-cover' fill />
                </div>
                <div className='relative w-80 h-60 rounded-r-[4rem] overflow-hidden'>
                    <Image src="/triplechoccake.jpg" alt="Triple Chocolate Cake" className='object-cover' fill />
                </div>
            </div>
            <p className='text-center text-xl z-10 w-[60%] mt-20 '>Laza is your go-to destination for playful, indulgent desserts with a luxe twist. From signature kunafa and sweet crepes to handcrafted matcha drinks, creamy milkshakes, and rich coffee, every item is made to delight. Whether you're stopping by for a late-night treat or a midday pick-me-up, Laza delivers flavor, fun, and Instagram-worthy vibes daily until 2 AM.</p>
            <div className='pb-50 z-10 mt-20'><OrderNowButton /></div>
        </section>
        <section className="flex relative flex-col items-center justify-center w-full h-full max-w-[1440px] overflow-hidden">
            <div className=" absolute -top-32 left-0 z-4 w-full h-full inset-0 max-w-8xl overflow-hidden">
                <FadeIn>
                    <p className="text-end xl:text-[26rem]"
                    style={{
                        background: "linear-gradient(180deg, #FFF 0%, #F1F1F1 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "var(--font-playfair)",
                    }}
                    >INFO</p>
                </FadeIn>
            </div>


            <div className='flex flex-row items-center justify-center w-full h-full mt-40'>   
                <FAQSection />
            </div>
        </section>

    </main>
  )
}

export default AboutUs