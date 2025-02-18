// LOGIC: If params id is equal to news id - show it to user!

// styles
import "./NewsDetails.css"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

// data
import { jungleNews } from "../data/data"

//hooks
import { Link, useParams } from "react-router-dom"
import { useState } from "react"

const NewsDetails = () => {

    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };

    const params = useParams()
    if (params.id === '1') {
        const filteredNews = jungleNews.filter(news => news.id === 1)

        return filteredNews.map((news) => (
            <div key={news.id} className="filteredNews-container">
                <img src={news.img} alt="plant" />
                <h1>{news.title}</h1>
                <p>{news.desc.substring(0, 200)}...</p>
                {isShowMore && (
                    <p>...{news.desc.substring(200)}</p>
                )}
                <button onClick={toggleReadMoreLess}>
                    {isShowMore ? "Read Less" : "Read More"}
                </button>
                <Link to="/"><FontAwesomeIcon icon={faHouse} />(Back To Homepage)</Link>
            </div>
        ))
    }
    if (params.id === '2') {
        const filteredNews = jungleNews.filter(news => news.id === 2)

        return filteredNews.map((news) => (
            <div key={news.id} className="filteredNews-container">
                <img src={news.img} alt="plant" />
                <h1>{news.title}</h1>
                <p>{news.desc.substring(0, 200)}...</p>
                {isShowMore && (
                    <p>...{news.desc.substring(200)}</p>
                )}
                <button onClick={toggleReadMoreLess}>
                    {isShowMore ? "Read Less" : "Read More"}
                </button>
                <Link to="/"><FontAwesomeIcon icon={faHouse} />(Back To Homepage)</Link>
            </div>
        ))
    }
    if (params.id === '3') {
        const filteredNews = jungleNews.filter(news => news.id === 3)

        return filteredNews.map((news) => (
            <div key={news.id} className="filteredNews-container">
                <img src={news.img} alt="plant" />
                <h1>{news.title}</h1>
                <p>{news.desc.substring(0, 200)}...</p>
                {isShowMore && (
                    <p>...{news.desc.substring(200)}</p>
                )}
                <button onClick={toggleReadMoreLess}>
                    {isShowMore ? "Read Less" : "Read More"}
                </button>
                <Link to="/"><FontAwesomeIcon icon={faHouse} />(Back To Homepage)</Link>
            </div>
        ))
    }
    if (params.id === '4') {
        const filteredNews = jungleNews.filter(news => news.id === 4)

        return filteredNews.map((news) => (
            <div key={news.id} className="filteredNews-container">
                <img src={news.img} alt="plant" />
                <h1>{news.title}</h1>
                <p>{news.desc.substring(0, 200)}...</p>
                {isShowMore && (
                    <p>...{news.desc.substring(200)}</p>
                )}
                <button onClick={toggleReadMoreLess}>
                    {isShowMore ? "Read Less" : "Read More"}
                </button>
                <Link to="/"><FontAwesomeIcon icon={faHouse} />(Back To Homepage)</Link>
            </div>
        ))
    }
    if (params.id === '5') {
        const filteredNews = jungleNews.filter(news => news.id === 5)

        return filteredNews.map((news) => (
            <div key={news.id} className="filteredNews-container">
                <img src={news.img} alt="plant" />
                <h1>{news.title}</h1>
                <p>{news.desc.substring(0, 200)}...</p>
                {isShowMore && (
                    <p>...{news.desc.substring(200)}</p>
                )}
                <button onClick={toggleReadMoreLess}>
                    {isShowMore ? "Read Less" : "Read More"}
                </button>
                <Link to="/"><FontAwesomeIcon icon={faHouse} />(Back To Homepage)</Link>
            </div>
        ))
    }
}
export default NewsDetails