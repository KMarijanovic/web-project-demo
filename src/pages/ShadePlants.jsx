// styles
import "./ShadePlants.css"

// data
import { allindoors } from "../data/data"

const ShadePlants = () => {

    const shadeTolerantPlants = allindoors.filter((plant) => {
        return plant.shadeTolerant === "yes";
    });

    return (
        <div className="shade-plants-container">
            <h1>SHADE TOLERANT PLANTS</h1>

            <div className="shade-plants-wrapper">
                {shadeTolerantPlants.map(plant => (
                    <div key={plant.id} className="shade-plant">
                        <img src={plant.img} alt="shade tolerant plant" />
                        <h3>{plant.title}</h3>
                        <p>{plant.desc}</p>
                        <p className="shade-plant-price">{plant.price} €</p>
                        <button>add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ShadePlants