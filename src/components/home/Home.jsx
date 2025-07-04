import Featured from "../featured/Featured"
import FeatureHotels from "../featuredhotels/FeatureHotels"
import Header from "../Header/Header"
import Navbar from "../navbar/navbar"
import MailList from "../MailList/MailList"
import "./home.css"
import Propertylist from "../propertyList/propertyList"
import Footer from "../Footer/Footer"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">

        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        {/* <PropertyList /> */}
        <Propertylist />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeatureHotels />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
