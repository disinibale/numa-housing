import Jumbotron from './Components/Jumbotron'
import { IoLocationOutline } from 'react-icons/io5'
import PublicServices from './Components/PublicServices'
import Houses from './Components/Houses'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import React, { useState, useEffect } from 'react'
import NavbarScroll from './Components/NavbarScroll'

function App() {
  const [scrollPosition, setScrollPosition] = useState<number>(window.screenY)

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(scrollPosition)
  return (
    <>
      <NavbarScroll scrollY={scrollPosition} />
      <Jumbotron variant='Home' />
      <div id="about" className="p-10 md:px-[200px] md:py-20 flex flex-col md:flex-row gap-20 text-slate-700">
        <div className='w-full md:w-1/4 flex flex-col gap-10 border-b-[1px'>
          <div className='flex flex-col gap-2'>
            <h1 className='leading-2 uppercase text-green-600'>Beginning From</h1>
            <h3 className='font-semibold'>2023</h3>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='leading-2 uppercase text-green-600'>Completed In</h1>
            <h3 className='font-semibold'>2026</h3>
          </div>
        </div>
        <div className='w-full md:w-3/4'>
          <div className='flex flex-col'>
            <h1 className='text-2xl md:text-4xl sm:min-w-full font-semibold'>Discover NUMA, a sanctuary designed to cater the needs of the modern young adult.
            </h1>
            <h3 className='flex items-center my-8'><IoLocationOutline className='font-semibold' size={22} /> <span className='ml-4 text-md md:text-xl font-semibold'>Jl. Babakan Karet, Derwati, Kec. Rancasari, Kota Bandung 40292
            </span></h3>
            <div className='flex flex-row gap-6'>
              <div className='flex md:flex-row items-center gap-6 border-t-[1px] border-gray-200 py-6 w-full md:w-1/3'>
                <div className='rounded-lg w-16 h-16 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-3xl font-semibold'>2637</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Square Meter</h3>
                </div>
              </div>
              <div className='flex md:flex-row items-center gap-6 border-t-[1px] border-gray-200 py-6 w-full md:w-1/3'>
                <div className='rounded-lg w-16 h-16 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-3xl font-semibold'>18</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Houses</h3>
                </div>
              </div>
              <div className='flex md:flex-row items-center gap-6 border-t-[1px] border-gray-200 py-6 w-full md:w-1/3'>
                <div className='rounded-lg w-16 h-16 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-3xl font-semibold'>1</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Public Facility</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-10 md:px-[200px] md:py-20'>
        <div className='h-[1px] w-full border-gray-200 border-t-[1px]'></div>
        <div className='flex flex-col gap-6 my-20'>
          <h3 className='uppercase text-green-600'>The Advantages</h3>
          <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
            <div className='w-full md:w-1/3 group/advantage hover:cursor-pointer'>
              <img src='https://ecoland.smartdemowp.com/wp-content/uploads/advantages-1.jpg' className='rounded-lg group-hover/advantage:brightness-75 transition-all duration-300 ease-in-out' />
              <h1 className='mt-8 text-lg md:text-3xl font-bold group-hover/advantage:text-green-600 transition-colors ease-in-out duration-300'>Well-Known Architect</h1>
              <p className='mt-4 group-hover/advantage:text-gray-600 transition-all text-sm md:text-normal duration-300 ease-in-out'>Numa dirancang oleh LUWIST Spatial.</p>
            </div>
            <div className='w-full md:w-1/3 group/advantage hover:cursor-pointer'>
              <img src='https://ecoland.smartdemowp.com/wp-content/uploads/advantages-2.jpg' className='rounded-lg group-hover/advantage:brightness-75 transition-all duration-300 ease-in-out' />
              <h1 className='mt-8 text-lg md:text-3xl font-bold group-hover/advantage:text-green-600 transition-colors ease-in-out duration-300'>Convenient Location</h1>
              <p className='mt-4 group-hover/advantage:text-gray-600 transition-all text-sm md:text-normal duration-300 ease-in-out'>Jarak dan lokasi di jantung kota bandung serta kawasan kawasan sekitar yang sudah matang mempermudah untuk kebutuhan penting lainnya seperti sekolah, rumah sakit, area hiburan, tempat olahraga serta akses ke lokasi yang bisa ditempuh dengan mudah.
              </p>
            </div>
            <div className='w-full md:w-1/3 group/advantage hover:cursor-pointer'>
              <img src='https://ecoland.smartdemowp.com/wp-content/uploads/advantages-3.jpg' className='rounded-lg group-hover/advantage:brightness-75 transition-all duration-300 ease-in-out' />
              <h1 className='mt-8 text-lg md:text-3xl font-bold group-hover/advantage:text-green-600 transition-colors ease-in-out duration-300'>World-Class Architecture</h1>
              <p className='mt-4 group-hover/advantage:text-gray-600 transition-all text-sm md:text-normal duration-300 ease-in-out'>Designed by Baroque Arch Studio in Poland, is an internationally acclaimed architects office.</p>
            </div>
          </div>
        </div>
      </div>
      <Houses />
      <div className="px-10 md:px-[200px] py-20 flex flex-col md:flex-row gap-20 text-slate-700">
        <div className='w-full md:w-1/4 flex flex-col gap-10 border-b-[1px'>
          <div className='flex flex-col gap-2'>
            <h1 className='leading-2 uppercase text-green-600'>Numa's Services</h1>
          </div>
        </div>
        <div className='w-full md:w-3/4'>
          <div className='flex flex-col'>
            <h1 className='text-lg md:text-3xl font-semibold'>Premium services in Numa Urban Co-Housing, contributing to enhancing residents' life experience</h1>
            <div className='flex flex-col md:flex-row gap-6 mt-8'>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>One Gate System</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>Secure with CCTV surveillance.</h3>
                </div>
              </div>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>Public Facility</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>Ensure public facility around the area</h3>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 mt-8'>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>Reception</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>6 area for receptionist serve 24/7</h3>
                </div>
              </div>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>Conditioning</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>Ensure ventilation and air circulation in your home</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PublicServices />
      <Contact />
      <Footer />
      <button title="Contact Sale" className="fixed z-90 bottom-10 right-8 bg-green-600 w-12 h-12 md:w-16 md:h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-xl md:text-4xl hover:bg-green-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">&#9993;</button>
    </>
  )
}

export default App
