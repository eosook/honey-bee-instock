import { Link } from "react-router-dom";
import "./ErrorPage.scss";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404!</h1>
      <p className="error-page__message">Oops! Page not found...🦖🦖🦖.</p>
      <Link to="/" className="error-page__link">
        👉🏼👉🏼👉🏼 Back to Home Page👈🏼👈🏼👈🏼
      </Link>
    </div>
  );
};
export default ErrorPage;
