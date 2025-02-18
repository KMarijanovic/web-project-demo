import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Arrows = ({ prevSlide, nextSlide }) => {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSlide}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span className="next" onClick={nextSlide}>
                <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </div>
    )
}
export default Arrows