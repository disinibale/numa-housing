import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'

type Props = {
    scrollY: number
}

export default function NavbarScroll({ scrollY }: Props) {

    const [screenSize, setScreenSize] = useState<number>(0)
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

    const handleResize = () => {
        setScreenSize(window.innerHeight)
    }

    const handleMenuButton = () => {
        setIsMenuActive(!isMenuActive)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            {isMenuActive ?
                <div className='fixed text-white top-0 gap-6 jumbotron-navbar right-0 bottom-0 w-screen h-screen bg-black opacity-75 z-[9999] flex flex-col py-4 px-10 font-semibold'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-lg'>Numa Housing</h1>
                        <button onClick={() => handleMenuButton()}>
                            <VscClose size={26} />
                        </button>
                    </div>
                    <a href="#home" className='hover:border-b-[2px] hover:cursor-pointer border-white transition-all ease-in-out duration-300'>Home</a>
                    <a href="#about" className='hover:border-b-[2px] hover:cursor-pointer border-white transition-all ease-in-out duration-300'>About</a>
                    <a href="#contact" className='hover:border-b-[2px] hover:cursor-pointer border-white transition-all ease-in-out duration-300'>Contact</a>
                </div>
                :
                <nav className={`${scrollY > 300 ? '' : 'hidden'} fixed jumbotron-navbar text-white bg-black opacity-75 flex items-center justify-between px-10 md:px-[200px] py-4 font-semibold z-20 top-0 left-0 w-full`}>
                    <div className="text-white">
                        <h1 className="text-lg font-bold">Numa Housing</h1>
                    </div>

                    <div className="text-white flex-grow text-center relative font-semibold">
                        <ul className="hidden md:flex justify-center gap-6">
                            <a href="#home">
                                <li className="nav-item relative p-4">
                                    Home
                                    <div className="hover-border"></div>
                                </li>
                            </a>
                            <a href="#about">
                                <li className="nav-item relative p-4">
                                    About
                                    <div className="hover-border"></div>
                                </li>
                            </a>
                            <a href="#contact">
                                <li className="nav-item relative p-4">
                                    Contact
                                    <div className="hover-border"></div>
                                </li>
                            </a>
                        </ul>
                    </div>

                    <div className="block text-white font-semibold">
                        <button className="hidden md:block border-[1px] px-6 py-2 border-white hover:backdrop-blur-sm transition-all duration-100">Schedule A Visit</button>
                    </div>
                    <div className="block md:hidden">
                        <button onClick={() => handleMenuButton()}>
                            {isMenuActive ? <VscClose size={24} /> : <RxHamburgerMenu size={24} />}
                        </button>
                    </div>
                </nav>
            }
        </>
    )
}