import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "./api";
import { CommentList } from "./commentList";
import { useVotes } from "./articleVotes";

export const ArticlePage = () => {
    const { article_id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [article, setArticle] = useState({});
    const { currentVotes, setVotes } = useVotes(article.votes);

    function handleVote(inc_votes) {
        setVotes((previousVotes) => previousVotes + inc_votes);
        voteArticle(article_id, inc_votes).catch(() => {
            setVotes((previousVotes) => previousVotes - inc_votes);
        });
    }

    useEffect(() => {
        if (article_id) {
            setIsLoading(true);
            getArticleById(article_id).then(({ article }) => {
                setIsLoading(false);
                setArticle(article);
                setVotes(article.votes);
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
                    <img src={article.article_img_url} />
                    <h3>{article.topic}</h3>
                    <p>{article.body}</p>
                    <p>By: {article.author} Date: {new Date(article.created_at).toLocaleDateString()}</p>
                    <p>Comment Count: {article.comment_count}</p>
                    <p>Votes: {currentVotes}</p>
                    <div>
                        <button
                            className="upvote"
                            type="button"
                            color="green"
                            onClick={() => handleVote(1)}
                        >
                            Upvote
                        </button>

                        <button
                            className="downvote"
                            type="button"
                            color="red"
                            onClick={() => handleVote(-1)}
                        >
                            Downvote
                        </button>
                    </div>
                    <CommentList article_id={article_id} />
                </article>
            )}
        </section>
    );
};

