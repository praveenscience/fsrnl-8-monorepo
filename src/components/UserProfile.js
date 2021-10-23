const Users = [
  {
    Name: "Praveen Kumar",
    Path: "/praveen",
    Intro: "I am a Full Stack JavaScript Specialist based in London, UK."
  },
  {
    Name: "Mudassar",
    Path: "/mudassar",
    Intro: "Day and Night I am learning :)"
  },
  {
    Name: "Sayan Dey",
    Path: "/sayan",
    Intro: "I am a .NET developer."
  },
  {
    Name: "Varun",
    Path: "/Varun",
    Intro: "Frontend developer based in berlin"
  },
  {
    Name: "Kundan Kumar Pandey",
    Path: "/kundan",
    Intro: "I am a developer. "
  },
  {
    Name: "Susanna",
    Path: "/susanna",
    Intro: "I am a fresher"
  },
  {
    Name: "Sree Ramya",
    Path: "/ramya",
    Intro: "I am Full Stack Learner"
  },
  {
    Name: "Bharatchandran",
    Path: "/bharatchandran",
    Intro: "I am a Btech student"
  }
];

const UserProfile = props => {
  const Username = props.match.params.UserId;
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
