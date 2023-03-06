import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {

  return (
    // <nav>
    //     <Link to="/">Home</Link>
    //     <br />
    //     <Link to="/about">About</Link>
    //     <br />
    //     <Link to="/login">Login</Link>
    // </nav>
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink to="/" className={ ({ isActive }) => {
                        return `nav-link ${ isActive ? 'active' : '' }`
                    }}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={ ({ isActive }) => {
                        return `nav-link ${ isActive ? 'active' : '' }`
                    }}>
                        About
                    </NavLink>
                    <NavLink to="/login" className={ ({ isActive }) => {
                        return `nav-link ${ isActive ? 'active' : '' }`
                    }}>
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  );

};

export default NavBar;