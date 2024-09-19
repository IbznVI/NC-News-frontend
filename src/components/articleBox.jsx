import { useState } from "react"
import { Link } from "react-router-dom"
export const ArticleBox = ({ article, searchParams, setSearchParams }) => {
        const handleClick = ({ target: {name}})=>{
            setSearchParams({...searchParams, topic: name})
        }
    
        const [CategoriesDropDownOpen, setCategoriesDropDownOpen] = useState(false)

        const handleCategoriesButtonClick = () => {
            setCategoriesDropDownOpen(!CategoriesDropDownOpen)
        }

 return (
    <div>
            <button
          className="nav-button"
          type="button"
          onClick={handleCategoriesButtonClick}
        >
          Categories
        </button>
        {CategoriesDropDownOpen && (
          <div className="categories-dropdown">
            <Link to="/articles?topic=cooking">       Cooking      </Link>
            <Link to="/articles?topic=coding">      Coding        </Link>
            <Link to="/articles?topic=football">      Football     </Link>
          </div>
        )}
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