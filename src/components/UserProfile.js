import { useParams } from "react-router-dom";

const UserProfile = ({ Users }) => {
  const Username = useParams().UserId;
  const UserData = Users.find(user => user.Path === "/" + Username);
  return UserData ? (
    <div className="alert alert-info text-center">
      <p>
        This is the User Profile page for user: <code>{Username}</code>.
        <br />
        The person has got a name: <strong>{UserData.Name}</strong>.
      </p>
      <blockquote className="p-2 bg-white rounded shadow-sm">
        <p className="m-0">{UserData.Intro}</p>
      </blockquote>
    </div>
  ) : (
    <div className="alert alert-danger text-center">
      No one's there! Tata! 👋🏻
    </div>
  );
};

export default UserProfile;
