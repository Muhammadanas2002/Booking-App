import "./List.css"
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import Searchitem from "../../components/Searchitem/Searchitem"

const List = () => {

    const loc = useLocation()
    const [destination, setDestination] = useState(loc.state.destination)
    const [date, setDate] = useState(loc.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(loc.state.options)
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrap">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label htmlFor="">destination</label>
                            <input type="text" name="" id="" placeholder={destination} />
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Check in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")}to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date} />}
                        </div>
                        <div className="lsItem">

                            <label >Options</label>
                            <div className="lsopts">
                                <div className="lsOptItem">
                                    <span className="lsoptTxt">Min Price <small>per Night</small></span>
                                    <input className="lsoptInp" type="number" name="" id="" />
                                </div>
                                <div className="lsOptItem">
                                    <span className="lsoptTxt">Max Price <small>per Night</small></span>
                                    <input className="lsoptInp" type="number" name="" id="" />
                                </div>
                                <div className="lsOptItem">
                                    <span className="lsoptTxt" >Adult</span>
                                    <input placeholder={options.adult} min={1} className="lsoptInp" type="number" name="" id="" />
                                </div>
                                <div className="lsOptItem">
                                    <span className="lsoptTxt">Children </span>
                                    <input placeholder={options.children} min={0} className="lsoptInp" type="number" name="" id="" />
                                </div>
                                <div className="lsOptItem">
                                    <span className="lsoptTxt">Rooms </span>
                                    <input className="lsoptInp" placeholder={options.room} min={1} type="number" name="" id="" />
                                </div>
                            </div>
                        </div>

                        <button>Search</button>
                    </div>
                    <div className="listResult"> <Searchitem />
                        <Searchitem />
                        <Searchitem />
                        <Searchitem /> </div>

                </div>
            </div>
        </div>
    )
}

export default List
