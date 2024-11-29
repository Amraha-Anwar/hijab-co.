import Image from "next/image"

function Categories(){
    return (
        <>
        <h1 className="text-3xl font-serif mx-[515px] my-10">SHOP BY CATEGORY</h1>

        <div className="flex justify-around mb-20">
            <div>
            <Image className="w-52 h-72 cursor-pointer" src="/images/rectangle3.png" alt="hijabs" width={250} height={300}/>
            <div className="mx-1 h-[39px] bg-white bg-opacity-30 backdrop-blur-md mt-[-45px]">
                <h1 className="text-center text-xl font-bold font-sans pt-1">HIJABS</h1>
            </div>
            </div>

            <div>
            <Image className="w-52 h-72 cursor-pointer" src="/images/rectangle4.png" alt="abayas" width={250} height={300}/>
            <div className=" h-[45px] bg-white bg-opacity-30 backdrop-blur-md mt-[-45px]">
                <h1 className="text-center text-xl font-bold font-sans pt-1">ABAYAS</h1>
            </div>
            </div>

            <div>
            <Image className="w-52 h-72 cursor-pointer" src="/images/rectangle5.png" alt="western" width={250} height={300}/>
            <div className="mx-1 h-[45px] bg-white bg-opacity-30 backdrop-blur-md mt-[-45px]">
                <h1 className="text-center text-xl font-bold font-sans pt-1">WESTERN</h1>
            </div>
            </div>

            <div>
            <Image className="w-52 h-72 cursor-pointer" src="/images/rectangle6.png" alt="jewelry" width={250} height={300}/>
            <div className="h-[45px] bg-white bg-opacity-30 backdrop-blur-md mt-[-45px]">
                <h1 className="text-center text-xl font-bold font-sans pt-1">JEWELRY</h1>
            </div>
            </div>
        </div>
        </>
    )
}
export default Categories