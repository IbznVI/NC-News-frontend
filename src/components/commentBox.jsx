export const CommentBox = ({ comment }) => {
    return (
        <li>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>Date: {new Date(comment.created_at).toLocaleDateString()}</p>
        </li>
    )
}