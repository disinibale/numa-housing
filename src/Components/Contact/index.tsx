import React, { useState } from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from 'react-toastify'

const Contact: React.FC = () => {
    const [form, setForm] = useState<{
        name: string,
        phone: string,
        message: string
    }>({ name: '', phone: '', message: '' })
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const currentFormValue = { ...form }
        const newFormValue = {
            ...currentFormValue,
            name: e.target.value,
        }

        setForm(newFormValue)
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const currentFormValue = { ...form }
        const newFormValue = {
            ...currentFormValue,
            phone: e.target.value,
        }

        setForm(newFormValue)
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()

        const currentFormValue = { ...form }
        const newFormValue = {
            ...currentFormValue,
            message: e.target.value,
        }

        setForm(newFormValue)
    }

    const handleSendForm = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            setIsLoading(true)
            const response = await fetch('https://api.numahousing.com/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            })

            if (!response.ok) {
                toast.error('Error while sending email')
                throw new Error(`Error, while sending email: ${response.status}`)
            }

            const data = await response.json()
            toast.success(data.message)
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false)
            setForm({
                name: '',
                phone: '',
                message: ''
            })
        }
    }

    return (
        <div id="contact" className='bg-gray-100 py-20 px-10 md:px-20 lg:px-[150px] md:py-20 flex flex-col md:flex-row gap-20'>
            <div className='w-full'>
                <form
                    onSubmit={handleSendForm}
                    className='flex flex-col gap-8'>
                    <h1 className="text-2xl md:text-4xl font-semibold">Ask your question right away!</h1>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        <div className='w-full md:w-1/2 flex flex-row items-center gap-4'>
                            <span className="bg-gray-600 w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 rounded-full flex flex-row justify-center items-center">
                                <IoCheckmarkOutline className="w-5 h-5 text-white font-bold" />
                            </span>
                            <small className='text-normal md:text-lg font-light'>Dapatkan Price List Terbaru</small>
                        </div>
                        <div className='w-full md:w-1/2 flex flex-row items-center gap-4'>
                            <span className="bg-gray-600 w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 rounded-full flex flex-row justify-center items-center">
                                <IoCheckmarkOutline className="w-5 h-5 text-white font-bold" />
                            </span>
                            <small className='text-normal md:text-lg font-light'>Pemberitahuan tentang tanggal penjualan</small>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='w-full md:w-1/2 flex flex-row items-center gap-4'>
                            <span className="bg-gray-600 w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 rounded-full flex flex-row justify-center items-center">
                                <IoCheckmarkOutline className="w-5 h-5 text-white font-bold" />
                            </span>
                            <small className='text-normal md:text-lg font-light'>Jadwalkan untuk mengunjungi model rumah</small>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <input onChange={handleNameChange} value={form.name} name='name' required className='w-full md:w-1/2 outline-none focus:border-green-500 focus:text-green-500 focus:placeholder:text-green-500 transition-all ease-in-out duration-300 placeholder-gray-700 bg-transparent p-4 border-b-[1px] border-gray-700 invalid:border-rose-600 invalid:placeholder:text-rose-600' placeholder='Your Name *' />
                        <input onChange={handlePhoneChange} value={form.phone} name='phone' required className='w-full md:w-1/2 outline-none focus:border-green-500 focus:text-green-500 focus:placeholder:text-green-500 transition-all ease-in-out duration-300 placeholder-gray-700 bg-transparent p-4 border-b-[1px] border-gray-700 invalid:border-rose-600 invalid:placeholder:text-rose-600' placeholder='Your Phone *' />
                    </div>
                    <div className="flex flex-row gap-6">
                        <textarea onChange={handleMessageChange} value={form.message} name='message' required className='w-full outline-none focus:border-green-500 focus:text-green-500 focus:placeholder:text-green-500 transition-all ease-in-out duration-300 placeholder-gray-700 min-h-[100px] bg-transparent p-4 border-b-[1px] border-gray-700 invalid:border-rose-600 invalid:placeholder:text-rose-600' placeholder='How can we help? *' />
                    </div>
                    <div className='flex flex-row justify-end'>
                        <button
                            className='bg-white uppercase font-light px-8 py-4 hover:bg-gray-200 transition-all ease-in-out duration-300'>
                                {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" size={28} />  : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact