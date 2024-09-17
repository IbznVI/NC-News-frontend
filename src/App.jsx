import './App.css'
import { Route, Routes } from "react-router-dom"
import { Header } from "./components/header"
import { ArticleItems } from "./components/articleItems"
import { ArticlePage } from "./components/articlePage"
import { HomePage } from './components/homePage'

function App() {
  return (
    <div className="page-background">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/articles" element={<ArticleItems />}/>
        <Route path="/articles/:article_id" element={<ArticlePage />}/>
      </Routes>
    </div>
  )
}

export default App
