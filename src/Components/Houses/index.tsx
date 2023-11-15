import React, { useState } from "react";
import { LiaCubeSolid } from "react-icons/lia";

interface AvailableHouses {
  id: number,
  thumbnail: string,
  type: string,
  dimension: number,
  description: string,
  isActive: boolean,
  actions: {
    offer: string,
    explore: string,
  }
  details: {
    location: string,
    floor: number,
    bedAndBath: string,
    parking: string,
    price: number
  }
}

const Houses: React.FC = () => {
  const availableTypes: Array<AvailableHouses> = [
    {
      id: 1,
      thumbnail: '../../Assets/Images/numa-3.jpg',
      type: 'Compact',
      dimension: 52,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni totam ratione, voluptates doloribus modi unde vel nostrum non odio nihil itaque ab, ad repellat quo? Ipsa eum quas culpa veniam?',
      isActive: true,
      actions: {
        offer: '',
        explore: ''
      },
      details: {
        location: 'Local A',
        floor: 2,
        bedAndBath: '3/2',
        parking: 'No',
        price: 1250000000
      }
    },
    {
      id: 2,
      thumbnail: '../../Assets/Images/numa-3.jpg',
      type: 'Standard',
      dimension: 72,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni totam ratione, voluptates doloribus modi unde vel nostrum non odio nihil itaque ab, ad repellat quo? Ipsa eum quas culpa veniam?',
      isActive: false,
      actions: {
        offer: '',
        explore: ''
      },
      details: {
        location: 'Local B',
        floor: 2,
        bedAndBath: '3/2',
        parking: 'Yes',
        price: 1550000000
      }
    },
    {
      id: 3,
      thumbnail: '../../Assets/Images/numa-3.jpg',
      type: 'Deluxe',
      dimension: 83,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni totam ratione, voluptates doloribus modi unde vel nostrum non odio nihil itaque ab, ad repellat quo? Ipsa eum quas culpa veniam?',
      isActive: false,
      actions: {
        offer: '',
        explore: ''
      },
      details: {
        location: 'Local C',
        floor: 2,
        bedAndBath: '3/2',
        parking: 'Yes',
        price: 1750000000
      }
    },
  ]

  const [houses, setHouses] = useState<typeof availableTypes>(availableTypes)
  const [activeHouseId, setActiveHouseId] = useState<number>(1)

  const formatPrice = (price: number): string => {
    const numStr = price.toString()

    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const handleActiveHouse = (id: number) => {
    if (id === activeHouseId) {
      return
    }

    const updatedHouses = houses.map((activeHouse) => {
      if (activeHouse.id === id) {
        return { ...activeHouse, isActive: !activeHouse.isActive }
      } else if (activeHouse.id === activeHouseId) {
        return { ...activeHouse, isActive: false }
      }

      return activeHouse
    })

    setHouses(updatedHouses)
    setActiveHouseId(id)
  }

  return (
    <div className="houses bg-gray-100 flex flex-col pt-10 px-10 pb-0 md:py-20 md:px-[200px] text-slate-700">
      <div className="flex flex-row items-center justify-center gap-2">
        {houses.map((house) => {
          return (
            <div
              onClick={() => handleActiveHouse(house.id)}
              className={
                `${house.isActive === true ? 'active bg-white' : 'bg-gray-200'} 
                py-6 px-10 relative font-bold
                text-2xl flex items-center 
                justify-center group/house-tab
                hover:cursor-pointer
                transition-all ease-in-out duration-500
                w-1/3
              `} key={house.id}>{house.type}
              <div
                className={
                  `h-5 w-5 bg-white z-5 absolute 
                  -bottom-2 rotate-45 
                  ${house.isActive ? 'opacity-100' : 'opacity-0'} 
                  transition-all ease-in-out duration-500`}>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <h1 className="text-5xl font-bold">{houses[activeHouseId - 1].dimension} m2</h1>
          <p className="text-normal font-normal text-gray-600 mt-5 whitespace-break-spaces">{houses[activeHouseId - 1].description}</p>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex flex-row justify-between border-[1px] border-transparent border-b-gray-600 py-5">
              <h4 className="font-semibold text-small">Location</h4>
              <h4 className="font-bold">{houses[activeHouseId - 1].details.location}</h4>
            </div>
            <div className="flex flex-row justify-between border-[1px] border-transparent border-b-gray-600 py-5">
              <h4 className="font-semibold text-small">Floor</h4>
              <h4 className="font-bold">{houses[activeHouseId - 1].details.floor}</h4>
            </div>
            <div className="flex flex-row justify-between border-[1px] border-transparent border-b-gray-600 py-5">
              <h4 className="font-semibold text-small">Bed/Bath</h4>
              <h4 className="font-bold">{houses[activeHouseId - 1].details.bedAndBath}</h4>
            </div>
            <div className="flex flex-row justify-between border-[1px] border-transparent border-b-gray-600 py-5">
              <h4 className="font-semibold text-small">Parking</h4>
              <h4 className="font-bold">{houses[activeHouseId - 1].details.parking}</h4>
            </div>
            <div className="flex flex-row justify-between py-5">
              <h4 className="font-semibold text-small">Price</h4>
              <h4 className="font-bold text-rose-600">Rp. {formatPrice(houses[activeHouseId - 1].details.price)}</h4>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <a href="#" className="bg-green-500 text-white uppercase font-normal w-1/2 py-5 hover:bg-green-600 hover:text-gray-100 transition-all ease-in-out duration-300 flex flex-row items-center justify-center">I'm Interested</a>
            <a href="#" className="bg-white text-gray-700 uppercase font-normal w-1/2 py-5 hover:bg-gray-200 hover:text-gray-800 transition-all ease-in-out duration-300 flex flex-row items-center justify-center"><LiaCubeSolid className="mr-1" size={26} />Explore House</a>
          </div>
        </div>
        <div
          className={`
            w-full md:w-2/3 min-h-full 
            flex items-center justify-center
          `}>
          <img className="w-full h-full object-contain object-center" src="https://ecoland.smartdemowp.com/wp-content/uploads/apartment-1.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Houses