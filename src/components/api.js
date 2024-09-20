import axios from "axios";

const api = axios.create({baseURL: "https://nc-news-backend-f7vf.onrender.com/api"});

export const getAllArticles = (query) => {
    return api.get("/articles", query).then(({ data })=>{
        return data
    })
}

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({data})=>{
        return data
    })
}

export const getCommentById = (article_id) => {
    return api.get(`/articles/${article_id}/comments`).then(({data})=>{
        return data
    })
}

export const patchVotes = (article_id, voteChange) => {
    const patchBody = {
      inc_votes: voteChange
    }
    return api.patch(`/articles/${article_id}`, patchBody).then(({ data }) => {
      return data.article
    })
  }

export const postComment = (postBody, article_id) => {
    return api.post(`/articles/${article_id}/comments`, postBody)
    .then(({data: {comment}})=>{
        return comment
    })
}

export const deleteComment = (comment_id) => {
    return api.delete(`/comments/${comment_id}`)
}