import axios from "axios";

const api = axios.create({baseURL: "https://nc-news-backend-f7vf.onrender.com/api"});

export const getAllArticles = () => {
    return api.get("/articles").then(({ data })=>{
        return data
    })
}