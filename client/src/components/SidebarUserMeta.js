import React from "react";

const SidebarUserMeta = ({ profileURL, avatar, fullname }) => {
  return (
    <div className="UserMeta">
      <a href={profileURL}>
        <img src={avatar} alt={fullname} />
        {fullname}
      </a>
    </div>
  );
};

export default SidebarUserMeta;
