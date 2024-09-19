import { useState, useEffect } from "react"
import { getCommentById } from "./api"
import { CommentBox } from "./commentBox"
import { CommentForm } from "./commentPost"

export const CommentList = ({ article_id }) => {
    const [articleComments, setArticleComments] = useState([])

    useEffect(()=> {
        getCommentById(article_id).then(({comments})=>{
            setArticleComments(comments)
        })
    }, [])

    return (
        <section className="comment-section">
            <h2>Comment section</h2>
            <CommentForm 
            comments={articleComments}
            setComments={setArticleComments}
            article_id={article_id}
            />
            <ul>
                {articleComments.map((comment)=>{
                    return <CommentBox className="comment-box" key={comment.comment_id} comment={comment} setArticleComments={setArticleComments} />
                })}
            </ul>
        </section>
    )
}