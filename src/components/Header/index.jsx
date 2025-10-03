import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Fluent Study Logo" className="logo" />
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Bosh Sahifa</Link></li>
        <li><Link to="/courses">Kurslar</Link></li>
        <li><Link to="/tests">Tests</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/aboutus">Biz haqimizda</Link></li>
      </ul>

      <div className="auth-buttons">
        <button className="btn-outline">Kirish</button>
        <button className="btn-primary">Ro'yxatdan o'tish</button>
      </div>
    </header>
  );
}

export default Header;
