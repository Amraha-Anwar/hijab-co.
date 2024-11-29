import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Categories from "../components/Categories"
import Collection from "../components/Collection"
import Winters from "../components/Winter"
import Favourites from "../components/Favourite"
import Shipping from "../components/Shipping"
import Footer from "../components/Footer"

function Homepage(){
  return(
    <>
     <Navbar/>
     <Hero/>
     <Categories/>
     <Collection/>
     <Winters/>
     <Favourites/>
     <Shipping/>
     <Footer/>
    </>
  )
}
export default Homepage