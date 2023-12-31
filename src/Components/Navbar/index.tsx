import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'
import Logo from '../../Assets/Images/logo.png'

const Navbar: React.FC = () => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

    const handleMenuButton = () => {
        setIsMenuActive(!isMenuActive)
    }

    return (
        <>
            {
                isMenuActive ?
                    <div id="home" className='fixed top-0 gap-6 jumbotron-navbar right-0 bottom-0 w-screen h-screen bg-black opacity-75 z-[9999] flex flex-col py-4 px-10 font-semibold'>
                        <div className='flex flex-row justify-between'>
                            <img className='h-5' src={Logo} />
                            <button onClick={() => handleMenuButton()}>
                                <VscClose size={26} />
                            </button>
                        </div>
                        <div className='hover:border-b-[2px] hover:cursor-pointer border-white transition-all ease-in-out duration-300'>Home</div>
                        <div className='hover:border-b-[2px] hover:cursor-pointer border-white transition-all ease-in-out duration-300'>About</div>
                        <div className='hover:border-b-[2px] hover:cursor-pointer border-white transition-all ease-in-out duration-300'>Contact</div>
                    </div> :
                    <nav id="home" className="absolute jumbotron-navbar bg-transparent flex items-center justify-between px-10 md:px-20 lg:px-[150px] py-4 font-semibold z-20 top-0 left-0 w-full">
                        <div className="text-white">
                            <img className='w-20' src={Logo} />
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
    );
}

export default Navbar