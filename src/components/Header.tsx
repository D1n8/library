import { Link } from "react-router-dom";

function Header() {
    return ( 
    <header>
        <Link className="link" to='/'>О сайте</Link>
        <Link className="link" to='/books'>Список книг</Link>
    </header> );
}

export default Header;