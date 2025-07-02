import EmblaCarousel from "@/components/carousel/emblacarousel";
import DessertMenu from "@/components/DessertMenu";
import FadeIn from "@/components/FadeIn";
import OrderNowButton from "@/components/OrderNowButton";
import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import desserts from "@/components/carousel/dessertData";
import Reveal from "@/components/Reveal";
import Toppings from "@/components/icons/Toppings";
const OPTIONS: EmblaOptionsType = { loop: true, watchResize: false, align: 'center', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
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
        <div className=" absolute top-0 left-0 w-full h-full inset-0">
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
        <div className=" absolute bottom-0 w-full h-100 border-green-500 ">
            <Image src={'/bgwave.jpg'} alt="bg wave" fill className="" />
        </div>
         {/* Signature Kunafa Section */}
        <section className=" max-w-[1440px]  mx-auto flex flex-col md:flex-row items-center justify-center gap-x-10 border-black w-full mt-60 py-24 px-12 relative">
          
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
            <h2 className="text-4xl md:text-6xl  mb-6 font-[--font-playfair] leading-tight">Our Signature<br/> Kunafa</h2>
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

      </section>
    </main>
  );
}
