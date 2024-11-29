import Image from "next/image"

function Winters(){
    return(
        <>
        <h1 className="font-serif my-10 text-3xl text-center">WINTER SPECIAL</h1>
        <main  className="mb-10 w-full h-[800px] flex flex-col sm:flex-row justify-evenly bg-[url('/images/winter.png')] bg-cover ">
        <h1 className="ml-[940px] mt-48 text-red-800 text-7xl font-serif font-bold">HELLO</h1>
        <h1 className="mt-80 ml-[-320px] text-red-800 text-7xl font-serif font-bold">WINTERS</h1>
        <div> 
            <button className="ml-[-390px] mt-[450px] px-24 py-5 text-white text-2xl bg-red-700 bg-opacity-50 rounded-md font-serif">VIEW COLLECTION</button>
            </div>
        </main>

        <div className="flex justify-evenly">
            <div className="w-72 h-96 bg-[url('/images/rectangle12.png')]">
                <h2 className="py-1 w-11 text-white bg-black font-serif">NEW</h2>
            </div>

            <div className="w-72 h-96 bg-[url('/images/rectangle13.png')]">
                <h2 className="py-1 w-11 text-white bg-black font-serif">NEW</h2>
            </div>

            <div className="w-72 h-96 bg-[url('/images/rectangle14.png')]">
                <h2 className="py-1 w-11 text-white bg-black font-serif">NEW</h2>
            </div>

            <div className="w-72 h-96 bg-[url('/images/rectangle15.png')]">
                <h2 className="py-1 w-11 text-white bg-black font-serif">NEW</h2>
            </div>
        </div>
        <div className="flex">
            <div>
            <h1 className="ml-32 font-serif my-3 text-lg">Zigzag-Blush</h1>
            <span className="ml-32 font-serif">Rs. 1,290.00</span>
            <button className="mt-4 ml-10 py-2 px-[80px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Add to Cart</h1></button>
                </div>

                <div>
            <h1 className="ml-28 font-serif my-3 text-lg">Zigzag-Aqua</h1>
            <span className="ml-28 font-serif">Rs. 1,290.00</span>
            <button className="mt-4  py-2 px-[80px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Add to Cart</h1></button>
                </div>

                <div>
            <h1 className="ml-20 font-serif my-3 text-lg">Zigzag-Mustard</h1>
            <span className="ml-20 font-serif">Rs. 1,290.00</span>
            <button className="mt-4 py-2 px-[80px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Add to Cart</h1></button>
                </div>

                <div>
            <h1 className="ml-28 font-serif my-3 text-lg">Zigzag-Beige</h1>
            <span className="ml-28 font-serif">Rs. 1,290.00</span>
            <button className="mt-4 ml-4 py-2 px-[80px] border border-black bg-white">
                <Image className="w-10 h-10" src="/images/cart.jpg" alt="optons button" width={50} height={50}/>
                <h1 className="ml-10 mt-[-30px] font-serif">Add to Cart</h1></button>
                </div>
            </div>
        </>
    )
}
export default Winters