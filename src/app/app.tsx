import "./app.css";
import Header from "../components/header/header";
import SearchMoviePage from "../pages/searchMoviePage/searchMoviePage";
import Footer from "../components/footer/footer";

export function App() {
  return (
    <div className="app">
      <Header />
      <SearchMoviePage />
      <Footer />
    </div>
  );
}
