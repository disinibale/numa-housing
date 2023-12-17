import { FC, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { GoLinkExternal } from "react-icons/go";

import HomeBackground from '../../Assets/Images/Hero Image.jpg'
import Navbar from "../Navbar";

import BackroundImage1 from '../../Assets/Images/jumbotron-1.jpg'
import BackroundImage2 from '../../Assets/Images/jumbotron-2.jpg'


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
        displayText: 'Numa Housing',
        button: 'Watch Teaser',
        buttonIcon: GoLinkExternal,
        backgroundImage: HomeBackground
    },
    About: {
        subText: 'About Us',
        displayText: 'Numa Housing Info',
        button: undefined,
        backgroundImage: HomeBackground
    },

}

interface JumbotronProps {
    variant: PageVariant,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Jumbotron: FC<JumbotronProps> = ({ variant, setModalOpen }) => {
    const backgroundImages: string[] = [
        BackroundImage1,
        BackroundImage2,
    ]

    const [backgroundImage, setBackgroundImage] = useState<string>(backgroundImages[0])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
            setBackgroundImage(randomImage)
        }, 5000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="jumbotron-container px-10 md:px-20 lg:px-[150px] text-white min-w-full min-h-screen flex flex-col justify-center bg-gray-300 overflow-hidden relative">
            <Navbar />
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    filter: 'blur(1px) brightness(0.7)',
                    transition: 'background 1s ease, filter 0.5s ease',
                }}
                className="absolute top-0 left-0 z-5 min-w-full min-h-full -backdrop-hue-rotate-0"></div>
            <div className="jumbotron-text z-10">
                <h1 className="text-3xl md:text-4xl font-semibold">{JumbotronVariant[variant].subText}</h1>
                <h1 className="text-5xl md:text-8xl mt-6 font-extrabold">{JumbotronVariant[variant].displayText}</h1>
                {
                    JumbotronVariant[variant].button ? <div className={`flex`}>
                        <button
                            onClick={() => setModalOpen(true)}
                            className="p-3 md:p-6 mt-4 md:mt-8 text-small md:text-normal bg-white text-slate-950 uppercase flex items-center gap-4 hover:bg-gray-200 transition-colors duration-500">
                            {JumbotronVariant[variant].button}<GoLinkExternal size={20} />
                        </button>
                    </div> : <></>
                }
            </div>

        </div>
    )
}

export default Jumbotron