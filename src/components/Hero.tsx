function Hero(){
    return(
        <>
        <div className="mt-0 w-full h-[750px] flex flex-col sm:flex-row justify-evenly bg-[url('/images/hero.png')] bg-cover opacity-95">
            <div className="basis-1/2 mr-[550px]">
            <h1 className="-rotate-90 text-white text-[23px] font-bold font-serif mr-[620px] mt-40">HOT</h1>
            <h1 className="text-5xl text-black font-serif font-bold ml-11 mt-[-40px]">SALE</h1>
            <h2 className=" text-white font-semibold text-5xl font-mono ml-20 mt-[-10px]">Special</h2>
            <h1 className="text-[120px] font-bold text-black font-serif ml-11 mt-[-50px]">NEW</h1>
            <h1 className="text-[120px] font-bold font-serif text-black ml-40 mt-[-60px]">YEAR</h1>
            <h2 className="-rotate-90 text-black font-serif font-bold text-[23px] mt-[-390px] ml-[-75px]">GET</h2>
            <h3 className="text-black font-bold text-5xl mt-[310px] ml-80">50%</h3>
            <h3 className="text-white text-[50px]  font-serif ml-80 mt-14">Off...</h3>
            </div>
        </div>
        </>
    )

    }
export default Hero
