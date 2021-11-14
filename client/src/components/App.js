import { useEffect, useState } from "react";
import { GetWallData, GetUserData } from "../services/UserData";
import Header from "./Bootstrap/Header";
import Feed from "./Feed";
import Main from "./Main";
import Sidebar from "./Sidebar";

const App = () => {
  const [Loading, setLoading] = useState(true);
  const [UserData, setUserData] = useState(null);
  const [WallData, setWallData] = useState([]);
  useEffect(() => {
    GetUserData().then(({ data: UserData }) => {
      setUserData(UserData);
      GetWallData().then(({ data: WallData }) => {
        setWallData(WallData);
        setLoading(false);
      });
    });
  }, []);
  return (
    <div className="App">
      <Header className="Header" UserMeta={UserData && UserData.UserMeta}>
        Facebook Clone
      </Header>
      {Loading ? (
        "Loading... Please wait..."
      ) : UserData ? (
        <div className="container">
          <div className="row">
            <Sidebar
              ContentList={UserData.ContentList}
              UserMeta={UserData.UserMeta}
            />
            <Main WallData={WallData} />
            <Feed
              Birthdays={UserData.Birthdays}
              Pages={UserData.Pages}
              NewsFeeds={UserData.NewsFeeds}
            />
          </div>
        </div>
      ) : (
        "Login Screen"
      )}
    </div>
  );
};

export default App;
