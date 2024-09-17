import { useState, useEffect } from "react"
import { getCommentById } from "./api"
import { CommentBox } from "./commentBox"

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
            <ul>
                {articleComments.map((comment)=>{
                    return <CommentBox key={comment.comment_id} comment={comment} />
                })}
            </ul>
        </section>
    )
}