import { useState, useEffect } from "react"
import { getCommentById } from "./api"
import { CommentBox } from "./commentBox"
import { CommentForm } from "./commentPost"

export const CommentList = ({ article_id }) => {
    const [articleComments, setArticleComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(()=> {
        getCommentById(article_id).then(({comments})=>{
            setIsLoading(false)
            setArticleComments(comments)
        }).catch((err)=>{
            setIsLoading(false)
            setIsError(true)
        })
    }, [])

    if (isLoading){
        return <p className="loading">Loading...</p>
    }

    if (isError){
        return <p className="loading">Comments not found</p>
    }


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