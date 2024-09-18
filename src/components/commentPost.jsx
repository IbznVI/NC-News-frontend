import { useState, useContext } from "react"
import { UserContext } from "../contexts/userContext"
import { getCommentById, postComment } from "./api"

export const CommentForm = ({ comments, setComments, article_id }) => {
    const [commentText, setCommentText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {defaultUser: {username}} = useContext(UserContext)

    const handleChange = ({target:{value}}) =>{
        setCommentText(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {username: username, body: commentText}
        setIsLoading(true)
        setCommentText("")
    

    postComment(newComment, article_id).then((comment)=>{
        setComments([comment, ...comments])
        setIsLoading(false)
    })
}

return(
    <form className="comment-post" onSubmit={handleSubmit}>
        {isLoading ? (
            <p>Posting comment...</p>
        ) : (
            <textarea 
            onChange={handleChange}
            value={commentText}
            placeholder="Comment here..."
            required
            />
        )}
        <input className="comment-submit" type="submit" disabled={isLoading} />
    </form>
)
}

