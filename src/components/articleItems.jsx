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
            if (response && response.articles) {
                setArticles(response.articles);
            } else {
                setArticles([])
            }
        }).catch((error) => {
            console.error("Error fetching articles: ", error);
            setIsLoading(false)
        })
},[])

    return (
        <section>
            <div className="articles-box-style">
                {isLoading ? (
                    <p>Loading...</p>
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
            </div>
        </section>
    );
};
