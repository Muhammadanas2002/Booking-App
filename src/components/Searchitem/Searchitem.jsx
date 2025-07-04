import "./Searchitem.css"

const Searchitem = () => {
    return (
        <div className="searchItem">
            <img className="simg" src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/623157507.jpg?k=f77170069ea9edc7d89930e601f17301a4fb4cf07f7e73b6e758abaa9c16455b&o=" alt="" />
            <div className="sidesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxi0p">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancel0p">Free cancellation</span>
                <span className="siCancel0pSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="sidetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.6</button>
                </div>
                <div className="siDetailtxt">
                    <span className="siPrice">20,000</span>
                    <span className="siTax">include taxes & fees</span>
                    <button className="chkBtn">See Availibility</button>
                </div>
            </div>
        </div>
    )
}

export default Searchitem
