const Dots = ({ activeIndex, onclick, sliderItems }) => {
    return (
        <div className="all-dots">
            {sliderItems.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </div>
    )
}
export default Dots