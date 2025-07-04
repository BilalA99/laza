import EmblaCarousel from "@/components/carousel/emblacarousel";
import DessertMenu from "@/components/DessertMenu";
import FadeIn from "@/components/FadeIn";
import OrderNowButton from "@/components/OrderNowButton";
import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import desserts from "@/components/carousel/dessertData";
import Reveal from "@/components/Reveal";
import Toppings from "@/components/icons/Toppings";
import { products } from "@/components/data/products";
import MenuCard from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import React from "react";
import TestimonialsCarousel from "@/components/Testimonials";

const OPTIONS: EmblaOptionsType = { loop: true, watchResize: false, align: 'center', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const categories = [
  "Kunafa",
  "Crepes",
  "Waffles",
  "Lukmate",
  "Churro Bites Online",
  "Mini Puff",
  "Dip Sticks",
  // "Cakes",
  // "Cups",
]


export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
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
            <source src="/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>{" "}
          {/* Slight overlay for contrast */}
        </div>
        <div className="relative z-10 flex flex-col items-start px-20 space-y-8 justify-center h-full">
          <FadeIn className="w-fit h-fit"><Image src="/lazacafehero.png" alt="Laza Desserts" width={400} height={400} /></FadeIn>
          <FadeIn className="w-fit h-fit">
            <p className="text-white ml-3 text-3xl">
              WE ARE OPEN FROM <br />
              <span className="font-bold">Sunday - Saturday</span>: 2:00pm - 2:00am
            </p>
          </FadeIn>
          <FadeIn className="w-fit h-fit"><div className="ml-4"><OrderNowButton /></div></FadeIn>
        </div>
      </section>

      {/* Most Wanted Section */}
      <section className="relative aspect-video h-full w-full overflow-hidden px-20 border border-blue-600" style={{ minHeight: 500 }}>
        {/* Gradient + Image background */}
        <FadeIn className="relative ">
          <div className="absolute top-0 w-225 h-200 -z-20 right-20 border "
          >
            <Image src="/lazablack1.png" alt="Laza Desserts" fill className="w-full h-full object-cover" />
          </div>
        </FadeIn>
        <div className="flex flex-col items-center justify-start w-full h-full space-y-10 px-20 pt-40 z-10">
          <p className="font-[--font-playfair] text-black text-7xl">Most Wanted of the Week</p>
          <p className=" text-black text-xl w-[50%] text-center ">Handcrafted indulgences that captured the spotlight, each bite<br />
            a testament to dessert artistry at <span className="text-[#2C4B7E] font-[--font-playfair]">Laza.</span></p>
        </div>
      </section>


      {/* <div className="flex flex-row items-center justify-center w-full">
        <EmblaCarousel slides={desserts} options={OPTIONS} />
      </div> */}

      {/* Kunafa Section */}
      <section className="flex relative flex-row items-center justify-center w-full">
        <div className=" absolute top-0 left-0 w-full h-full inset-0 max-w-8xl overflow-hidden">
          <FadeIn>
            <p className="text-center xl:text-[26rem]"
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #F1F1F1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-playfair)",
              }}
            >KUNAFA</p>
          </FadeIn>
        </div>
        <div className=" absolute bottom-0 w-full h-100 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]  "
          style={{
          }}
        >
          <Image src={'/bgwave.jpg'} alt="bg wave" fill className="" />
        </div>
        {/* Signature Kunafa Section */}
        <section className=" max-w-[1440px] overflow-hidden  mx-auto flex flex-col md:flex-row items-center justify-center gap-x-10 border-black w-full mt-60 py-24 px-12 relative">

          {/* Left: Large circle image with overlapping logo */}
          <div className="relative flex-shrink-0 flex items-center justify-center w-[50%] h-fit aspect-square" >
            <div className="rounded-full relative overflow-hidden w-full h-full border bg-gray-200 flex items-center justify-center">
              <Image src="/sigkunafa.png" alt="Signature Kunafa" fill className="object-cover object-center" />
            </div>
            {/* Overlapping logo circle */}
            <div className="absolute -bottom-10 left-15 rounded-full overflow-hidden w-55 h-55 border-4 border-white bg-white flex items-center justify-center shadow-lg">
              <Image src="/lazabluelogo.png" alt="Laza Logo" fill className="object-cover" />
            </div>
          </div>

          {/* Right: Text and small circles */}
          <div className="flex-1 flex flex-col justify-center items-start md:pl-16 mt-12 md:mt-0">
            <h2 className="text-4xl md:text-6xl  mb-6 font-[--font-playfair] leading-tight">Our Signature<br /> Kunafa</h2>
            <p className="text-lg md:text-xl text-black mb-10 max-w-xl leading-tight w-[80%] ">
              Indulge in our signature Kunafa — a golden, crispy layer of shredded phyllo wrapped around a rich, creamy cheese center, delicately soaked in rose-scented syrup. Each bite offers the perfect balance of texture and sweetness, finished with a touch of crushed pistachios. Served warm, it's our most decadent dessert and a timeless Middle Eastern classic reimagined with Laza Cafe elegance.
            </p>
            <div className="flex flex-row gap-8 mt-2 w-full">
              {['/topping1.png', '/topping2.png', '/topping3.png'].map((i) => (
                <Reveal className="w-full py-5" key={i}>
                  <div key={i} className="flex flex-col items-center relative w-full">
                    <div className="rounded-full overflow-hidden w-30 aspect-square relative  flex items-center justify-center">
                      <Image src={i} alt="Topping" fill className="object-cover object-center" />
                    </div>
                    <span className="text-xs text-gray-500 mt-2 rotate-[-10deg] absolute -bottom-5 left-25">
                      <Toppings />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Menu Section */}
      <section className="flex relative flex-row items-center justify-center w-full">
        <div className=" absolute top-0 left-0 w-full h-full inset-0">
          <FadeIn>
            <p className="text-start xl:text-[26rem]"
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #F1F1F1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-playfair)",
              }}
            >MENU</p>
          </FadeIn>
        </div>
        <div className=" absolute bottom-0 w-full h-100 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]  "
          style={{
          }}
        >
          <Image src={'/bgwave.jpg'} alt="bg wave" fill className="" />
        </div>

        <section className=" max-w-[1440px] overflow-hidden  mx-auto flex flex-col items-center justify-center gap-x-10 border-black w-full mt-40 py-24 px-20 relative">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-4xl md:text-7xl  mb-6 font-[--font-playfair] leading-tight">Menu</p>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full relative">
            {/* Scrollable categories */}
            <div
              className="flex flex-row gap-8 overflow-x-auto no-scrollbar w-full px-4"
              style={{ scrollBehavior: 'smooth' }}
              id="category-scroll-container"
            >
              {categories.map((category, idx) => (
                <div key={category} className="flex flex-col items-center justify-center min-w-max">
                  <p className={`text-xl md:text-2xl  text-black leading-tight hover:text-[#2C4B7E] hover:cursor-pointer font-semibold px-4 py-2 ${idx === 0 ? 'text-[#2C4B7E] underline underline-offset-4' : ''}`}
                    style={{
                      fontFamily: "var(--font-roboto)",
                    }}
                  >{category}</p>
                </div>
              ))}
            </div>
            {/* Scroll arrow button */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 "
              style={{ display: 'block' }}
              // onClick={() => {
              //   const el = document.getElementById('category-scroll-container');
              //   if (el) el.scrollBy({ left: 200, behavior: 'smooth' });
              // }}
              aria-label="Scroll categories right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 63 67" fill="none">
                <rect width="63" height="67" fill="white" />
                <circle cx="31.5" cy="35.5" r="30.5" fill="#2C4B7E" stroke="#2C4B7E" stroke-width="2" />
                <path d="M48.7071 36.7071C49.0976 36.3166 49.0976 35.6834 48.7071 35.2929L42.3431 28.9289C41.9526 28.5384 41.3195 28.5384 40.9289 28.9289C40.5384 29.3195 40.5384 29.9526 40.9289 30.3431L46.5858 36L40.9289 41.6569C40.5384 42.0474 40.5384 42.6805 40.9289 43.0711C41.3195 43.4616 41.9526 43.4616 42.3431 43.0711L48.7071 36.7071ZM15 36V37H48V36V35H15V36Z" fill="white" />
              </svg>
            </button>
          </div>

          <section className="grid grid-cols-3 items-center justify-center my-20 gap-10 gap-y-20 w-full h-full">
            {products.map((product) => (
              <MenuCard key={product.id} product={product} />
            ))}
          </section>
        </section>

      </section>

      {/* Our Story Section */}
      <section className="flex relative flex-row items-center justify-center w-full">
        <div className=" absolute top-0 left-0 w-full h-full inset-0">
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
        <div className=" rotate-180 absolute -bottom-0 w-full h-100 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]  "
          style={{
          }}
        >
          <Image src={'/bgwave.jpg'} alt="bg wave" fill className="" />
        </div>

        <section className="max-w-[1440px]  mx-auto flex flex-col items-center justify-center gap-x-10 border-black w-full mt-50 py-24 relative">
          <div className="flex flex-col items-start w-full h-full">
            <p className="text-4xl md:text-7xl  mb-6 font-[--font-playfair] leading-tight">Our Story</p>
          </div>

          <div className="flex flex-row items-start justify-between w-full h-full gap-x-4">
            <div className="flex flex-row items-center justify-center w-[80%] h-200 aspect-square ">
              <div className="text-xl mb-6 leading-tight w-[25%] font-[--font-roboto]"
                style={{
                  fontFamily: "var(--font-roboto)",
                }}
              >
                <div className="bg-[#234B82] w-20 h-1 my-4" />
                <Reveal className="w-full"><p>Indulge in our signature Kunafa — a golden, crispy layer of shredded phyllo wrapped around a rich, creamy cheese center, delicately soaked in rose-scented syrup. pistachios.</p></Reveal>
              </div>
              <div className="flex flex-row items-start aspect-2/3 h-250 relative px-4 ">
                <Image src="/drinks/brownieshake.png" alt="brownie shake" fill className="object-contain object-center" />
                {/* Overlapping logo circle */}
                <div className="absolute top-10 left-15 rounded-full overflow-hidden w-55 h-55 border-4 border-white bg-white flex items-center justify-center shadow-lg">
                  <Image src="/lazabluelogo.png" alt="Laza Logo" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[22%] h-full space-y-20">
              <div className="flex flex-row items-center justify-center w-50 h-90 relative rounded-full overflow-hidden"
                style={{
                  aspectRatio: '456.77/700.00',
                }}
              >
                <Image src="/drinks/matcha.jpg" alt="Matcha Latte" fill className="object-cover object-center" />
              </div>

              <div className="text-xl mb-6  leading-tight"
                style={{
                  fontFamily: "var(--font-roboto)",
                }}
              >
                <div className="bg-[#234B82] w-20 h-1 my-4" />
                <Reveal className="w-full"><p>Indulge in our signature Kunafa — a golden, crispy layer of shredded phyllo wrapped around a rich, creamy cheese center, delicately soaked in rose-scented syrup. pistachios.</p></Reveal>
              </div>
            </div>

          </div>
        </section>
      </section>

      {/* Love / Join Us Section */}
      <section className="flex relative items-center justify-center mb-30 w-full">
        <div className=" absolute -top-50 left-0 w-full ">
          <FadeIn className="">
            <p className="text-end xl:text-[26rem]"
              style={{
                background: 'linear-gradient(180deg, #FFF 0%, #F1F1F1 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'var(--font-playfair)',
              }}
            >LOVE</p>
          </FadeIn>
        </div>
        <div className=" absolute top-1/2 left-0  w-full h-100 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)]  "
          style={{
          }}
        >
          <Image src={'/bgwave.jpg'} alt="bg wave" fill className="" />
        </div>
        {/* Dubai Chocolate Image */}
        <div className="flex flex-row absolute right-0 top-50 items-end justify-end w-full h-120 z-10">
          <div className="w-100 h-full relative">
            <Image src="/dubaichocalate.png" alt="Dubai Chocolate" fill className="object-contain object-center" />
          </div>
        </div>
        {/* Ice Cream Image */}
        <div className="flex flex-row absolute left-0 -bottom-5 items-start justify-start w-full h-144">
          <div className="w-[50%] h-full relative mt-20">
            <Image src="/icecream.png" alt="Dubai Chocolate" fill className="object-cover object-center" />
            <div className="absolute -top-20 right-1/5 rounded-full overflow-hidden w-55 h-55 border-4 border-white bg-white flex items-center justify-center shadow-lg">
              <Image src="/lazabluelogo.png" alt="Laza Logo" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Join Us Content */}
        <section className="max-w-[1440px] mx-auto flex flex-col items-center justify-center w-full mt-32 z-10 px-10 py-24 relative">
          <div className="flex flex-row w-full h-full ">
            <div className="flex flex-col items-start justify-center w-full h-full">
              <p className="text-[#2C4B7E] text-xl font-[500]  mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-roboto)",
                }}
              >Join the Laza Cafe Family</p>
              <p className="text-xl mb-6  leading-tight pr-44"
                style={{
                  fontFamily: "var(--font-roboto)",
                }}
              >
                Be part of one of the most unique dessert experiences around. Our bold branding, delicious menu, and effortless setup make it easy to serve joy in every bite while creating a space your community will love.
              </p>
            </div>


            <div className="flex flex-col items-start justify-center w-full h-full space-y-20">
              <p className="text-black text-7xl  mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >Join Us</p>
              <Button className="bg-[#2C4B7E] text-white text-xl rounded-full"
                style={{
                  boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.40) inset',
                  padding: '29px 55px 29px 54px'
                }}
              >
                Make it yours
              </Button>

              <div className="flex flex-col items-start justify-center w-full h-full space-y-10 mt-10">
                <div className="flex flex-col items-start justify-center w-full h-full">
                  <p className="text-black text-xl font-bold leading-tight">Effortless setup</p>
                  <p className="text-black text-xl leading-tight">Streamlined operations with personalized support</p>
                </div>
                <div className="flex flex-col items-start justify-center w-full h-full">
                  <p className="text-black text-xl font-bold leading-tight">Flexible growth</p>
                  <p className="text-black text-xl leading-tight">Grow at your own pace with a concept that evolves with your vision</p>
                </div>
                <div className="flex flex-col items-start justify-center w-full h-full">
                  <p className="text-black text-xl font-bold leading-tight">Customer love</p>
                  <p className="text-black text-xl leading-tight">Over 4.5 stars across all Laza Cafe locations – people can't get enough</p>
                </div>
                <div className="flex flex-col items-start justify-center w-full h-full">
                  <p className="text-black text-xl font-bold leading-tight">Community magic</p>
                  <p className="text-black text-xl leading-tight">Be the sweet spot in your neighborhood and create memorable moments</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Testimonials Section */}
      <section className="relative flex flex-col max-w-8xl overflow-hidden items-center justify-center w-full  py-24 pb-40 px-4 md:px-16">
        <div className="absolute -top-32 left-0 w-full pointer-events-none select-none">
          <FadeIn className="">
            <p className="text-start xl:text-[26rem]"
              style={{
                background: 'linear-gradient(180deg, #FFF 0%, #F1F1F1 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'var(--font-playfair)',
              }}
            >REVIEWS</p>
          </FadeIn>
        </div>
        <h2 className="text-6xl font-[--font-playfair] mb-16 z-10 mt-20">Testimonials</h2>
        <div className="z-10"><TestimonialsCarousel /></div>
        {/* Waffle image on the right */}
        <div className="absolute -bottom-20 right-0 w-100 h-100  pointer-events-none select-none">
          <Image src="/waffle1.png" alt="Waffle" fill className="object-contain object-bottom" />
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="relative flex flex-col overflow-hidden w-full  py-24 pb-40 px-4 md:px-16">
        <div className="absolute -top-32 left-0 w-full pointer-events-none select-none">
          <FadeIn className="">
            <p className="text-start xl:text-[26rem]"
              style={{
                background: 'linear-gradient(180deg, #FFF 0%, #F1F1F1 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'var(--font-playfair)',
              }}
            >VISIT</p>
          </FadeIn>
        </div>
        <h2 className="text-5xl md:text-6xl font-[--font-playfair] mb-16 mt-20 z-10 relative">Our Locations</h2>
        <div className="flex flex-row items-end justify-end w-full gap-12 z-10 relative">
          {/* Brooklyn Card */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-8 w-[340px] min-h-[220px] flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2C4B7E" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-5.373-8-10A8 8 0 1 1 20 11c0 4.627-3.582 10-8 10z" /><circle cx="12" cy="11" r="3" fill="#2C4B7E" /></svg>
              <span className="text-xl font-bold text-[#2C4B7E]">Brooklyn</span>
            </div>
            <div className="text-black text-base mb-2">6740 5th Ave,<br />Brooklyn, NY 11220</div>
            <div className="text-black text-base mb-2">+1 (347) 560-6080</div>
            <div className="text-black text-base mb-2">info@lazadessert.cafe</div>
            <a href="https://maps.google.com/?q=6740+5th+Ave,+Brooklyn,+NY+11220" target="_blank" rel="noopener noreferrer" className="text-[#2C4B7E] font-medium hover:underline mt-2">Get Directions</a>
          </div>
          {/* Long Island City Card */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-8 w-[340px] min-h-[220px] flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2C4B7E" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-5.373-8-10A8 8 0 1 1 20 11c0 4.627-3.582 10-8 10z" /><circle cx="12" cy="11" r="3" fill="#2C4B7E" /></svg>
              <span className="text-xl font-bold text-[#2C4B7E]">Long Island City</span>
            </div>
            <div className="text-black text-base mb-2">25-33 Steinway St,<br />Long Island City, NY 11220</div>
            <div className="text-black text-base mb-2">+1 (347) 507-1087</div>
            <div className="text-black text-base mb-2">info@lazadessert.cafe</div>
            <a href="https://maps.google.com/?q=25-33+Steinway+St,+Long+Island+City,+NY+11220" target="_blank" rel="noopener noreferrer" className="text-[#2C4B7E] font-medium hover:underline mt-2">Get Directions</a>
          </div>
        </div>
      </section>
    </main>
  );
}
