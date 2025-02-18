import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruck } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"

/* styles */
import "./Announcement.css"

const Announcement = () => {
    return (
        <div className="marquee">
            <div>
                <span>
                    <FontAwesomeIcon icon={faBell} />
                    FREE INTERNATIONAL DELIVERY OVER €60 - SHOP NOW
                    <FontAwesomeIcon icon={faTruck} />
                </span>
                <span>
                    <FontAwesomeIcon icon={faBell} />
                    FREE INTERNATIONAL DELIVERY OVER €60 - SHOP NOW
                    <FontAwesomeIcon icon={faTruck} />
                </span>
            </div>
        </div >
    )
}
export default Announcement