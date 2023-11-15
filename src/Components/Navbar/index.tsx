const Navbar: React.FC = () => {
    return (
        <nav className="jumbotron-navbar bg-transparent flex items-center justify-between px-10 md:px-[200px] py-4 font-semibold z-20 top-0 left-0 absolute w-full">
            <div className="text-white">
                <h1 className="text-lg font-bold">Numa Housing</h1>
            </div>

            <div className="text-white flex-grow text-center relative font-semibold">
                <ul className="hidden md:flex justify-center gap-6">
                    <a href="#">
                        <li className="nav-item relative p-4">
                            Home
                            <div className="hover-border"></div>
                        </li>
                    </a>
                    <a href="#">
                        <li className="nav-item relative p-4">
                            About
                            <div className="hover-border"></div>
                        </li>
                    </a>
                    <a href="#">
                        <li className="nav-item relative p-4">
                            Contact
                            <div className="hover-border"></div>
                        </li>
                    </a>
                </ul>
            </div>

            <div className="block text-white font-semibold">
                <button className="border-[1px] px-6 py-2 border-white hover:backdrop-blur-sm transition-all duration-100">Schedule A Visit</button>
            </div>
        </nav>

    );
}

export default Navbar