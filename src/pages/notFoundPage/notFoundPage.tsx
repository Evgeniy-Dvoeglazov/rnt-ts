import { Pages } from "../../app/app";
import "./notFoundPage.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="notFoundPage">
      <div className="notFoundPage__container">
        <h2 className="notFoundPage__title">404</h2>
        <p className="notFoundPage__description">Страница не найдена</p>
        <Link to={Pages.SearchMovie} className="notFoundPage__link">
          Назад
        </Link>
      </div>
    </section>
  );
}
