import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

import Jumbotron from './Components/Jumbotron'
import PublicServices from './Components/PublicServices'
import Houses from './Components/Houses'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import NavbarScroll from './Components/NavbarScroll'

import { VscClose } from 'react-icons/vsc'
import { GiTreehouse } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { BiBuildingHouse } from "react-icons/bi";
import { IoLocationOutline } from 'react-icons/io5'
import { PiWhatsappLogoThin } from "react-icons/pi";
import { MdOutlineOtherHouses } from "react-icons/md";

// Service Icons
import { GiGate } from "react-icons/gi";
import { BsBricks } from "react-icons/bs";
import { RxMargin } from "react-icons/rx";
import { SiMyspace } from "react-icons/si";
import { AiTwotoneGold } from "react-icons/ai";
import { TbBuildingCarousel } from "react-icons/tb";


import Location from './Assets/Images/locations.jpg'
import FullyFurnished from './Assets/Images/fully-furnished.png'
import WellKnownArchitect from './Assets/Images/Kawasan.jpg'

function App() {
  const [scrollPosition, setScrollPosition] = useState<number>(window.screenY)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isTeaserOpen, setIsTeaserOpen] = useState<boolean>(false)
  const [iframeDimension, setIframeDimension] = useState<{ width: number, height: number }>({
    width: 1024,
    height: 768,
  })

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  const handleResizeIframe = () => {
    setIframeDimension({
      width: window.innerWidth < 640 ? 640 : 1024,
      height: window.innerWidth < 640 ? 480 : 768,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResizeIframe)

    return () => {
      window.removeEventListener('resize', handleResizeIframe)
    }
  })

  return (
    <>
      <NavbarScroll scrollY={scrollPosition} />
      <Jumbotron
        setModalOpen={setIsTeaserOpen}
        variant='Home' />
      <div id="about" className="p-10 md:px-20 lg:px-[150px] md:pt-20 md:pb-10 flex flex-col md:flex-row gap-20 text-slate-700">
        <div className='w-full'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-gray-600 text-normal text-center md:text-left uppercase'>Discover Numa</h1>
            <h1 className='text-2xl md:text-4xl sm:min-w-full font-semibold'>Rumah dan kawasan yang didesign untuk kenyamanan dan memenuhi kebutuhan generasi muda yang modern
            </h1>
            <a
              target='_blank'
              href='https://maps.app.goo.gl/6TxhprsRdtudixzv6' className='flex items-center my-8'><IoLocationOutline className='font-semibold' size={22} /> <span className='ml-4 text-md md:text-xl font-semibold'>Jl. Babakan Karet, Derwati, Kec. Rancasari, Kota Bandung 40292
              </span></a>
            <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
              <div className='flex md:flex-row items-center gap-6 md:pt-10 pb-6 w-full md:w-1/3'>
                <div className='rounded-lg w-16 h-16 bg-gray-200 flex items-center justify-center'>
                  <HiHomeModern size={28} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-3xl font-semibold'>2637</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Meter Persegi</h3>
                </div>
              </div>
              <div className='flex md:flex-row items-center gap-6 md:pt-10 pb-6 w-full md:w-1/3'>
                <div className='rounded-lg w-16 h-16 bg-gray-200 flex items-center justify-center'><BiBuildingHouse size={32} /></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-3xl font-semibold'>18</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Unit Rumah</h3>
                </div>
              </div>
              <div className='flex md:flex-row items-center gap-6 md:pt-10 pb-6 w-full md:w-1/3'>
                <div className='rounded-lg w-16 h-16 bg-gray-200 flex items-center justify-center'><GiTreehouse size={32} /></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-3xl font-semibold'>2</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Fasilitas Publik</h3>
                </div>
              </div>
              <div className='flex md:flex-row items-center gap-6 md:pt-10 pb-6 w-full md:w-1/3'>
                <div className='rounded-lg w-16 h-16 bg-gray-200 flex items-center justify-center'><MdOutlineOtherHouses size={32} /></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-3xl font-semibold'>4</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Tipe Rumah</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-10 md:py-0 md:px-10 lg:px-[150px]'>
        <div className='h-[1px] w-full border-gray-200 border-t-[1px]'></div>
        <div className='flex flex-col gap-6 my-10 md:my-20'>
          <h3 className='uppercase text-gray-600 text-center md:text-left'>The Advantages</h3>
          <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
            <div className='w-full md:w-1/3 group/advantage hover:cursor-pointer'>
              <img src={WellKnownArchitect} className='rounded-lg shadow-lg h-80 object-cover brightness-95 object-center group-hover/advantage:brightness-75 transition-all duration-300 ease-in-out md:block hidden' />
              <h1 className='mt-8 text-lg md:text-3xl font-bold group-hover/advantage:text-gray-600 transition-colors ease-in-out duration-300'>Well-Known Architect</h1>
              <p className='mt-4 group-hover/advantage:text-gray-600 transition-all text-sm md:text-normal duration-300 ease-in-out'>Rumah ini didesain oleh LUWIST, studio desain yang didirikan oleh Lukie Widya. Studio ini memiliki ciri khas desain pada rumah tinggal.
              </p>
            </div>
            <div className='w-full md:w-1/3 group/advantage hover:cursor-pointer'>
              <img src={Location} className='rounded-lg shadow-lg h-80 object-cover object-center group-hover/advantage:brightness-75 transition-all duration-300 ease-in-out md:block hidden' />
              <h1 className='mt-8 text-lg md:text-3xl font-bold group-hover/advantage:text-gray-600 transition-colors ease-in-out duration-300'>Convenient Location</h1>
              <p className='mt-4 group-hover/advantage:text-gray-600 transition-all text-sm md:text-normal duration-300 ease-in-out'>Jarak dan lokasi di jantung Kota Bandung serta kawasan kawasan sekitar yang sudah matang.
              </p>
            </div>
            <div className='w-full md:w-1/3 group/advantage hover:cursor-pointer'>
              <img src={FullyFurnished} className='rounded-lg shadow-lg h-80 object-cover object-center group-hover/advantage:brightness-75 transition-all duration-300 ease-in-out md:block hidden' />
              <h1 className='mt-8 text-lg md:text-3xl font-bold group-hover/advantage:text-gray-600 transition-colors ease-in-out duration-300'>Fully Furnished</h1>
              <p className='mt-4 group-hover/advantage:text-gray-600 transition-all text-sm md:text-normal duration-300 ease-in-out'>Rumah ini telah dilengkapi dengan furnitur berkualitas tinggi dan desain interior yang moderndengan fasilitas lengkap.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Houses />
      <div className="px-10 md:px-20 lg:px-[150px] pt-20 md:py-20 flex flex-col lg:flex-row gap-20 text-slate-700">
        <div className='w-full md:w-full lg:w-1/4 flex flex-col gap-10 border-b-[1px'>
          <div className='flex flex-col gap-2'>
            <h1 className='leading-2 uppercase text-gray-600 text-center md:text-left'>Numa's Services</h1>
          </div>
        </div>
        <div className='w-full md:w-full lg:w-3/4'>
          <div className='flex flex-col'>
            <h1 className='text-lg md:text-3xl font-semibold'>Premium services in Numa Housing, contributing to enhancing residents' life experience</h1>
            <div className='flex flex-col lg:flex-row gap-6 mt-8'>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200 flex items-center justify-center'>
                  <BsBricks size={30} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>Quality of Construction</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>Material Bangunan Solid dan Kokoh</h3>
                </div>
              </div>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200 flex items-center justify-center'>
                  <AiTwotoneGold size={30} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>Investment Potential</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>Investasi yang menguntungkan</h3>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-6 mt-8'>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200 flex items-center justify-center'>
                  <RxMargin size={30} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>Flexible Space</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>Ruang fleksible dengan multi-purpose</h3>
                </div>
              </div>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200 flex items-center justify-center'>
                  <SiMyspace size={30} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>Community Lifestyle</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>Vibrant Community Living</h3>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-6 mt-8'>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200 flex items-center justify-center'>
                  <GiGate size={30} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>One Gate System</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>Sistem keamanan 24/7</h3>
                </div>
              </div>
              <div className='flex flex-row gap-6 py-6 w-full md:w-1/2 items-center justify-start'>
                <div className='rounded-lg w-16 md:w-18 h-16 md:h-18 bg-gray-200 flex items-center justify-center'>
                  <TbBuildingCarousel size={30} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-2xl font-semibold'>Public Facilities</h3>
                  <h3 className='small text-small md:text-normal text-gray-500 break-words'>Fasilitas umum penghuni</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PublicServices />
      <Contact />
      <Footer />
      <a
        href='https://api.whatsapp.com/send/?phone=%2B628989901011&text&type=phone_number&app_absent=0'
        target='_blank'
        title="Contact Sale"
        className="fixed z-90 bottom-10 right-8 bg-green-600 w-12 h-12 md:w-16 md:h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-xl md:text-4xl hover:bg-green-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">
        <PiWhatsappLogoThin size={30} />
      </a>

      <div className={`${isTeaserOpen ? 'fixed' : 'hidden'} fixed top-0 left-0 z-[200] w-screen h-screen bg-black bg-opacity-75 transition-all duration-500 ease-in-out`}>
        <div className='container flex flex-col min-w-full py-10 px-10 md:px-[150px]'>
          <div className='control flex justify-end'>
            <button onClick={() => setIsTeaserOpen(false)}>
              <VscClose className="text-white" size={30} />
            </button>
          </div>
          <div className={`content flex items-center justify-center w-full h-full mt-10 px-10`}>
            <iframe
              title="Numa Teaser"
              height={iframeDimension.height}
              width={iframeDimension.width}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src='https://www.youtube.com/embed/Z_QwtaO20SU'></iframe>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
