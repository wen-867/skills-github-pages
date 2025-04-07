import "./Navbar.css";
import { IoMdHome } from "react-icons/io";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">My Website</div>
            <ul className="navbar-links">
                <li><a href="#home"><IoMdHome /> Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;