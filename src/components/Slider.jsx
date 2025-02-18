// hooks
import { useEffect, useState } from "react"

// data
import { sliderItems } from "../data/data"

// content & components
import SliderContent from "./SliderContent"
import Dots from "./Dots"
import Arrows from "./Arrows"

// styles
import "./Slider.css"

const len = sliderItems.length - 1;

const Slider = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} sliderItems={sliderItems} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots
                activeIndex={activeIndex}
                sliderItems={sliderItems}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}
export default Slider