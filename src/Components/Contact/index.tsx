import React from 'react'

const Contact: React.FC = () => {
    return (
        <div className='bg-gray-200 p-10 md:px-[200px] md:py-20 flex flex-row'>
            <div className='flex flex-col gap-6 w-1/3'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-lg font-semibold uppercase text-green-500'>Contact</h1>
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
            <div className='flex flex-col gap-6 w-2/3'>
                <h1 className="text-4xl font-semibold">Ask your question right away!</h1>
                <div className="flex flex-row gap-6">
                    <input className='w-1/2 bg-transparent p-4 border-b-[1px] border-gray-700' placeholder='Your Name' />
                    <input className='w-1/2 bg-transparent p-4 border-b-[1px] border-gray-700' placeholder='Your Phone' />
                </div>
                <div className="flex flex-row gap-6">
                    <input className='w-full bg-transparent p-4 border-b-[1px] border-gray-700' placeholder='Your Email Address *' />
                </div>
                <div className="flex flex-row gap-6">
                    <textarea className='w-full min-h-[100px] bg-transparent p-4 border-b-[1px] border-gray-700' placeholder='How can we help' />
                </div>
            </div>
        </div>
    )
}

export default Contact