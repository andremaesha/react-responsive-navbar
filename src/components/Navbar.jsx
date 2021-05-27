import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => setOpen(true);

    const closeMenu = () => setOpen(false);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
                Logo
            </Link>
            <div className="nav-icon">
                {open ? (
                    <button onClick={closeMenu}>
                        <FiX />
                    </button>
                ) : (
                    <button onClick={handleClick}>
                        <FiMenu />
                    </button>
                )}
            </div>
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link" onClick={closeMenu}>
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link" onClick={closeMenu}>
                        Shop
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/contact"
                        className="nav-link"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
