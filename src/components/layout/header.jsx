// import { Link } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <ul>
            {/* <li><a className="active" href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/products">Products</a></li> */}
            
            {/* <li><Link class="active" to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li> */}
            
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>


        </ul>
    )
}

export default Header;
