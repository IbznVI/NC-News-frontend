import { useEffect, useContext, useState } from "react"
import { UserContext } from "../contexts/userContext"
import { deleteComment } from "./api"

export const CommentBox = ({ comment, setArticleComments }) => {
    const {defaultUser: { username }} = useContext(UserContext)

    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    const handleClick = ({ target: {name}}) =>{
        setLoading(true)
        deleteComment(name).then(()=>{
            setArticleComments((allComments)=>{
                return allComments.filter((comment)=>{
                    return comment.comment_id !== +name
                })
            })
            setLoading(false)
        }).catch((err)=>{
            setIsError("Failed to delete comment, Sorry!")
            setLoading(false)
        })
    }
    return (
        <li>
            <h3>{comment.author}</h3>
            <div>
            <p>{comment.body}</p>
            {username === comment.author ? (<><button 
            className="comment-delete" disabled={loading} name={comment.comment_id} onClick={handleClick}>Delete</button> {loading && <p>Deleting...</p>}</>) : null}
            </div>
            <p>Date: {new Date(comment.created_at).toLocaleDateString()}</p>
        </li>
    )
}