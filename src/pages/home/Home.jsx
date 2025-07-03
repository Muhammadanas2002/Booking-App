import Featured from "../../components/featured/Featured"
import FeatureHotels from "../../components/featuredhotels/FeatureHotels"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/navbar"
import PropertyList from "../../components/propertyList/propertyList"
import MailList from "../../components/MailList/MailList"
import "./home.css"

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
