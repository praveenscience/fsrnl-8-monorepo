import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="card">
      <img
        src={
          user.Social.GitHub.trim().length > 0
            ? user.Social.GitHub + ".png"
            : "https://i.imgur.com/iN9yTJ8.png"
        }
        className="card-img-top"
        alt={user.Name}
      />
      <div className="card-body">
        <h5 className="card-title">{user.Name}</h5>
        <p className="card-text">{user.Intro}</p>
        <Link to={"/users" + user.Path} className="btn btn-primary btn-sm">
          Profile
        </Link>
        {Object.keys(user.Social).map(
          social =>
            user.Social[social].trim().length > 0 && (
              <a
                href={user.Social[social]}
                key={social}
                className="btn btn-primary btn-sm ms-2"
              >
                {social}
              </a>
            )
        )}
      </div>
    </div>
  );
};

export default User;
