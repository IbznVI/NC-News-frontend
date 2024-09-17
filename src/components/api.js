import axios from "axios";

const api = axios.create({baseURL: "https://nc-news-backend-f7vf.onrender.com/api"});

export const getAllArticles = () => {
    return api.get("/articles").then(({ data })=>{
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