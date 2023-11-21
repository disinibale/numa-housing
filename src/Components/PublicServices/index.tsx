import React, { useState } from 'react';

const PublicServices: React.FC = () => {
    const availableService = [
        {
            id: 1,
            name: 'Gedebage KM 149 Toll Exit',
            distance: '1.5 Km',
            locationType: 'Restaurant',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: true,
        },
        {
            id: 2,
            name: 'Hypermart Metro Trade Center',
            distance: '2.9 Km',
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
            name: 'RS Al-Islam',
            distance: '4.3 Km',
            locationType: 'Public Service',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
        {
            id: 4,
            name: 'SAMSAT Kawaluyaan',
            distance: '5.1 Km',
            locationType: 'Public Park',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
        {
            id: 5,
            name: 'SMA Negeri 21 Bandung',
            distance: '1.5 Km',
            locationType: 'Public Service',
            coverImage: null,
            coordinate: {
                x: 200,
                y: 400,
            },
            isActive: false,
        },
    ]

    const [activeService, setActiveService] = useState(availableService)
    const [activeId, setActiveId] = useState<null | number>(null)

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

    return (
        <>
            <div className='service-image md:min-h-screen min-w-screen bg-[url(../../Assets/Images/numa-2.jpg)] p-10 md:py-20 md:px-[200px] bg-fixed bg-cover bg-no-repeat bg-center flex md:flex-col-reverse'>
                <div className='text-4xl md:text-8xl text-white font-bold p-10 justify-end items-end w-full md:w-1/2'>Public Service Name</div>
            </div>
            <div className='leading-2 uppercase mb-6 font-semibold my-20 mx-20 md:mx-[200px]'>Numa's Public Services</div>
            <div className='flex flex-col-reverse md:flex-row gap-6 p-10 md:pb-20 md:px-[200px]'>
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-col gap-2 my-6'>
                        {activeService.map((service) => {
                            return (
                                <div onClick={() => handleActiveService(service.id)} key={service.id} className='flex flex-row gap-4 items-center hover:cursor-pointer'>
                                    <div className='w-20 h-20 flex items-center justify-center'>
                                        <div className={`w-6 h-6 rounded-full bg-transparent flex items-center justify-center transition-colors ease-in-out duration-300 border-[1px] ${service.isActive === true ? 'border-green-600' : 'border-transparent'}`}>
                                            <div className={`w-1/4 h-1/4 ${service.isActive ? 'bg-green-600' : 'bg-gray-400'} rounded-full`}></div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='font-semibold text-xl md:text-4xl'>{service.name}</h3>
                                        <small className='font-light text-sm'>{service.distance} - {service.locationType}</small>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full min-h-full md:w-1/2 flex items-center justify-center'>
                    {/* https://ecoland.smartdemowp.com/wp-content/uploads/map-1.png */}
                    <img src='https://ecoland.smartdemowp.com/wp-content/uploads/map-1.png' className='w-full h-full object-fill md:object-cover object-center' />
                </div>
            </div>
        </>
    )
}

export default PublicServices