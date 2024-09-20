import { useState, useEffect } from "react"
import { patchVotes } from "./api"


export const UseVotes = ({ votes, article_id }) => {
  const [articleVotes, setArticleVotes] = useState(votes)
  const [error, setError] = useState(null)
  const handleVote = (voteChange) => {
    setArticleVotes(articleVotes + voteChange)
    patchVotes(article_id, voteChange).catch((err) => {
      setArticleVotes(articleVotes - voteChange)
      setError("There was an error adding your vote.")
    })
  }
  return (
    <section className="vote">
      <b className="voteTag">
        votes: <b>{articleVotes}</b>
      </b>
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
      {error ? <p>{error}</p> : null}
    </section>
  )
}