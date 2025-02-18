import { Link } from "react-router-dom"

/* Font Awesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"

/* logo icon */
import herbal from "../images/logo/herbal.png"

/* styles */
import "./Navbar.css"

const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="navbar-container-left">
                <Link to="/" className="brand">
                    <img src={herbal} className="herbal" alt="herbal" />
                    <span>happyGREEN</span>
                </Link>
            </div>

            <div className="navbar-container-center">
                <ul>
                    <li className="dropdown">
                        <Link className="dropbtn">indoor plants <FontAwesomeIcon icon={faSortDown} /></Link>
                        <div className="dropdown-content">
                            <Link to="/shadetolerant">shade tolerant</Link>
                            <Link to="/easycare">easy care</Link>
                            <Link to="/petfriendly">pet friendly</Link>
                            <Link to="/airpurifying">air purifying</Link>
                            <Link to="/allindoors">all indoors</Link>
                        </div>
                    </li>

                    <li className="dropdown">
                        <Link className="dropbtn">pots & care <FontAwesomeIcon icon={faSortDown} /></Link>
                        <div className="dropdown-content">
                            <Link to="/indoorpots">indoor pots</Link>
                            <Link to="/outdoorpots">outdoor pots</Link>
                            <Link to="/indoorplantcare">indoor plant care</Link>
                            <Link to="/outdoorplantcare">outdoor plant care</Link>
                        </div>
                    </li>

                    <li className="dropdown">
                        <Link className="dropbtn">outdoor plants <FontAwesomeIcon icon={faSortDown} /></Link>
                        <div className="dropdown-content">
                            <Link to="/seedsandbulbs">seeds & bulbs</Link>
                            <Link to="/gardentools">garden tools</Link>
                            <Link to="/outdoorplants">all outdoors</Link>
                        </div>
                    </li>

                    <li className="dropdown">
                        <Link className="dropbtn">gifts & home <FontAwesomeIcon icon={faSortDown} /></Link>
                        <div className="dropdown-content">
                            <Link to="/growurban">grow urban</Link>
                            <Link to="/books">books</Link>
                            <Link to="/hangers">hangers</Link>
                        </div>
                    </li>

                    <li>
                        <Link to="/aboutus" className="dropbtn">about us</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-container-right">
                <Link to="/search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="search-icon" />
                </Link>

                <Link to="/account">
                    <FontAwesomeIcon icon={faCircleUser} size="2x" className="user-icon" />
                </Link>

                <Link to="/cart">
                    <FontAwesomeIcon icon={faBasketShopping} size="2x" className="cart-icon" />
                </Link>
            </div>
        </div>
    )
}
export default Navbar
