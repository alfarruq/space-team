import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Левая часть */}
        <div className="footer-about">
          <h2>Fluent Study</h2>
          <p>Zamonaviy ta’lim platformasi</p>
          <p>© 2025 Barcha huquqlar himoyalangan</p>
        </div>

        {/* Навигация */}
        <div className="footer-links">
          <h3>Bo‘limlar</h3>
          <ul>
            <li><Link to="/">Bosh sahifa</Link></li>
            <li><Link to="/courses">Kurslar</Link></li>
            <li><Link to="/tests">Testlar</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/aboutus">Biz haqimizda</Link></li>
          </ul>
        </div>

        {/* Контакты */}
        <div className="footer-contact">
          <h3>Bog‘lanish</h3>
          <p>Email: info@fluentstudy.uz</p>
          <p>Tel: +998 90 123 45 67</p>
          <br />
          <input placeholder="Email kirgizing" type="text" />
          <br />
          <br />
          <button>Yuborish</button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
