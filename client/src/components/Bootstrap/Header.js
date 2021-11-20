import HeaderUserMeta from "../HeaderUserMeta";

const Header = ({ dark, children, className, UserMeta, handleLogout }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={
        `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
      }
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/logo512.png" alt={children + " Logo"} className="me-2" />
          {children}
        </a>
        {UserMeta && (
          <HeaderUserMeta {...UserMeta} handleLogout={handleLogout} />
        )}
      </div>
    </nav>
  );
};

export default Header;
