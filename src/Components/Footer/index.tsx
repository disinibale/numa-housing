import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTiktok } from "react-icons/bs";
import Logo from '../../Assets/Images/logo.png'

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col gap-10 bg-gray-200">
            <div className="flex flex-col md:flex-row justify-between gap-20 md:gap-6 p-10 md:py-20 md:px-20 lg:px-[150px]">
                <div className="flex flex-col md:flex-row justify-between gap-6 md:w-1/2">
                    <div className="flex flex-col gap-4 w-full">
                        <img className="invert ml-[-5px]" width={"150px"} src={Logo} />
                        {/* <a className="font-light text-light text-gray-700">About Us</a>
                        <a className="font-light text-light text-gray-700">Contact</a> */}
                        <div className="flex flex-col gap-4 w-full md:w-1/2">
                            <a className="font-light text-light text-gray-700">Jl. Babakan Karet, Derwati, Kec. Rancasari, Kota Bandung 40292</a>
                            <a className="font-light text-light text-gray-700">(+62) 89-899-01-011</a>
                            <a className="font-light text-light text-gray-700">numahousing@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-6">
                    <div className="flex flex-row gap-4 justify-end">
                        <a
                            href="https://instagram.com/numa.housing"
                            target="_blank"
                            className="bg-gray-400 font-light hover:bg-rose-300 transition-all ease-in-out duration-300 text-light text-white w-12 h-12 flex justify-center items-center rounded-full">
                            <IoLogoInstagram size={24} />
                        </a>
                        <a
                            href="https://tiktok.com/@numa.housing"
                            target="_blank"
                            className="bg-gray-400 font-light hover:bg-sky-300 transition-all ease-in-out duration-300 text-light text-white w-12 h-12 flex justify-center items-center rounded-full">
                            <BsTiktok size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='h-[1px] bg-slate-400 mx-10 md:mx-[150px]'></div>
            <div className="flex flex-row justify-between mx-10 md:mx-[150px] text-gray-700 font-light mb-12">
                <h4>
                    © {new Date().getFullYear()} <span className="font-semibold hover:text-gray-600 hover:cursor-pointer transition-colors ease-in-out duration-300">Numa Housing</span>. All Rights Reserved
                </h4>
            </div>
        </div>
    )
}

export default Footer