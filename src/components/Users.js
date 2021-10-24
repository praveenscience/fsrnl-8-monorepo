import User from "./User";

const Users = ({ users }) => {
  return (
    <div className="row">
      {users.map((user, key) => (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={key}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
};

export default Users;
