function Navbar() {
    return (
        <>
            <header className="h-4/12 px-8 bg-header-green rounded-b-4xl flex justify-between relative">
                <div>
                    <img
                        className="h-full"
                        src="/logo.svg"
                        alt="Rustic Tates Logo"
                    />
                </div>
                <nav className="bg-menu fixed right-0 h-screen px-14 flex items-center">
                    <ul className="flex flex-col gap-8">
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Sobre nosotros</a>
                        </li>
                        <li>
                            <button type="button">Ver recetas</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
