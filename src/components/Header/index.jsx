
import { Link } from 'react-router-dom';
import './style.css'


function Header() {
    return (
        <header className='container' >
            <a href="/"> <img src="" alt="" /></a>
            <ul>
                <li><Link to={'/'} >Bosh Sahifa</Link></li>
                <li><Link to={'/courses'} >Kurslar</Link></li>
                <li><Link to={'/tests'} >Tests</Link></li>
                <li><Link to={'/blog'} >Blog</Link></li>
                <li><Link to={'/'} >Biz haqimizda</Link></li>
                <li><button>Kirish</button></li>
                <li><button>Ro'yxatdan o'tish</button></li>
            </ul>
        </header>
    );
}

export default Header;