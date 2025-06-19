import { Link } from "react-router-dom"

function NotFound () {
    return (
        <>
            <div className="grid place-items-center gap-5 mt-8">
                <h1>Not found 404</h1>
                <Link to={'/'} className="bg-main-light-green px-4 py-3 rounded-full text-black">Home</Link>
            </div>
        </>
    )
}

export default NotFound