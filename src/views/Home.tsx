import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div className="overflow-hidden">
            <Navbar />

            <>
                <main
                    className="max-w-[1920px] mx-auto mt-10 px-8 lg:px-14 flex flex-col items-center justify-center gap-10 lg:gap-20 overflow-hidden shrink
                                lg:flex-row"
                >
                    <div className="max-w-4xl flex flex-col justify-center items-center gap-8 mb-5 lg:items-start">
                        <h1 className="text-6xl font-bold text-center lg:text-start lg:text-7xl leading-20">
                            Bienvenidos a nuestro{" "}
                            <span className="text-main-light-green">
                                recetario escolar
                            </span>
                        </h1>

                        <p className="font-extralight text-2xl text-center leading-9 lg:text-start">
                            Somo estudiantes del taller de gastronomia donde
                            aprendemos a preparar deliciosos productos. Aquí
                            compartiremos las recetas que elaboramos en clase
                            para que todos puedan replicarlas.
                        </p>

                        <Link
                            to={"/recipes"}
                            className="font-bold text-black text-3xl bg-main-light-green px-14 py-6 rounded-full"
                        >
                            Ver recetas
                        </Link>
                    </div>

                    <div className="lg:min-w-lg">
                        <img
                            className="object-center"
                            src="https://placehold.co/600x700"
                            alt=""
                        />
                    </div>
                </main>
            </>
        </div>
    );
}

export default Home;
