import { useState } from 'react'
import './App.css'
import { Header } from "./components/header"
import { ArticleItems } from "./components/articleItems"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page-background">
      <Header />
      <ArticleItems />
    </div>
  )
}

export default App
