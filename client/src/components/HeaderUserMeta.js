import React from "react";

const HeaderUserMeta = ({ profileURL, avatar, fullname }) => {
  return (
    <div className="UserMeta">
      <a href={profileURL}>
        <img src={avatar} alt={fullname} />
        {fullname}
      </a>
      <span className="nav-links">
        <a href="/">Home</a>
        <a href="/">Create</a>
      </span>
    </div>
  );
};

export default HeaderUserMeta;
