import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Github World &#128269;</Link>
            <Link to="/About" className="navbar-brand float-right">About</Link>
        </nav>
    );
}

export default NavBar;