import Link from "next/link"
import Image from "next/image"

function Footer(){
    return(
        <>
            <div className="bg-CustomColor">
                <div className="w-full h-[450px]">
                    <div className="flex justify-around font-serif pt-16">
                        <div>
                            <h1 className="mb-6">OUR COMPANY</h1>
                            <div className="text-gray-800">
                            <Link href="#">About Us</Link><br/>
                            <Link href="#">Contact Us</Link><br/>
                            <Link href="#">COVID-19 Response</Link><br/>
                            <Link href="#">Privacy Policy</Link><br/>
                            <Link href="#">Terms of Service</Link><br/>
                            <Link href="#">Refund policy</Link>
                            </div>
                        </div>
                        <div>
                        <h1 className="mb-6">USEFUL LINKS</h1>
                        <div className="text-gray-800">
                        <Link href="#">Ratings & Reviews</Link><br/>
                            <Link href="#">#HIJABFam</Link><br/>
                            <Link href="#">Are you a Blogger?</Link><br/>
                            <Link href="#">Wholesale/Resselers</Link><br/>
                        </div>
                        </div>
                        <div>
                            <h1 className="mb-6">Customer Support</h1>
                            <div className="text-gray-800">
                            <Link href="#">Frequently Asked Questions</Link><br/>
                            <Link href="#">Delivery Policy</Link><br/>
                            <Link href="#">Return & Refunds</Link><br/>
                            <Link href="#">Order Disputes?</Link><br/>
                            </div>
                            </div>
                        
                        <div>
                        <h1 className="mb-6">Newsletter subscription</h1>
                        <p className="text-gray-800">Sign up for Hijab Co. Updates to receive<br/>information about new arrivals, future<br/>events and special offers.</p>
                        <button className="mt-6 px-7 border border-gray-600 rounded-sm bg-white text-gray-500">Enter Email Address</button>
                        <button className="ml-4 px-4 border border-gray-600 rounded-sm bg-white text-gray-500">Subscribe</button>
                        </div>
                    </div>
                    <h1 className="font-serif text-center mt-10 mb-4">FOLLOW US</h1>
                    <div className="flex ml-[620px]">
                    <Image className="cursor-pointer w-7 h-7" src="/images/fb.png" alt="facebook logo" width={20} height={20} />
                    <Image className="cursor-pointer mx-3 h-7 w-7" src="/images/insta.png" alt="instagram logo" width={20} height={20} />
                    <Image className="cursor-pointer w-7" src="/images/youtube.png" alt="youtube logo" width={20} height={20} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
