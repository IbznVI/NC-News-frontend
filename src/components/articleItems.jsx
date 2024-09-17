import { useState, useEffect } from "react"
import { getAllArticles } from "./api"
import { ArticleBox } from "./articleBox"

export const ArticleItems = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getAllArticles().then((response) => {
            setIsLoading(false);
                setArticles(response.articles);
        }).catch((error) => {
            console.error("Error fetching articles: ", error);
            setIsLoading(false)
        })
},[])

    return (
        <section  className="articles-box-style">
                {isLoading ? (
                    <p className="loading">Loading...</p>
                ) : (
                    <ul className="article-format">
                        {articles && articles.length > 0 ? (
                            articles.map((article) => (
                                <ArticleBox key={article.article_id} article={article} />
                            ))
                        ) : (
                            <p>No articles found</p>
                        )}
                    </ul>
                )}
        </section>
    );
};
