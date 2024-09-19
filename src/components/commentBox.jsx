import { useEffect, useContext } from "react"
import { UserContext } from "../contexts/userContext"
import { deleteComment } from "./api"

export const CommentBox = ({ comment, setArticleComments }) => {
    const {defaultUser: { username }} = useContext(UserContext)

    const handleClick = ({ target: {name}}) =>{
        deleteComment(name).then(()=>{
            setArticleComments((allComments)=>{
                return allComments.filter((comment)=>{
                    return comment.comment_id !== +name
                })
            })
        })
    }
    return (
        <li>
            <h3>{comment.author}</h3>
            <div>
            <p>{comment.body}</p>
            {username === comment.author ? (<button 
            className="comment-delete" name={comment.comment_id} onClick={handleClick}>Delete</button>) : null}
            </div>
            <p>Date: {new Date(comment.created_at).toLocaleDateString()}</p>
        </li>
    )
}