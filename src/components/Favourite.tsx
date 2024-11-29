import Image from "next/image"

function Favourites(){
    return(
        <>
        <h1 className="font-serif text-center text-3xl my-10">MOST FAVOURITE</h1>

        <main className="bg-[url('/images/fav.png')] w-full h-[750px] flex flex-col bg-cover mb-10">
        <h1 className="text-7xl text-white font-bold font-serif ml-[470px] mt-[500px] mb-8">BUNDLES</h1>
        <button className="font-serif text-2xl text-white bg-lime-700 bg-opacity-50 rounded-md ml-[470px] w-96 py-5">VIEW COLLECTION</button>
        </main>

        <div className="flex justify-evenly">
            <div>
                <Image className="h-80 w-60 cursor-pointer" src="/images/rectangle16.png" alt="item 1" width={200} height={300}/>
                <h1 className="font-serif text-center mt-6">Chiffon Bubble-Bundle of 6</h1>
                <p className="ml-5 text-yellow-400">★ ★ ★ ★ ★ 
                    <span className="ml-3 font-serif text-sm text-gray-500">246 reviews</span>
                    </p>
                    <p className="font-serif ml-16">Rs. 3,490.00</p>
                    <button className="mt-4 py-2 px-[60px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Add to Cart</h1></button>
            </div>
            
            <div>
                <Image className="h-80 w-60 cursor-pointer" src="/images/rectangle17.png" alt="item 1" width={200} height={300}/>
                <h1 className="font-serif text-center mt-6">Crimps-Bundle of 6</h1>
                <p className="ml-7 text-yellow-400">★ ★ ★ ★ ★ 
                    <span className="ml-3 font-serif text-sm text-gray-500">379 reviews</span>
                    </p>
                    <p className="font-serif ml-16">Rs. 2,790.00</p>
                    <button className="mt-4 py-2 px-[60px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Add to Cart</h1></button>
            </div>

            <div>
                <div className="bg-[url('/images/rectangle18.png')] w-60 h-80 cursor-pointer ">
                <h1 className="text-white bg-red-700 px-2 py-2 w-12">-2%</h1>
                </div>
                <h1 className="font-serif text-center mt-6">Plain.Lawn Tassels-Bundle of 6</h1>
                <p className="ml-7 text-yellow-400">★ ★ ★ ★ ★ 
                    <span className="ml-3 font-serif text-sm text-gray-500">379 reviews</span>
                    </p>
                    <s className="ml-8 font-serif">Rs. 2,994.00</s>
                    <span className="ml-2 font-serif">Rs. 2,591.00<br/></span>
                <button className="mt-4 py-2 px-[60px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Add to Cart</h1></button>
                </div>

            <div>
                <Image className="h-80 w-60 cursor-pointer" src="/images/rectangle19.png" alt="item 1" width={200} height={300}/>
                <h1 className="font-serif text-center mt-6">Essential Silk-bundle of 6</h1>
                <p className="ml-7 text-yellow-400">★ ★ ★ ★ ★ 
                    <span className="ml-3 font-serif text-sm text-gray-500">379 reviews</span>
                    </p>
                    <p className="font-serif ml-16">Rs. 3,590.00</p>
                    <button className="mt-4 py-2 px-[60px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Add to Cart</h1></button>
                </div>
               
        </div>

        </>
    )
}
export default Favourites