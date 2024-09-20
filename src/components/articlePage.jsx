import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, patchVotes } from "./api";
import { CommentList } from "./commentList";
import { UseVotes } from "./articleVotes";
import { ErrorHandler } from "./ErrorHandling";

export const ArticlePage = () => {
    const { article_id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [article, setArticle] = useState({});
    const [isError, setIsError] = useState(null)



    useEffect(() => {
        if (article_id) {
            setIsLoading(true);
            getArticleById(article_id).then(({ article }) => {
                setIsLoading(false);
                setArticle(article);
            }).catch((err)=>{
                setIsLoading(false)
                setIsError(err)
            });
        }
    }, [article_id]);

    return (
        <div>
            { isError ? (
                <ErrorHandler message={isError} />
            ) : (
        <section>
            {isLoading ? (
                <p className="loading">Loading...</p>
            ) : (
                <article className="article">
                    <h1>{article.title}</h1>
                    <img src={article.article_img_url} />
                    <h3>{article.topic}</h3>
                    <p>{article.body}</p>
                    <p>By: {article.author} Date: {new Date(article.created_at).toLocaleDateString()}</p>
                    <b>Comment Count: {article.comment_count}</b>
                    <UseVotes votes={article.votes} article_id={article_id} />
                    <CommentList article_id={article_id} />
                </article>
            )}
        </section>
                    )}
        </div>
    );
};

