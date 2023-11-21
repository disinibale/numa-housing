import { FC } from "react";
import { IconType } from "react-icons";
import { LiaCubeSolid, } from 'react-icons/lia'

import HomeBackground from '../../Assets/Images/Hero Image.jpg'
import Navbar from "../Navbar";


type PageVariant = 'Home' | 'About'

interface PageContext {
    subText?: string;
    displayText?: string;
    button?: string | null | undefined;
    buttonIcon?: IconType;
    backgroundImage?: string;
}

const JumbotronVariant: Record<PageVariant, PageContext> = {
    Home: {
        subText: 'Luxury Residence',
        displayText: 'Numa Urban Co-Housing',
        button: 'Explore 3D Visualization',
        buttonIcon: LiaCubeSolid,
        backgroundImage: HomeBackground
    },
    About: {
        subText: 'About Us',
        displayText: 'Numa Urban Co-Housing Info',
        button: undefined,
        backgroundImage: HomeBackground
    },

}

interface JumbotronProps {
    variant: PageVariant
}

const Jumbotron: FC<JumbotronProps> = ({ variant }) => {
    return (
        <div className="jumbotron-container px-10 md:px-[200px] text-white min-w-full min-h-screen flex flex-col justify-center bg-gray-300 overflow-hidden relative">
            <Navbar />
            <div className="jumbotron-image absolute top-0 left-0 z-5 min-w-full min-h-full -backdrop-hue-rotate-0"></div>
            <div className="jumbotron-text z-10">
                <h1 className="text-3xl md:text-4xl font-semibold">{JumbotronVariant[variant].subText}</h1>
                <h1 className="text-5xl md:text-8xl mt-6 font-extrabold">{JumbotronVariant[variant].displayText}</h1>
                {
                    JumbotronVariant[variant].button ? <div className={`flex`}>
                        <a target="_blank" href="https://app.lapentor.com/sphere/numa-housing-tipe-77" className="p-3 md:p-6 mt-4 md:mt-8 text-small md:text-normal bg-white text-slate-950 uppercase flex items-center gap-4 hover:bg-gray-200 transition-colors duration-500"><LiaCubeSolid size={30} />{JumbotronVariant[variant].button}</a>
                    </div> : <></>
                }
            </div>

        </div>
    )
}

export default Jumbotron