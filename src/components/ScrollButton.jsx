// styles
import "./ScrollButton.css"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons"

// hooks
import { useState } from "react"

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 250) {
            setVisible(true)
        }
        else if (scrolled <= 250) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <FontAwesomeIcon icon={faCircleArrowUp} onClick={scrollToTop}
                className="scrollbtn"
                style={{ display: visible ? 'inline' : 'none' }} />
        </div>
    )
}
export default ScrollButton