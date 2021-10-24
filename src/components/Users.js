const Users = ({ users }) => {
  return (
    <div className="row">
      {users.map((user, key) => (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={key}>
          {user.Name}
          <img
            src={
              user.Social.GitHub.trim().length > 0
                ? user.Social.GitHub + ".png"
                : "https://i.imgur.com/T2v2oUz.png"
            }
            alt={user.Name}
          />
        </div>
      ))}
    </div>
  );
};

export default Users;
