import React, { useEffect, useRef, useState } from "react";
import { PiCaretDoubleRightThin } from "react-icons/pi";

import House51Layout1 from "../../Assets/Images/house-layouts/1.png"
import House51Layout2 from "../../Assets/Images/house-layouts/2.png"
import House57Layout1 from "../../Assets/Images/house-layouts/3.png"
import House57Layout2 from "../../Assets/Images/house-layouts/4.png"
import House96Layout1 from "../../Assets/Images/house-layouts/5.png"
import House96Layout2 from "../../Assets/Images/house-layouts/6.png"
import House77Layout1 from "../../Assets/Images/house-layouts/7.png"
import House77Layout2 from "../../Assets/Images/house-layouts/8.png"
import House57Render1 from "../../Assets/Images/51-57/render-1.png"
import House57Render2 from "../../Assets/Images/51-57/render-2.png"
import House57RenderLoc from "../../Assets/Images/51-57/render-loc.jpg"
import House57Render3 from "../../Assets/Images/51-57/render-3.png"
import House57Render4 from "../../Assets/Images/51-57/render-4.png"
import House57Render5 from "../../Assets/Images/51-57/render-5.png"
import House57Render6 from "../../Assets/Images/51-57/render-6.png"
import House57Render7 from "../../Assets/Images/51-57/render-7.png"
import House77RenderLoc from "../../Assets/Images/77/77RenderLoc.jpg"
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
      houseId: 1,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House51Layout1
    },
    {
      id: 2,
      houseId: 1,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House51Layout2
    },
    {
      id: 3,
      houseId: 1,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House57RenderLoc
    },
    {
      id: 4,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render1
    },
    {
      id: 5,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render2
    },
    {
      id: 6,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render3
    },
    {
      id: 7,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render4
    },
    {
      id: 8,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render5
    },
    {
      id: 9,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render6
    },
    {
      id: 10,
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
      imageUrl: House57RenderLoc
    },
    {
      id: 4,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render1
    },
    {
      id: 5,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render2
    },
    {
      id: 6,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render3
    },
    {
      id: 7,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render4
    },
    {
      id: 8,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render5
    },
    {
      id: 9,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render6
    },
    {
      id: 10,
      houseId: 1,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House57Render7
    },
  ]

  const house96Images: HouseImage[] = [
    {
      id: 1,
      houseId: 3,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House96Layout1,
    },
    {
      id: 1,
      houseId: 3,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House96Layout2,
    }
  ]

  const house77Images: HouseImage[] = [
    {
      id: 1,
      houseId: 4,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House77Layout1
    },
    {
      id: 2,
      houseId: 4,
      roomType: RoomType.HOUSE_LAYOUT,
      imageUrl: House77Layout2
    },
    {
      id: 3,
      houseId: 4,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77RenderLoc
    },
    {
      id: 4,
      houseId: 4,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render1
    },
    {
      id: 5,
      houseId: 4,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render2
    },
    {
      id: 6,
      houseId: 4,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render3
    },
    {
      id: 7,
      houseId: 4,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render4
    },
    {
      id: 8,
      houseId: 4,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render5
    },
    {
      id: 9,
      houseId: 4,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render6
    },
    {
      id: 10,
      houseId: 4,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render7
    },
    {
      id: 11,
      houseId: 4,
      roomType: RoomType.LIVING_ROOM,
      imageUrl: House77Render8
    },
    {
      id: 12,
      houseId: 4,
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
      type: 'Superior',
      images: house57Images,
      dimension: 57,
      description: 'Rumah ini cocok bagi pasangan muda yang baru menikah dan memiliki rencana untuk memiliki satu hingga dua anak. Desainnya memungkinkan ruman ini untuk tumbun seiring berjalannya waktu, dengan potensi penggunaan lahan belakang yang beragam untuk keperluan masa depan. Selain itu, rumah ini memiliki budget atau harga yang lebih terjangkau, sambil menawarkan taman belakang yang luas untuk berbagai aktivitas outdoor.',
      isActive: false,
      actions: {
        offer: '',
        explore: 'https://app.lapentor.com/sphere/numa-housing'
      },
      details: {
        location: '90',
        floor: 2,
        bedRoom: '2',
        bathRoom: '2',
        parking: '1 Carport',
        price: 1169000000
      }
    },
    {
      id: 4,
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
        location: '96',
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
      return 'Halo,%20Saya%20tertarik%20dengan%20rumah%20tipe%20Compact'
    } else if (houseId === 2) {
      return 'Halo,%20Saya%20tertarik%20dengan%20rumah%20tipe%20Standar'
    } else if (houseId === 3) {
      return 'Halo,%20Saya%20tertarik%20dengan%20rumah%20tipe%20Superior'
    } else {
      return 'Halo,%20Saya%20tertarik%20dengan%20rumah%20tipe%20Deluxe'
    }
  }

  const [houses, setHouses] = useState<typeof availableTypes>(availableTypes)
  const [activeHouseId, setActiveHouseId] = useState<number>(1)

  const [houseImages, setHouseImages] = useState<HouseImage[]>(house51Images)
  const [activeImageId, setActiveImageId] = useState<number>(0)
  const [imageHeight, setImageHeight] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [specificationsActive, setSpecificationsActive] = useState<boolean>(false)

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

    switch (id) {
      case 1: {
        setHouseImages(house51Images)
        setActiveImageId(0)
        break
      } case 2: {
        setHouseImages(house57Images)
        setActiveImageId(0)
        break
      } case 3: {
        setHouseImages(house96Images)
        setActiveImageId(0)
        break
      } case 4: {
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div id="house-numa" className="houses bg-gray-100 flex flex-col py-10 px-10 md:pt-0 md:px-20 lg:px-[150px] text-slate-700">
        <h4 className="py-10 uppercase text-gray-600 text-center md:text-left">House Types</h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-2">
          {houses.map((house) => {
            return (
              <div
                onClick={() => {
                  handleActiveHouse(house.id)
                  setSpecificationsActive(false)
                }}
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
          <div className="w-full md:1/2 lg:w-1/3">
            <div ref={houseDetailsRef} className="house-details w-full">
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
                  <small className="text-xs">Fully Furnished,<br /> For more Information Click <span className="cursor-pointer" onClick={() => setSpecificationsActive(!specificationsActive)}>Specifications</span></small>
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-5 mt-5">
                <button
                  onClick={() => {
                    window.location.href = "#house-spec"
                    setSpecificationsActive(!specificationsActive)
                  }}
                  className="
                  bg-white text-center text-gray-700 uppercase font-normal 
                  w-full py-5 hover:bg-gray-200 hover:text-gray-800 transition-all 
                  ease-in-out duration-300 items-center justify-center">
                  Specifications
                </button>
                <a
                  href={houses[activeHouseId - 1].actions.explore} target="_blank" className="bg-white text-center text-gray-700 uppercase font-normal w-full py-5 hover:bg-gray-200 hover:text-gray-800 transition-all ease-in-out duration-300 items-center justify-center">
                  Explore House 360°
                </a>
                <button
                  id="house-spec"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = `https://api.whatsapp.com/send/?phone=%2B628989901011&text&type=phone_number&app_absent=0&text=${generateMessageText(activeHouseId)}`
                  }}
                  className="bg-black text-white uppercase font-normal text-center w-full py-5 hover:bg-gray-600 hover:text-gray-100 transition-all ease-in-out duration-300 items-center justify-center">
                  Check for Price
                </button>
              </div>
            </div>
          </div>
          <div className={`w-full md:h-[${imageHeight}px] md:1/2 lg:w-2/3 flex items-center justify-center`}>
            <div className={`bg-white relative rounded-lg md:h-[${imageHeight}px] w-full`}>
              <img
                style={{
                  height: windowWidth < 600 ? '100%' : `${imageHeight}px`
                }}
                className={`
                  w-full rounded-lg 
                  ${activeImageId === 0 || activeImageId === 1 ? 'object-contain' : 'object-cover'} object-center transition-all duration-300 ease-in-out`}
                src={houseImages[activeImageId].imageUrl} />
              <div className={`absolute inset-0 flex flex-row justify-between md:h-[${imageHeight}px] w-full bg-gray-10`}>
                <div className="w-1/12 flex items-center invert justify-center">
                  <button
                    onClick={handlePrevImage}
                    className="w-full h-full bg-transparent text-center flex items-center justify-center hover:pl-10 transition-all ease-in-out duration-300">
                    <PiCaretDoubleRightThin className='rotate-180 text-white' size={28} />
                  </button>
                </div>
                <div className="w-1/12 flex items-center invert justify-center">
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
      <div
        id="house-spec"
        className={`
        house-specifications ${specificationsActive ? 'active' : ''}
        bg-gray-100 text-slate-700 flex flex-col lg:px-[150px] pb-10 px-10 md:px-20`}>
        <div className={`uppercase text-center md:text-left transition-all duration-300 ${specificationsActive ? '' : 'text-transparent'}`}>Specifications</div>
        <div className="flex flex-col md:flex-row mt-10">
          <div className="flex flex-col w-full md:w-2/3 gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Pondasi</h1>
              <h1 className="w-full md:w-1/2">Strauss Pile</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Atap</h1>
              <h1 className="w-full md:w-1/2">Atap Genteng Flat Beton ex. Cisangkan</h1>
              <h1 className="w-full md:w-1/2">Atap Skylight Polikarbonat ex. Solarflat</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Lantai</h1>
              <h1 className="w-full md:w-1/2">Lantai Bawah — Keramik 60x60 ex. Platinum Santiago Grey</h1>
              <h1 className="w-full md:w-1/2">Lantai Atas — Keramik 60x60 ex. Platinum Santiago Grey</h1>
              <h1 className="w-full md:w-1/2">Tangga — Kayu Vinyl ex. TACO 3mm</h1>
              <h1 className="w-full md:w-1/2">Kamar Mandi (+ Service) — Keramik 30x30 ex. Platinum Cargo Dark Grey</h1>
              <h1 className="w-full md:w-1/2">Area Servis — Acian Semen Roll</h1>
              <h1 className="w-full md:w-1/2">Teras Depan — Lantai Kayu Conwood + Coating</h1>
              <h1 className="w-full md:w-1/2">Area Samping & Teras Belakang — Batu Split</h1>
              <h1 className="w-full md:w-1/2">Carport — Acian Semen Roll</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Dinding</h1>
              <h1 className="w-full md:w-1/2">Dinding Interior — Bata Campuran, Plester Aci / Kamprot, Fin. Cat ex/ Catylac Pure White</h1>
              <h1 className="w-full md:w-1/2">Dinding Exterior — Bata Campuran, Plester Aci / Kamprot, Fin. Cat ex/ Catylac Exterior Brilliant White</h1>
              <h1 className="w-full md:w-1/2">Kamar Mandi — Keramik Putih 10x20 ex. Mulia Subway Tile, List Profil Kayu 20x20mm Fin. Melamik Natural</h1>
              <h1 className="w-full md:w-1/2">Kamar Mandi Service — Keramik Putih 10x20 ex. Mulia Subway Tile</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Pintu & Jendela</h1>
              <h1 className="w-full md:w-1/2">Pintu dan Jendela — Alumunium Ex. Alexindo Silver + Kaca Bening</h1>
              <h1 className="w-full md:w-1/2">Pintu Utama — Kusen Kayu Solid 50/150 ex. Kamper Fin. Melamik Natural, Daun Pintu Meateak Sungkai Fin. Melamik Natural</h1>
              <h1 className="w-full md:w-1/2">Pintu Kamar — Kusen Kayu Solid 50/150 ex. Kamper Fin. Melamik Natural, Daun Pintu Meateak Sungkai Fin. Melamik Natural</h1>
              <h1 className="w-full md:w-1/2">Jendela — Alumunium Ex. Alexindo Silver + Kaca Bening</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Mekanikal & Elektrikal</h1>
              <h1 className="w-full md:w-1/2">Listrik — 2200Watt</h1>
              <h1 className="w-full md:w-1/2">TV Antena Kabel — Komunal & Kamar Utama</h1>
              <h1 className="w-full md:w-1/2">Sistem Pemanas Air — Water Heater Listrik ex. Arsiton</h1>
              <h1 className="w-full md:w-1/2">Air Conditioner (AC) — Instalasi pada Kamar Utama (0.5Pk)</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Sanitair</h1>
              <h1 className="w-full md:w-1/2">Air — Submersible</h1>
              <h1 className="w-full md:w-1/2">Pipa — Maspion</h1>
              <h1 className="w-full md:w-1/2">TOTO</h1>
              <h1 className="w-full md:w-1/2">Biological Filter Septic Tank</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Kanopi</h1>
              <h1 className="w-full md:w-1/2">Rangka Besi</h1>
              <h1 className="w-full md:w-1/2">Atap Metal Spandek t=0.45</h1>
            </div>
          </div>
          {/* <div className="flex flex-col w-full md:w-1/3 gap-6 mt-6 md:mt-0">
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Living Room Interior</h1>
              <h1 className="w-full md:w-1/2">Sofa</h1>
              <h1 className="w-full md:w-1/2">Coffee Table</h1>
              <h1 className="w-full md:w-1/2">Credenza</h1>
              <h1 className="w-full md:w-1/2">Side Table</h1>
              <h1 className="w-full md:w-1/2">Carpet</h1>
              <h1 className="w-full md:w-1/2">TV</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Dining Room Interior</h1>
              <h1 className="w-full md:w-1/2">Dining Table Set</h1>
              <h1 className="w-full md:w-1/2">Kulkas</h1>
              <h1 className="w-full md:w-1/2">Dispenser</h1>
              <h1 className="w-full md:w-1/2">Stand Lamp</h1>
              <h1 className="w-full md:w-1/2">Dining Lamp</h1>
              <h1 className="w-full md:w-1/2">Kitchen Set Kabinet Atas</h1>
              <h1 className="w-full md:w-1/2">Kitchen Set Kabinet Bawah</h1>
              <h1 className="w-full md:w-1/2">Kitchen Set Top Table Kayu</h1>
              <h1 className="w-full md:w-1/2">Kitchen Set Kompor Gas Tanam</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Service</h1>
              <h1 className="w-full md:w-1/2">Mesin Cuci Front Loading</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Master Bedroom Interior</h1>
              <h1 className="w-full md:w-1/2">Bunk Bed</h1>
              <h1 className="w-full md:w-1/2">Bed Queen Size</h1>
              <h1 className="w-full md:w-1/2">Wardrobe</h1>
              <h1 className="w-full md:w-1/2">Meja Rias</h1>
              <h1 className="w-full md:w-1/2">Mirror</h1>
              <h1 className="w-full md:w-1/2">Side Table</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="w-full md:w-1/2 uppercase font-bold">Kamar Anak 1 Interior</h1>
              <h1 className="w-full md:w-1/2">Bunk Bed</h1>
              <h1 className="w-full md:w-1/2">Bed</h1>
              <h1 className="w-full md:w-1/2">Wardrobe</h1>
              <h1 className="w-full md:w-1/2">Meja Belajar</h1>
              <h1 className="w-full md:w-1/2">Kursi Belajar</h1>
            </div>
            {activeHouseId === 4 && (
              <>
                <div className="flex flex-col gap-2">
                  <h1 className="w-full md:w-1/2 uppercase font-bold">Kamar Anak 2 Interior</h1>
                  <h1 className="w-full md:w-1/2">Bunk Bed</h1>
                  <h1 className="w-full md:w-1/2">Bed</h1>
                  <h1 className="w-full md:w-1/2">Wardrobe</h1>
                  <h1 className="w-full md:w-1/2">Meja Belajar</h1>
                  <h1 className="w-full md:w-1/2">Kursi Belajar</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="w-full md:w-1/2 uppercase font-bold">Multifunction Room Interior</h1>
                  <h1 className="w-full md:w-1/2">Meja Belajar</h1>
                  <h1 className="w-full md:w-1/2">Office Chair</h1>
                  <h1 className="w-full md:w-1/2">Ambalan</h1>
                  <h1 className="w-full md:w-1/2">Carpet</h1>
                </div>
              </>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Houses