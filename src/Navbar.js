import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Travel blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
                <Link to="/About">About us</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;  