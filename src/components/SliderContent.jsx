const SliderContent = ({ activeIndex, sliderItems }) => {
    return (
        <section>
            {sliderItems.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide.img} alt="" />
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-text">{slide.desc}</p>
                    <button className="slide-btn">SHOW ME NOW</button>
                </div>
            ))}
        </section>
    )
}
export default SliderContent