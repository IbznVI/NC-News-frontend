import { useState, useEffect } from "react"
import { getAllArticles } from "./api"
import { ArticleBox } from "./articleBox"
import { useSearchParams } from "react-router-dom";

export const ArticleItems = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [ searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get("topic")
    const params = { params: { topic: topicQuery}}
    const [isError, setIsError] = useState(false)

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
},[topicQuery])

if (isError){
    return <p>Bad Request</p>
}

const handleClick = () => {
    setSearchParams()
}

    return (
        <section  className="articles-box-style">
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
