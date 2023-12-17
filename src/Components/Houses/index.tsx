import React, { useEffect, useRef, useState } from "react";
import { PiCaretDoubleRightThin } from "react-icons/pi";

import House51Layout1 from "../../Assets/Images/51-57/51 - 01 - edit.jpg"
import House51Layout2 from "../../Assets/Images/51-57/51 - 02 - edit.jpg"
import House57Layout1 from "../../Assets/Images/51-57/layout-51-1.jpg"
import House57Layout2 from "../../Assets/Images/51-57/layout-51-2.jpg"
import House77Layout1 from "../../Assets/Images/77/layout-1.jpg"
import House77Layout2 from "../../Assets/Images/77/layout-2.jpg"
import House57Render1 from "../../Assets/Images/51-57/render-1.png"
import House57Render2 from "../../Assets/Images/51-57/render-2.png"
import House57Render3 from "../../Assets/Images/51-57/render-3.png"
import House57Render4 from "../../Assets/Images/51-57/render-4.png"
import House57Render5 from "../../Assets/Images/51-57/render-5.png"
import House57Render6 from "../../Assets/Images/51-57/render-6.png"
import House57Render7 from "../../Assets/Images/51-57/render-7.png"
import House77Render1 from "../../Assets/Images/77/render-1.png"
import House77Render2 from "../../Assets/Images/77/render-2.png"
import House77Render3 from "../../Assets/Images/77/render-3.png"
import House77Render4 from "../../Assets/Images/77/render-4.png"
import House77Render5 from "../../Assets/Images/77/render-5.png"
import House77Render6 from "../../Assets/Images/77/render-6.png"
import House77Render7 from "../../Assets/Images/77/render-7.png"
import House77Render8 from "../../Assets/Images/77/render-8.png"
import House77Render9 from "../../Assets/Images/77/render-9.png"

enum RoomType {
  LIVING_ROOM = 'LIVING ROOM',
  DINING_ROOM = 'DINING ROOM',
  KITCHEN_SET = 'KITCHEN SET',
  SERVICE = 'SERVICE',
  KAMAR_ANAK_1 = 'KAMAR ANAK 1',
  KAMAR_ANAK_2 = 'KAMAR ANAK 2',
  KAMAR_UTAMA = 'KAMAR UTAMA',
  MULTIFUNCTION_ROOM = 'MULTIFUNCTION ROOM',
  HOUSE_LAYOUT = 'HOUSE LAYOUT'
}

interface HouseImage {
  id: number;
  houseId: number,
  roomType: RoomType,
  imageUrl: string
}

interface AvailableHouses {
  id: number,
  images?: HouseImage[],
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
    bedRoom: string,
    bathRoom: string,
    parking: string,
    price: number
  }
}

const Houses: React.FC = () => {

  const house51Images: HouseImage[] = [
    {
      id: 1,
      houseId: 2,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House51Layout1
    },
    {
      id: 2,
      houseId: 2,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House51Layout2
    },
    {
      id: 3,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render1
    },
    {
      id: 4,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render2
    },
    {
      id: 5,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render3
    },
    {
      id: 6,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render4
    },
    {
      id: 7,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render5
    },
    {
      id: 8,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render6
    },
    {
      id: 9,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render7
    },
  ]

  const house57Images: HouseImage[] = [
    {
      id: 1,
      houseId: 2,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House57Layout1
    },
    {
      id: 2,
      houseId: 2,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House57Layout2
    },
    {
      id: 3,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render1
    },
    {
      id: 4,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render2
    },
    {
      id: 5,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render3
    },
    {
      id: 6,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render4
    },
    {
      id: 7,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render5
    },
    {
      id: 8,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render6
    },
    {
      id: 9,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render7
    },
  ]

  const house77Images: HouseImage[] = [
    {
      id: 1,
      houseId: 3,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House77Layout1
    },
    {
      id: 2,
      houseId: 3,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House77Layout2
    },
    {
      id: 3,
      houseId: 3,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render1
    },
    {
      id: 4,
      houseId: 3,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render2
    },
    {
      id: 5,
      houseId: 3,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render3
    },
    {
      id: 6,
      houseId: 3,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render4
    },
    {
      id: 7,
      houseId: 3,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render5
    },
    {
      id: 8,
      houseId: 3,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render6
    },
    {
      id: 9,
      houseId: 3,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render7
    },
    {
      id: 10,
      houseId: 3,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render8
    },
    {
      id: 11,
      houseId: 3,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render9
    },
  ]

  const availableTypes: Array<AvailableHouses> = [
    {
      id: 1,
      type: 'Compact',
      images: house51Images,
      dimension: 51,
      description: 'Rumah ini cocok bagi pasangan muda yang baru menikah dan memiliki rencana untuk memiliki satu hingga dua anak. Desainnya memungkinkan ruman ini untuk tumbun seiring berjalannya waktu, dengan potensi penggunaan lahan belakang yang beragam untuk keperluan masa depan. Selain itu, rumah ini memiliki budget atau harga yang lebih terjangkau, sambil menawarkan taman belakang yang luas untuk berbagai aktivitas outdoor.',
      isActive: true,
      actions: {
        offer: '',
        explore: 'https://app.lapentor.com/sphere/numa-housing'
      },
      details: {
        location: '63',
        floor: 2,
        bedRoom: '2',
        bathRoom: '2',
        parking: '1 Carport',
        price: 999000000
      }
    },
    {
      id: 2,
      type: 'Standard',
      images: house57Images,
      dimension: 57,
      description: 'Rumah ini cocok bagi pasangan muda yang baru menikah dan memiliki rencana untuk memiliki satu hingga dua anak. Desainnya memungkinkan ruman ini untuk tumbun seiring berjalannya waktu, dengan potensi penggunaan lahan belakang yang beragam untuk keperluan masa depan. Selain itu, rumah ini memiliki budget atau harga yang lebih terjangkau, sambil menawarkan taman belakang yang luas untuk berbagai aktivitas outdoor.',
      isActive: false,
      actions: {
        offer: '',
        explore: 'https://app.lapentor.com/sphere/numa-housing'
      },
      details: {
        location: '84',
        floor: 2,
        bedRoom: '2',
        bathRoom: '2',
        parking: '1 Carport',
        price: 1169000000
      }
    },
    {
      id: 3,
      type: 'Deluxe',
      images: house77Images,
      dimension: 77,
      description: 'Rumah ini sangat cocok bagi mereka yang memiliki dua hingga tiga anak, dengan tasilitas kamar pembantu yang berada di area terpisah memungkinkan Anda untuk tetap merasakan privasi Anda. Desainnya sangat kompak, memaksimalkan pemanfaatan ruangan, sambil tetap menyediakan taman untuk berbagai kegiatan santai dan hobi. Selain itu, tersedia juga area service dengan fasilitas cuci baju dan mesin cuci yang terkelola dengan baik di bagian belakang rumah.',
      isActive: false,
      actions: {
        offer: '',
        explore: 'https://app.lapentor.com/sphere/numa-housing-tipe-77'
      },
      details: {
        location: '84',
        floor: 2,
        bedRoom: '3 + Maid Room',
        bathRoom: '2 + 1',
        parking: '1 Carport',
        price: 1329000000
      }
    },
  ]

  const generateMessageText = (houseId: number) => {
    if (houseId === 1) {
      return 'Halo,%20Saya%20tertarik%20dengan%20rumah%20tipe%2051'
    } else if (houseId === 2) {
      return 'Halo,%20Saya%20tertarik%20dengan%20rumah%20tipe%2057'
    } else {
      return 'Halo,%20Saya%20tertarik%20dengan%20rumah%20tipe%2077'
    }
  }

  const [houses, setHouses] = useState<typeof availableTypes>(availableTypes)
  const [activeHouseId, setActiveHouseId] = useState<number>(1)

  const [houseImages, setHouseImages] = useState<HouseImage[]>(house51Images)
  const [activeImageId, setActiveImageId] = useState<number>(0)
  const [imageHeight, setImageHeight] = useState<number>(0)

  const houseDetailsRef = useRef<HTMLDivElement>(null)

  const handleNextImage = () => {
    if (activeImageId === houseImages.length - 1) {
      return
    }

    setActiveImageId(activeImageId + 1)
  }

  const handlePrevImage = () => {
    if (activeImageId === 0) {
      return
    }

    setActiveImageId(activeImageId - 1)
  }

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
        return { 
          ...activeHouse, 
          isActive: !activeHouse.isActive 
        }
      } else if (activeHouse.id === activeHouseId) {
        return { 
          ...activeHouse, 
          isActive: false 
        }
      }

      return activeHouse
    })

    switch(id) {
      case 1: {
        setHouseImages(house51Images)
        setActiveImageId(0)
        break
      } case 2: {
        setHouseImages(house57Images)
        setActiveImageId(0)
        break
      } case 3: {
        setHouseImages(house77Images)
        setActiveImageId(0)
        break
      }
      default:
    }

    setHouses(updatedHouses)
    setActiveHouseId(id)
  }

  useEffect(() => {
    if (houseDetailsRef.current) {
      const height = houseDetailsRef.current.clientHeight;
      setImageHeight(height)
    }
  }, [])

  return (
    <div className="houses bg-gray-100 flex flex-col py-10 px-10 md:pb-20 md:pt-0 md:px-20 lg:px-[150px] text-slate-700">
      <h4 className="py-10 uppercase text-gray-600 text-center md:text-left">House Types</h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-2">
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
                w-full md:w-1/3
              `} key={house.id}>
              <p className="text-center">
                {house.type} <br />
                <small className="text-sm text-gray-600">LB {house.dimension} - LT {house.details.location}</small>
              </p>
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
      <div className="mt-10 flex flex-col-reverse md:flex-row gap-8">
        <div ref={houseDetailsRef} className="house-details w-full md:1/2 lg:w-1/3">
          <h1 className="text-5xl font-bold">{houses[activeHouseId - 1].dimension} &#13217;</h1>
          <p className="text-normal text-justify font-normal text-gray-600 mt-5 whitespace-break-spaces">{houses[activeHouseId - 1].description}</p>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex flex-row justify-between border-[1px] border-transparent border-b-gray-600 py-5">
              <h4 className="font-semibold text-small">Luas Tanah</h4>
              <h4 className="font-bold">{houses[activeHouseId - 1].details.location} &#13217;</h4>
            </div>
            <div className="flex flex-row justify-between border-[1px] border-transparent border-b-gray-600 py-5">
              <h4 className="font-semibold text-small">Lantai</h4>
              <h4 className="font-bold">{houses[activeHouseId - 1].details.floor}</h4>
            </div>
            <div className="flex flex-row justify-between border-[1px] border-transparent border-b-gray-600 py-5">
              <h4 className="font-semibold text-small">Kamar Tidur</h4>
              <h4 className="font-bold">{houses[activeHouseId - 1].details.bedRoom}</h4>
            </div>
            <div className="flex flex-row justify-between border-[1px] border-transparent border-b-gray-600 py-5">
              <h4 className="font-semibold text-small">Kamar Mandi</h4>
              <h4 className="font-bold">{houses[activeHouseId - 1].details.bathRoom}</h4>
            </div>
            <div className="flex flex-row justify-between border-[1px] border-transparent border-b-gray-600 py-5">
              <h4 className="font-semibold text-small">Parkir</h4>
              <h4 className="font-bold">{houses[activeHouseId - 1].details.parking}</h4>
            </div>
            <div className="flex flex-row justify-between py-5">
              <h4 className="font-semibold text-small">Harga</h4>
              <h4 className="font-bold text-rose-600 text-right">
                Rp. {formatPrice(houses[activeHouseId - 1].details.price)}
                <br />
                <small className="text-xs">Fully Furnished, For more Information  Click More Details</small>
              </h4>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 mt-5">
            <a
              href="#" target="_blank" className="bg-white text-center text-gray-700 uppercase font-normal w-full py-5 hover:bg-gray-200 hover:text-gray-800 transition-all ease-in-out duration-300 items-center justify-center">
              More Details
            </a>
            <a
              href={houses[activeHouseId - 1].actions.explore} target="_blank" className="bg-white text-center text-gray-700 uppercase font-normal w-full py-5 hover:bg-gray-200 hover:text-gray-800 transition-all ease-in-out duration-300 items-center justify-center">
              Explore House 360°
            </a>
            <a
              href={`https://api.whatsapp.com/send/?phone=%2B628989901011&text&type=phone_number&app_absent=0&text=${generateMessageText(activeHouseId)}`}
              target="_blank"
              className="bg-black text-white uppercase font-normal text-center w-full py-5 hover:bg-gray-600 hover:text-gray-100 transition-all ease-in-out duration-300 items-center justify-center">
              I'm Interested
            </a>
          </div>
        </div>
        <div className={`w-full h-[${imageHeight}] md:1/2 lg:w-2/3 flex items-center justify-center`}>
          <div className="bg-slate-500 relative rounded-lg md:h-full w-full">
            <img
              className="h-full w-full rounded-lg object-cover object-center transition-all duration-300 ease-in-out"
              src={houseImages[activeImageId].imageUrl} />
            <div className="absolute inset-0 flex flex-row justify-between h-full w-full bg-gray-10">
              <div className="w-1/12 bg-gradient-to-r from-zinc-600 flex items-center justify-center">
                <button
                  onClick={handlePrevImage}
                  className="w-full h-full bg-transparent text-center flex items-center justify-center hover:pl-10 transition-all ease-in-out duration-300">
                  <PiCaretDoubleRightThin className='rotate-180 text-white' size={28} />
                </button>
              </div>
              <div className="w-1/12 bg-gradient-to-l from-zinc-600 flex items-center justify-center">
                <button
                  onClick={handleNextImage}
                  className="w-full h-full bg-transparent text-center flex items-center justify-center hover:pr-10 transition-all ease-in-out duration-300">
                  <PiCaretDoubleRightThin className='text-white' size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses