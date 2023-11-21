import React from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'

const Contact: React.FC = () => {
    return (
        <div id="contact" className='bg-gray-100 py-20 px-10 md:px-[200px] md:py-20 flex flex-col md:flex-row gap-20'>
            <div className='flex flex-col gap-6 w-full md:w-1/3'>
                <div className='flex flex-col gap-6'>
                    <h1 className='uppercase text-green-600'>Contact</h1>
                    <img className='w-24 h-24 mt-4 rounded-full' src='https://ecoland.smartdemowp.com/wp-content/uploads/agents-1.png' />
                    <div>
                        <h3 className='text-2xl font-semibold'>M. Iqbal Nurzaman</h3>
                        <small className='text-gray-500'>Property Consultant at Numa Housing</small>
                    </div>
                    <div>
                        <h5 className='font-semibold'>Phone: <small className="font-normal  ">(+62) 89514948983</small></h5>
                        <h5 className='font-semibold'>Email: <small className="font-normal  ">mhmdnrzmn@gmail.com</small></h5>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3'>
                <form className='flex flex-col gap-8'>
                    <h1 className="text-4xl font-semibold">Ask your question right away!</h1>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        <div className='w-full md:w-1/2 flex flex-row items-center gap-4'>
                            <span className="bg-green-600 w-8 h-8 rounded-full flex flex-row justify-center items-center">
                                <IoCheckmarkOutline className="w-5 h-5 text-white font-bold" />
                            </span>
                            <small className='text-lg font-light'>Latest Updated price list</small>
                        </div>
                        <div className='w-full md:w-1/2 flex flex-row items-center gap-4'>
                            <span className="bg-green-600 w-8 h-8 rounded-full flex flex-row justify-center items-center">
                                <IoCheckmarkOutline className="w-5 h-5 text-white font-bold" />
                            </span>
                            <small className='text-lg font-light'>Get notified about the opening sale date</small>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='w-full md:w-1/2 flex flex-row items-center gap-4'>
                            <span className="bg-green-600 w-8 h-8 rounded-full flex flex-row justify-center items-center">
                                <IoCheckmarkOutline className="w-5 h-5 text-white font-bold" />
                            </span>
                            <small className='text-lg font-light'>Schedule to visit the model houses</small>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <input required className='w-full md:w-1/2 outline-none focus:border-green-500 focus:text-green-500 focus:placeholder:text-green-500 transition-all ease-in-out duration-300 placeholder-gray-700 bg-transparent p-4 border-b-[1px] border-gray-700 invalid:border-rose-600 invalid:placeholder:text-rose-600' placeholder='Your Name *' />
                        <input required className='w-full md:w-1/2 outline-none focus:border-green-500 focus:text-green-500 focus:placeholder:text-green-500 transition-all ease-in-out duration-300 placeholder-gray-700 bg-transparent p-4 border-b-[1px] border-gray-700 invalid:border-rose-600 invalid:placeholder:text-rose-600' placeholder='Your Phone *' />
                    </div>
                    <div className="flex flex-row gap-6">
                        <input className='w-full outline-none focus:border-green-500 focus:text-green-500 focus:placeholder:text-green-500 transition-all ease-in-out duration-300 placeholder-gray-700 bg-transparent p-4 border-b-[1px] border-gray-700 invalid:border-rose-600 invalid:placeholder:text-rose-600' placeholder='Your Email Address' />
                    </div>
                    <div className="flex flex-row gap-6">
                        <textarea required className='w-full outline-none focus:border-green-500 focus:text-green-500 focus:placeholder:text-green-500 transition-all ease-in-out duration-300 placeholder-gray-700 min-h-[100px] bg-transparent p-4 border-b-[1px] border-gray-700 invalid:border-rose-600 invalid:placeholder:text-rose-600' placeholder='How can we help? *' />
                    </div>
                    <div className='flex flex-row justify-end'>
                        <button className='bg-white uppercase font-light px-8 py-4 hover:bg-gray-200 transition-all ease-in-out duration-300'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact