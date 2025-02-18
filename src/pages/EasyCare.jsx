//styles
import "./EasyCare.css"

//data
import { allindoors } from "../data/data"

const EasyCare = () => {

    const easyCarePlants = allindoors.filter((plant) => {
        return plant.easyCare === "yes";
    })

    return (
        <div className="easy-care-container">
            <h1>EASY CARE PLANTS</h1>

            <div className="easy-care-wrapper">
                {easyCarePlants.map(plant => (
                    <div key={plant.id} className="easy-care">
                        <img src={plant.img} alt="easy care plant" />
                        <h3>{plant.title}</h3>
                        <p>{plant.desc}</p>
                        <p className="easy-care-price">{plant.price} €</p>
                        <button>add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default EasyCare