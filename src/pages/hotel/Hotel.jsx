import "./Hotel.css"
import Navbar from "../../components/navbar/navbar"
import Header from "../../components/Header/Header.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/MailList/MailList.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import { useState } from "react"
import { faCircle, faCircleXmark } from "@fortawesome/free-regular-svg-icons"
const Hotel = () => {

  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);
  const photo = [
    {
      src: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
    },
  ]


  const handleOpen = (i) => {
    setSlideNum(i);
    setOpen(true)
  }


  const handleMove = (d) => {
    let newSlideNum;
    if (d === "l") {
      newSlideNum = slideNum === 0 ? 5 : slideNum - 1
    } else {
      newSlideNum = slideNum === 5 ? 0 : slideNum + 1

    }
    setSlideNum(newSlideNum)
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />

          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
          <div className="sliderWrap">

            <img src={photo[slideNum].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrap">

          <button className="bookNow">Reserve or Book Now</button>

          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Nazimabad Block 2, Karachi</span>
          </div>
          <span className="hotelDistance">
            Excellent location 📍 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImgs">
            {photo.map((photo, i) => (
              <div className="hotelImgWrap">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTxt">
              <h1 className="hotelTitle">Stay In The Best Hotel</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Kraków-Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
