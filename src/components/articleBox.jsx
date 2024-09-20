import { useState } from "react"
import { Link } from "react-router-dom"
export const ArticleBox = ({ article, searchParams, setSearchParams }) => {
        const handleClick = ({ target: {name}})=>{
            setSearchParams({...searchParams, topic: name})
        }
 return (
    <div>
    <li className="article-box">
        <h2>{article.title}</h2>
        <Link to={`/articles/${article.article_id}`}>View Full Article</Link>
        <img src={article.article_img_url}/>
        <button className="topic-button" onClick={handleClick} name={article.topic}>
            {article.topic}
        </button>
        <p> By: {article.author} Date: {new Date(article.created_at).toLocaleDateString()}</p>
    </li>
    </div>
 )
}