import React, { useEffect, useState } from 'react';
import { PiCaretDoubleRightThin } from "react-icons/pi";

import GalleryImage1 from '../../Assets/Images/Gallery/1.jpg'
import GalleryImage2 from '../../Assets/Images/Gallery/2.jpg'
import GalleryImage4 from '../../Assets/Images/Gallery/4.jpg'
import GalleryImage5 from '../../Assets/Images/Gallery/5.png'
import GalleryImage6 from '../../Assets/Images/Gallery/6.png'

const PublicServices: React.FC = () => {
    const availableService = [
        {
            id: 1,
            name: 'Tol Gedebage',
            distance: '5 Menit',
            locationType: 'Public Service',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: true,
        },
        {
            id: 2,
            name: 'Stasiun Tegalluar',
            distance: '11 Menit',
            locationType: 'Public Service',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
        {
            id: 3,
            name: 'Summarecon Shopping Center',
            distance: '10 Menit',
            locationType: 'Convention Center',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
        {
            id: 4,
            name: 'Hypermart Metro Trade Center',
            distance: '11 Menit',
            locationType: 'Grocery Store',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
        {
            id: 5,
            name: 'RS Al-Islam',
            distance: '8 Menit',
            locationType: 'Hospital',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
        {
            id: 6,
            name: 'SAMSAT Kawaluyaan',
            distance: '12 Menit',
            locationType: 'Public Service',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
        {
            id: 7,
            name: 'SMA Negeri 21 Bandung',
            distance: '3 Menit',
            locationType: 'School',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
        {
            id: 8,
            name: 'Masjid Raya Al - Jabbar',
            distance: '12 Menit',
            locationType: 'Public Service',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
    ]
    const backgroundImages: string[] = [
        GalleryImage1,
        GalleryImage2,
        GalleryImage4,
        GalleryImage5,
        GalleryImage6,
    ]

    const [activeService, setActiveService] = useState(availableService)
    const [activeId, setActiveId] = useState<number>(1)
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
    const [imageAutoSlide, setImageAutoSlide] = useState<boolean>(false)

    const handleActiveService = (id: number) => {
        if (id === activeId) {
            return
        }

        const updatedServices = activeService.map((service) => {
            if (service.id === id) {
                return { ...service, isActive: !service.isActive };
            } else if (service.id === activeId) {
                return { ...service, isActive: false };
            }
            return service;
        });

        setActiveService(updatedServices);
        setActiveId(id);
    }

    const handleNextImageSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }

    const handlePrevImageSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setImageAutoSlide(false)
        const newIndex = (currentImageIndex - 1) % backgroundImages.length
        setCurrentImageIndex((newIndex === -1) ? backgroundImages.length - 1 : newIndex)

        setTimeout(() => {
            setImageAutoSlide(true)
        }, 5000)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (imageAutoSlide) {
                setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
            }
        }, 5000)

        return () => clearInterval(intervalId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageAutoSlide, currentImageIndex])

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    filter: 'blur(0.1px) brightness(0.7)', // Adjust the values based on your preference
                    transition: 'background 1s ease-in-out, filter 0.5s ease-in-out'
                }}
                className='service-image hidden relative md:min-h-screen min-w-screen bg-gray-200 p-10 md:py-20 md:px-20 lg:px-[150px] bg-fixed bg-cover bg-no-repeat bg-center lg:flex md:flex-col-reverse'>
                <div className='absolute inset-0 h-full w-full flex flex-row justify-between items-center'>
                    <div className='text-4xl px-10 hover:pl-12 h-full transition-all ease-in-out duration-300 invert opacity-50 hover:opacity-70'>
                        <button
                            onClick={handlePrevImageSlide}
                            className='w-full h-full bg-transparent text-white'>
                            <PiCaretDoubleRightThin className="rotate-180" size={48} />
                        </button>
                    </div>
                    <div className='text-4xl px-10 hover:pr-12 h-full transition-all ease-in-out duration-300 invert opacity-50 hover:opacity-70'>
                        <button
                            onClick={handleNextImageSlide}
                            className='w-full h-full bg-transparent text-white'>
                            <PiCaretDoubleRightThin size={48} />
                        </button>
                    </div>
                </div>
                <div className='text-4xl md:text-8xl text-white font-bold p-10 text-center md:text-left justify-end items-center w-full md:w-1/2'>Gallery</div>
            </div>
            <div className='leading-2 uppercase mb-6 font-semibold my-20 mx-20 md:mx-[200px] text-center md:text-left'>Numa's Public Services</div>
            <div className='flex flex-col-reverse lg:flex-row gap-6 p-10 md:pb-20 md:px-20 lg:px-[150px]'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col gap-2 my-6'>
                        {activeService.map((service) => {
                            return (
                                <div onClick={() => handleActiveService(service.id)} key={service.id} className='flex flex-row gap-4 items-center hover:cursor-pointer'>
                                    <div className='w-20 h-20 flex items-center justify-center'>
                                        <div
                                            className={`w-6 h-6 rounded-full bg-transparent flex items-center justify-center transition-colors ease-in-out duration-300 border-[1px] ${service.isActive === true ? 'border-gray-600' : 'border-transparent'}`}>
                                            <div className={`w-1/4 h-1/4 ${service.isActive ? 'bg-gray-600' : 'bg-gray-400'} rounded-full`}></div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='font-semibold text-normal lg:text-3xl'>{service.name}</h3>
                                        <small className='font-light text-sm'>{service.distance} - {service.locationType}</small>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex items-center justify-center'>
                    <iframe
                        className='w-full h-96 md:h-full rounded-md'
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCtubQUm1aBahaaFq1UQXLyYWbRd70xKlo&q=${activeService[activeId - 1].name}+Bandung+West Java`}>
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default PublicServices