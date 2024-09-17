import { Link } from "react-router-dom"

export const ArticleBox = ({ article }) => {
 return (
    <li className="article-box">
        <h2>{article.title}</h2>
        <Link to={`/articles/${article.article_id}`}>View Full Article</Link>
        <img src={article.article_img_url}/>
        <h3>{article.topic}</h3>
        <p> By: {article.author} Date: {new Date(article.created_at).toLocaleDateString()}</p>
    </li>
 )
}