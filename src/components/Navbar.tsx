import Link from "next/link"
import Image from "next/image"

function Navbar(){
    return(
        <>
        <nav className="bg-white backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-24">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="#" className="font-bold text-black text-2xl font-serif">HIJAB CO.</Link>
                        </div>
                        <ul className="flex gap-8 text-gray-500 text-sm ml-56 mt-2 cursor-pointer">
                            <li className="hover:underline">TRENDING</li>
                            <li className="hover:underline">NEW</li>
                            <li className="hover:underline">HIJABS</li>
                            <li className="hover:underline">ABAYAS</li>
                            <li className="hover:underline">DRESSES</li>
                            <li className="hover:underline">ACCESORIES</li>
                            <li className="hover:underline">SALE</li>
                        </ul>
                        <button className="w-4 h-4 ml-40 mt-2"><Image src="/images/search.jpg" alt="search bar" width={50} height={50} /></button>
                        <button className="w-6 h-4 ml-2"><Image src="/images/like.jpg" alt="like button" width={50} height={50}/></button>
                        <button className="w-6 h-4 ml-3 mb-1"><Image src="/images/cart.jpg" alt="like button" width={50} height={50}/></button>
                        <p className="text-gray-500 text-sm ml- mt-1">Bag (0)</p>
                        <p className="text-gray-500 text-sm ml-1 mt-1">ENGLISH</p>
                    </div>
                    </div>
                </div>
        </nav>
        </>
    )
}
export default Navbar