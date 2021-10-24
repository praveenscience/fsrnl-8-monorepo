const User = ({ user }) => {
  return (
    <div className="card">
      <img
        src={
          user.Social.GitHub.trim().length > 0
            ? user.Social.GitHub + ".png"
            : "https://i.imgur.com/T2v2oUz.png"
        }
        className="card-img-top"
        alt={user.Name}
      />
      <div className="card-body">
        <h5 className="card-title">{user.Name}</h5>
        <p className="card-text">{user.Intro}</p>
        <a href={"/"} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default User;
