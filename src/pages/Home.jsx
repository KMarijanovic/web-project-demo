// styles
import "./Home.css"

// images
import someArticlePicOne from "../images/article-pics/some-article-pic-one.jpg"
import someArticlePicTwo from "../images/article-pics/some-article-pic-two.jpg"

// components
import Slider from "../components/Slider"
import ScrollButton from "../components/ScrollButton"

// rendered Product component
import Product from "../pages/Product"

// data
import { allindoors, jungleNews } from "../data/data"

// links
import { Link } from "react-router-dom"

const Home = () => {

    const newPlantArrivals = allindoors.filter((plant) => {
        return plant.newArrival === "yes";
    });

    return (
        <div className="home">
            <ScrollButton />
            <Slider />
            <div className="some-article-one">
                <div className="article-info-one">
                    <h2>ARTICLE ONE</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi ab architecto ratione, fugiat hic omnis ut quam aliquid labore in, suscipit nostrum asperiores iste officia rerum accusamus ex exercitationem.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eveniet reprehenderit fugiat nisi ullam, neque hic quaerat omnis porro. Unde, architecto inventore error dolore consequatur rerum pariatur. Quod, harum sit!</p>
                </div>
                <div className="article-pic-one">
                    <img src={someArticlePicOne} alt="plants" />
                </div>
            </div>
            <div className="arrivals-title">
                <h2>just came recently, our NEW ARRIVALS</h2>
            </div>
            <div className="arrivals">
                {newPlantArrivals.map(plant => (
                    <div key={plant.id} className="new-plant">
                        <Product data={plant} />
                    </div>
                ))};

                {/* {newPlantArrivals.map((plant) => (
                    <div key={plant.id} className="new-plant">
                        <img className="new-plant-img" alt="plant" src={plant.img}></img>
                        <h3 className="new-plant-title">{plant.title}</h3>
                        <p className="new-plant-desc">{plant.desc}</p>
                        <span className="new-plant-price">{plant.price} €</span>
                        <button className="new-plant-btn">add to cart</button>
                    </div>
                ))} */}
            </div>
            <div className="some-article-two">
                <div className="article-pic-two">
                    <img src={someArticlePicTwo} alt="plants" />
                </div>
                <div className="article-info-two">
                    <h2>ARTICLE TWO</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi ab architecto ratione, fugiat hic omnis ut quam aliquid labore in, suscipit nostrum asperiores iste officia rerum accusamus ex exercitationem.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eveniet reprehenderit fugiat nisi ullam, neque hic quaerat omnis porro. Unde, architecto inventore error dolore consequatur rerum pariatur. Quod, harum sit!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a, eum doloribus distinctio exercitationem doloremque in nostrum provident dolor, nemo, animi tenetur laboriosam? Qui, fugiat ducimus distinctio maxime sunt earum!</p>
                </div>
            </div>
            <div className="news-title">
                <h2>latest news from our jungle</h2>
            </div>
            <div className="news">
                {jungleNews.slice(0, 3).map((news) => (
                    <div key={news.id} className="news-container">
                        <h3 className="news-specific-title">{news.title}</h3>
                        <img src={news.img} alt="news" className="news-img" />
                        <p className="news-desc">{news.desc.substring(0, 100)}...</p>
                        <Link to={`news/${news.id}`} className="news-link">Read more about this one!</Link>
                    </div>
                ))}
            </div>
            <div className="news-all">
                <span style={{ fontSize: "30px", fontWeight: "bold", color: "white", letterSpacing: "3px", marginRight: "10px" }}>Interested?</span><Link to={`news/all`}>Read more.</Link>
            </div>
        </div>
    )
}
export default Home