import Jumbotron from './Components/Jumbotron'
import { IoLocationOutline } from 'react-icons/io5'
import PublicServices from './Components/PublicServices'
import Houses from './Components/Houses'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Jumbotron variant='Home' />
      <div className="p-10 md:px-[200px] md:py-20 flex flex-col md:flex-row gap-20 text-slate-700">
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
            <h1 className='text-2xl md:text-4xl sm:min-w-full font-semibold'>Numa Housing is an elite residential complex located in the prestigious Southern Bandung district.</h1>
            <h3 className='flex items-center my-8'><IoLocationOutline className='font-semibold' size={22} /> <span className='ml-4 text-md md:text-xl font-semibold'>Babakan Karet Street, Derwati, Rancasari, Bandung</span></h3>
            <div className='flex flex-row gap-6'>
              <div className='flex md:flex-row items-center gap-6 border-t-[1px] border-gray-200 py-6 w-1/2'>
                <div className='rounded-lg w-16 h-16 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-4xl font-semibold'>400000</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Square Feet</h3>
                </div>
              </div>
              <div className='flex md:flex-row items-center gap-6 border-t-[1px] border-gray-200 py-6 w-1/2'>
                <div className='rounded-lg w-16 h-16 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-4xl font-semibold'>50</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Houses</h3>
                </div>
              </div>
            </div>
            <div className='flex flex-row mt-6 gap-6'>
              <div className='flex md:flex-row items-center gap-6 border-t-[1px] border-gray-200 py-6 w-1/2'>
                <div className='rounded-lg w-16 h-16 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-4xl font-semibold'>1</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Theme Park</h3>
                </div>
              </div>
              <div className='flex md:flex-row items-center gap-6 border-t-[1px] border-gray-200 py-6 w-1/2'>
                <div className='rounded-lg w-16 h-16 bg-gray-200'></div>
                <div className='flex flex-col'>
                  <h3 className='text-lg md:text-4xl font-semibold'>80</h3>
                  <h3 className='small text-sm md:text-normal text-gray-500'>Slot Car Parking</h3>
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
              <h1 className='mt-8 text-lg md:text-3xl font-bold group-hover/advantage:text-green-600 transition-colors ease-in-out duration-300'>World-Class Architecture</h1>
              <p className='mt-4 group-hover/advantage:text-gray-600 transition-all text-sm md:text-normal duration-300 ease-in-out'>Designed by Baroque Arch Studio in Poland, is an internationally acclaimed architects office.</p>
            </div>
            <div className='w-full md:w-1/3 group/advantage hover:cursor-pointer'>
              <img src='https://ecoland.smartdemowp.com/wp-content/uploads/advantages-2.jpg' className='rounded-lg group-hover/advantage:brightness-75 transition-all duration-300 ease-in-out' />
              <h1 className='mt-8 text-lg md:text-3xl font-bold group-hover/advantage:text-green-600 transition-colors ease-in-out duration-300'>World-Class Architecture</h1>
              <p className='mt-4 group-hover/advantage:text-gray-600 transition-all text-sm md:text-normal duration-300 ease-in-out'>Designed by Baroque Arch Studio in Poland, is an internationally acclaimed architects office.</p>
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
            <h1 className='text-lg md:text-4xl font-semibold'>20+ Premium and essential services in Ecoland Park, contributing to enhancing residents' life experience</h1>
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
      <Footer />
      <button  title="Contact Sale" className="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">&#9993;</button>
    </>
  )
}

export default App
