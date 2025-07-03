import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed } from "@fortawesome/free-solid-svg-icons/faBed"
import { faPlane } from "@fortawesome/free-solid-svg-icons/faPlane"
import { faCar } from "@fortawesome/free-solid-svg-icons/faCar"
import { faTaxi } from "@fortawesome/free-solid-svg-icons/faTaxi"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson"
import { DateRange } from 'react-date-range';
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })


    const handleOption = (name, opt) => {
        setOptions(prev => {
            return {
                ...prev, [name]: opt === "i" ? options[name] + 1 : options[name] - 1,
            }
        })

    }
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode":"headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stayes</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && 
                    <><h1 className="headertitle">A lifetime of discounts? Its Genius.</h1>
                    <p className="headerdisc">Book tickets, hotels & more in minutes – anytime, anywhere</p>
                    <button className="headerbtn">Sign in / Register</button>
                    <div className="headersearch">

                        <div className="headersearchitem">
                            <FontAwesomeIcon icon={faBed} className="headericon" />
                            <input type="text" placeholder="Where are you going" className="headersearchInput" />
                        </div>

                        <div className="headersearchitem">
                            <FontAwesomeIcon icon={faCalendar} className="headericon" />
                            <span onClick={() => setOpenDate(!openDate)} className="headersearchtext">{`${format(date[0].startDate, "MM/dd/yyyy")}to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                            />}
                        </div>

                        <div className="headersearchitem">
                            <FontAwesomeIcon icon={faPerson} className="headericon" />
                            <span onClick={() => setOpenOptions(!openOptions)} className="headersearchtext">{`${options.adult}adult. ${options.children}children. ${options.room}room`}</span>

                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optiontext">
                                        Adult
                                    </span>
                                    <div className="optionCounter">
                                        <button disabled={options.adult <= 1} className="optioncounterbtn" onClick={() => handleOption("adult", "d")}>-</button>
                                        <span className="optioncounternumber">{options.adult}</span>
                                        <button className="optioncounterbtn" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optiontext">
                                        Children
                                    </span>
                                    <div className="optionCounter">
                                        <button disabled={options.children <= 0} className="optioncounterbtn" onClick={() => handleOption("children", "d")}>-</button>
                                        <span className="optioncounternumber">{options.children}</span>
                                        <button className="optioncounterbtn" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optiontext">
                                        Room
                                    </span>
                                    <div className="optionCounter">
                                        <button disabled={options.room <= 1} className="optioncounterbtn" onClick={() => handleOption("room", "d")}>-</button>
                                        <span className="optioncounternumber">{options.room}</span>
                                        <button className="optioncounterbtn" onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>

                        <div className="headersearchitem">
                            <button className="headerbtn">Search</button>
                        </div>

                    </div></>}
            </div>
        </div>

    )
}

export default Header
