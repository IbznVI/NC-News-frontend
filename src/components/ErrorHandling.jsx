import { Link } from "react-router-dom"

export const ErrorHandler = ({ message: { status }}) => {
    return (
        <div>
            <h2 className="loading">Sorry, we cannot find what you are looking for</h2>
            <p className="loading">Head back to the homepage or view some articles using the above buttons in the navigation bar</p>
        </div>
    )
}

export const NotFoundPage = () => {
    return (
        <div>
            <h1 className="loading">404 Error: Page not found</h1>
        </div>
    )
}
