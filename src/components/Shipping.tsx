import Image from "next/image"

function Shipping(){
    return(
        <>
        <div className="flex justify-around my-20">
            <Image src="/images/shipping.png" alt="shipping logo" width={40} height={30}/>
            <div>
            <h1 className="font-bold">Free Shipping.</h1>
            <Image className="ml-44 mt-[-20px]" src="/images/doc.png" alt="document logo" width={30} height={30}/>
            <h1 className="mt-2 text-sm">Enjoy Free Shipping Across Pakistan on all<br/> Orders above Rs. 2,940</h1>
            </div>

            <div>
            <h1 className="font-bold">Payment Methods.</h1>
            <Image className="ml-44 mt-[-20px]" src="/images/pay.png" alt="payment logo" width={30} height={30}/>
            <h1 className="mt-2 text-sm">We Offer Cash nn Delivery across Pakistan</h1>
            </div>

            <div>
            <h1 className="font-bold">Returns and Refunds.</h1>
            <h1 className="mt-2 text-sm">Product(s) Can Be Exchanged within<br/>the 7days from the date of Delivery</h1>
            </div>
        </div>
        </>
    )
}
export default Shipping