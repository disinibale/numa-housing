import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-row justify-between gap-6 bg-white p-10 md:py-20 md:px-[200px]">
            <div className="flex flex-row justify-between gap-6 w-1/2">
                <div className="flex flex-col gap-4 w-1/2">
                    <h1 className="text-3xl font-bold text-gray-800">Numa Housing</h1>
                    <a className="font-light text-light text-gray-700">About Us</a>
                    <a className="font-light text-light text-gray-700">Contact</a>
                    <a className="font-light text-light text-gray-700">marketing@numahousing.com</a>
                </div>
                <div className="flex flex-col gap-4 w-1/2">
                    <a className="font-light text-light text-gray-700">Jl. Budisari I No.37, Hegarmanah, Setiabudi, Bandung, Jawa Barat, Indonesia 40141</a>
                    <a className="font-light text-light text-gray-700">+62 89514948983</a>
                    <a className="font-light text-light text-gray-700">marketing@numahousing.com</a>
                </div>
            </div>
            <div className="flex flex-row justify-between gap-6">
                <div className="flex flex-row gap-4 justify-end">
                    <a className="bg-gray-400 font-light text-light text-gray-700 w-12 h-12 rounded-full"></a>
                    <a className="bg-gray-400 font-light text-light text-gray-700 w-12 h-12 rounded-full"></a>
                    <a className="bg-gray-400 font-light text-light text-gray-700 w-12 h-12 rounded-full"></a>
                </div>
            </div>
        </div>
    )
}

export default Footer