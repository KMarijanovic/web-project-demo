//styles
import "./News.css"

// data
import { jungleNews } from "../data/data"

import { Link } from "react-router-dom"

const News = () => {

    return (
        <div className="all-topics">
            {jungleNews.map((news) => (
                <div key={news.id} className="all-topics-container">
                    <div className="topic-pic">
                        <img src={news.img} alt="news" />
                    </div>
                    <div className="topic-info">
                        <h3 className="topic-title">{news.title}</h3>
                        <p className="topic-desc">
                            {news.desc.substring(0, 200)}...
                        </p>
                        <Link to={`/news/${news.id}`} className="topic-btn">Read More</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default News