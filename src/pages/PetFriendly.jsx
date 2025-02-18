// styles
import "./PetFriendly.css"

// data
import { allindoors } from "../data/data"

const PetFriendly = () => {

    const petFriendlyPlants = allindoors.filter((plant) => {
        return plant.petFriendly === "yes";
    })

    return (
        <div className="pet-friendly-container">
            <h1>EASY CARE PLANTS</h1>

            <div className="pet-friendly-wrapper">
                {petFriendlyPlants.map(plant => (
                    <div key={plant.id} className="pet-friendly">
                        <img src={plant.img} alt="pet friendly plant" />
                        <h3>{plant.title}</h3>
                        <p>{plant.desc}</p>
                        <p className="pet-friendly-price">{plant.price} €</p>
                        <button>add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PetFriendly