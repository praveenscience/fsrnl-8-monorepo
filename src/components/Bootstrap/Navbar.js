import { Route, NavLink } from "react-router-dom";

const Links = [
  {
    Name: "Home",
    Link: "/"
  },
  {
    Name: "About Me",
    Link: "/about"
  },
  {
    Name: "Downloads",
    Link: "/downloads"
  },
  {
    Name: "Feedback",
    Link: "/feedback"
  },
  {
    Name: "Random Page",
    Link: "/giuhrt597h"
  }
];
const Navbar = ({ children, dark, toggleNav }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav className={`navbar navbar-expand navbar-${dark} bg-${dark}`}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{children}</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {Links.map(link => (
              <li className="nav-item" key={link.Link}>
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  activeClassName="active"
                  to={link.Link}
                >
                  {link.Name}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <span className="nav-link nav-action" onClick={toggleNav}>
                Toggle Nav
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
