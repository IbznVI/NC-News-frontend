import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getArticleById } from "./api"
import { CommentList } from "./commentList"

export const ArticlePage = () => {
    const { article_id } = useParams();
    console.log(article_id)
    const [isLoading, setIsLoading] = useState(false)
    const [ article, setArticle] = useState({})

        useEffect(() => {
            if (article_id) {
                setIsLoading(true);
                getArticleById(article_id).then(({ article }) => {
                    setIsLoading(false);
                    setArticle(article);
                });
            }
        }, [article_id]);

    return (
        <section>
                {isLoading ? (
                    <p className="loading">Loading...</p>
                ) : (
                    <article className="article">
                     <h1>{article.title}</h1>
                     <img src={article.article_img_url}/>
                     <h3>{article.topic}</h3>
                     <p> By: {article.author} Date: {new Date(article.created_at).toLocaleDateString()}</p>
                     <p>Comment Count: {article.comment_count}</p>
                     <p>Votes: {article.votes}</p>
                     <CommentList article_id={article_id} />
                    </article>
                )}
        </section>
    );
}

