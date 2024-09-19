import { useState, useEffect } from "react"
import { getAllArticles } from "./api"
import { ArticleBox } from "./articleBox"
import { useSearchParams } from "react-router-dom";
import { SortBy } from "./SortBy";
import { Link } from "react-router-dom";

const HandleSortByButtonClick = ({children}) => {
    const [SortByDropDownOpen, setSortByDropDownOpen] = useState(false)
    const dropDown = () => {
        setSortByDropDownOpen(!SortByDropDownOpen)
    }
    return (
        <div>
            <button onClick={dropDown}>
                {SortByDropDownOpen ? "Sort by Ascending" : "Sort by Descending"}
            </button>
            {SortByDropDownOpen ? children : null}
        </div>
    )
}

export const ArticleItems = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [ searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get("topic")
    const [isError, setIsError] = useState(false)
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")
    const params = {
        params: { topic: topicQuery, sort_by: sortByQuery, order: orderQuery}
    }
    const handleClick = ({ target: {name}})=>{
        setSearchParams({...searchParams, topic: name})
    }
    const [CategoriesDropDownOpen, setCategoriesDropDownOpen] = useState(false)

    const handleCategoriesButtonClick = () => {
        setCategoriesDropDownOpen(!CategoriesDropDownOpen)
    }


    useEffect(() => {
        setIsLoading(true);
        getAllArticles(params).then(({ articles }) => {
            setIsLoading(false);
                setArticles(articles);
        }).catch((error) => {
            console.error("Error fetching articles: ", error);
            setIsLoading(false)
            setIsError(true)
        })
},[topicQuery, sortByQuery, orderQuery])

if (isError){
    return <p>Bad Request</p>
}

    return (
        <section  className="articles-box-style">
            <div className="sort-by-section">
            <HandleSortByButtonClick className="sort-by-button">
                <SortBy className="text-sort-by" searchParams={searchParams} setSearchParams={setSearchParams} />
            </HandleSortByButtonClick>
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
            </div>
                {isLoading ? (
                    <p className="loading">Loading...</p>
                ) : (
                    <ul className="article-format">
                        {articles && articles.length > 0 ? (
                            articles.map((article) => (
                            <ArticleBox key={article.article_id} article={article} 
                            searchParams={searchParams}
                            setSearchParams={setSearchParams}/>
                            ))
                        ) : (
                            <p>No articles found</p>
                        )}
                    </ul>
                )}
        </section>
    );
};
