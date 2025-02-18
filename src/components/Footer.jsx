/* styles */
import "./Footer.css"

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPinterestP } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="address">
                <h3><FontAwesomeIcon icon={faEnvelope} /> hello@happygreen.com</h3>

                <section>
                    <p><FontAwesomeIcon icon={faLocationDot} style={{ color: "#fbcb6f" }} /> 93 green street</p>
                    <p>planet Mars</p>
                    <p>e7g 89m</p>
                    <p>0123 498 29889</p>
                </section>

                <section>
                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                    <span><FontAwesomeIcon icon={faPinterestP} /></span>
                    <span><FontAwesomeIcon icon={faYoutube} /></span>
                    <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                </section>
            </div>
            <div className="information">
                <h3>information</h3>

                <Link>delivery</Link>
                <Link>contact</Link>
                <Link>returns & refunds</Link>
                <Link>terms of service</Link>
                <Link>privacy policy</Link>
            </div>
            <div className="newsletter">
                <h3>newsletter</h3>

                <p>Sign up to our newsletter to receive exclusive offers.</p>

                <form name="newsletter">
                    <label htmlFor="email">Enter your email:</label>
                    <input name="email" id="email" type="email" autoComplete="off" placeholder="enter your e-mail here" />
                    <input type="button" value="SUBSCRIBE" className="submit-btn" />
                </form>
            </div>
        </div>
    )
}
export default Footer