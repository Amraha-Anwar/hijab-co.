import Image from "next/image"

function Collection (){
    return (
        <>
        <main className="mb-10 w-full h-[800px] flex flex-col sm:flex-row justify-evenly bg-[url('/images/collection.png')] bg-cover ">
        <div className="basis-1/2 mr-[620px] mt-28">
        <h1 className="text-amber-900 text-6xl font-bold font-serif mb-10">COLORFUL.</h1>
        <h1 className="text-amber-900 text-6xl font-bold font-serif ml-24 mb-10">COOL.</h1>
        <h1 className="text-amber-900 text-6xl font-bold font-serif ml-12 mb-2">CLASSIC.</h1>
        <div> 
            <button className="text-white text-2xl bg-amber-900 bg-opacity-70 px-28 py-5 rounded-md font-serif">VIEW COLLECTION</button>
            </div>
            </div>
        </main>

        <div className="flex justify-evenly">
            <div className="w-72 h-96 bg-[url('/images/rectangle8.png')]">
                <h2 className="py-1 w-11 text-white bg-black font-serif">NEW</h2>
                <h2 className="py-1 mt-1 w-12 pl-2 text-white bg-red-600 font-serif">45%</h2>
            </div>

            <div className="w-72 h-96 bg-[url('/images/rectangle9.png')]">
                <h2 className="py-1 w-11 text-white bg-black font-serif">NEW</h2>
                <h2 className="py-1 mt-1 w-12 pl-2 text-white bg-red-600 font-serif">45%</h2>
            </div>

            <div className="w-72 h-96 bg-[url('/images/rectangle10.png')]">
                <h2 className="py-1 w-11 text-white bg-black font-serif">NEW</h2>
                <h2 className="py-1 mt-1 w-12 pl-2 text-white bg-red-600 font-serif">45%</h2>
            </div>

            <div className="w-72 h-96 bg-[url('/images/rectangle11.png')]">
                <h2 className="py-1 w-11 text-white bg-black font-serif">NEW</h2>
                <h2 className="py-1 mt-1 w-12 pl-2 text-white bg-red-600 font-serif">45%</h2>
            </div>
        </div>
        <div className="flex">
            <div>
            <h1 className="ml-14 font-serif my-3 text-lg">Mabderine Collar Pleated Blouse</h1>
            <s className="ml-20 font-serif">Rs. 2999.00</s>
            <span className="ml-2 font-serif">Rs. 2541.50<br/></span>
            <button className="mt-4 ml-10 py-2 px-[70px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Select Options</h1></button>
                </div>

                <div>
            <h1 className="ml-20 font-serif my-3 text-lg">Ditsy Floral Sleeves Tops</h1>
            <s className="ml-24 font-serif">Rs. 2999.00</s>
            <span className="ml-2 font-serif">Rs. 2541.50<br/></span>
            <button className="mt-4 ml-10 py-2 px-[70px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Select Options</h1></button>
                </div>

                <div>
            <h1 className="ml-14 font-serif my-3 text-lg">Ribbed Cuff sleeves printed tops</h1>
            <s className="ml-24 font-serif">Rs. 2999.00</s>
            <span className="ml-2 font-serif">Rs. 2541.50<br/></span>
            <button className="mt-4 ml-12 py-2 px-[70px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Select Options</h1></button>
                </div>

                <div>
            <h1 className="ml-14 font-serif my-3 text-lg">Ribbed Cuff sleeves printed tops</h1>
            <s className="ml-24 font-serif">Rs. 2999.00</s>
            <span className="ml-2 font-serif">Rs. 2541.50<br/></span>
            <button className="mt-4 ml-12 py-2 px-[70px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Select Options</h1></button>
                </div>
            </div>
        </>
    )
}
export default Collection