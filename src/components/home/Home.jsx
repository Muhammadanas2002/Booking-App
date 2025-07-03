import Featured from "../featured/Featured"
import FeatureHotels from "../featuredhotels/FeatureHotels"
import Header from "../header/Header"
import Navbar from "../navbar/navbar"
import MailList from "../MailList/MailList"
import "./home.css"
import PropertyList from "../PropertyList/PropertyList"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">

        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeatureHotels />
        <MailList/>
      </div>
    </div>
  )
}

export default Home
