// if trigger is true, the popup will show
// boolean true or false state
// passing it in with props


// styles
import "./Popup.css"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                <h2>Subscribe & Enjoy</h2>
                <h1>10% Off</h1>
                <p>Receive <b>10% off Gift Voucher</b> at checkout toward your 1st happyGREEN purchase.</p>

                <form name="newsletter">
                    <label htmlFor="email">Email Address:</label>
                    <input className="input-one" name="email" id="email" type="email" autoComplete="off" placeholder="enter your e-mail here" />
                    <input className="input-two-sub" type="submit" value="subscribe" />
                </form>
            </div>
        </div>
    ) : "";
}
export default Popup