// styles
import "./AllIndoors.css"

// data
import { allindoors } from "../data/data"
import Product from "../pages/Product"

const AllIndoors = () => {

    return (
        <div className="all-indoors-container">
            <h1>ALL INDOORS PLANTS</h1>

            <div className="all-indoors-wrapper">
                {allindoors.map(plant => (
                    <div key={plant.id} className="all-indoors">
                        <Product data={plant} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AllIndoors