import React from "react";

const HeaderUserMeta = ({ profileURL, avatar, fullname, handleLogout }) => {
  return (
    <div className="UserMeta">
      <a href={profileURL}>
        <img src={avatar} alt={fullname} />
        {fullname}
      </a>
      <span className="nav-links">
        <a href="/">Home</a>
        <a href="/">Create</a>
        <a href="/" onClick={handleLogout}>
          Logout
        </a>
      </span>
    </div>
  );
};

export default HeaderUserMeta;
