import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <header className="nc-news-title">NC NEWS</header>
      <div className="Nav">
        <button
          className="nav-button"
          type="button"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="nav-button"
          type="button"
          onClick={() => navigate("/articles")}
        >
          Articles
        </button>
      </div>
    </div>
  );
};