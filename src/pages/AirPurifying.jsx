// styles
import "./AirPurifying.css"

// data
import { allindoors } from "../data/data"

const AirPurifying = () => {

    const airPurifyingPlants = allindoors.filter(plant => {
        return plant.airPurifying === "yes";
    })

    return (
        <div className="air-purifying-container">
            <h1>EASY CARE PLANTS</h1>

            <div className="air-purifying-wrapper">
                {airPurifyingPlants.map(plant => (
                    <div key={plant.id} className="air-purifying">
                        <img src={plant.img} alt="air purifying plant" />
                        <h3>{plant.title}</h3>
                        <p>{plant.desc}</p>
                        <p className="air-purifying-price">{plant.price} €</p>
                        <button>add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AirPurifying