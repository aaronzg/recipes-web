import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        if (menu) {
            document.body.classList.add('overflow-hidden')
        }
        else {
            document.body.classList.remove('overflow-hidden')
        }
    },[menu])

    return (
        <>
            <div className="h-screen w-screen bg-black/56 hidden"/>
            <header className="h-24 px-14 w-screen  bg-header-green rounded-b-4xl flex justify-between relativea z-0 overflow-hidden">
                <div className="">
                    <img
                        className="h-full"
                        src="/logo.svg"
                        alt="Rustic Tates Logo"
                    />
                </div>

                <button type="button" className="text-3xl md:hidden" onClick={() => setMenu(!menu)}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                
                {menu && (
                    <div className="fixed inset-0 bg-black/70 z-10"/>
                )}

                <nav 
                className={`${!menu ? 'translate-x-full md:translate-0' : 'translate-x-0'} px-14 md:px-0 text-xl transition-transform bg-menu fixed right-0 h-screen flex flex-col justify-center overflow-hidden z-20 
                            md:relative md:bg-transparent md:flex-row md:h-full md:overflow-auto `}>

                    <button type="button" className="absolute top-8 right-13 text-3xl md:hidden" onClick={() => setMenu(!menu)}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>

                    <ul className="flex flex-col gap-16 md:flex-row md:items-center">
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Sobre nosotros</a>
                        </li>
                        <li>
                            <Link
                                to={'recipes'} 
                                type="button"
                                className="bg-main-light-green text-black font-bold px-6 py-4 rounded-full">
                                Ver recetas
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
