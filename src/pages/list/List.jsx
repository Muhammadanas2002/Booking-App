import "./List.css"
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/Header'

const List = () => {
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrap">
                    <div className="listSearch">
                        <h1 className=""></h1>
                    </div>
                    <div className="listResult"></div>

                </div>
            </div>
        </div>
    )
}

export default List
