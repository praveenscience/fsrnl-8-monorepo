import { useEffect, useState } from "react";
import { GetUserData } from "../services/UserData";
import Header from "./Bootstrap/Header";
import Feed from "./Feed";
import Main from "./Main";
import Sidebar from "./Sidebar";
import LDSRipple from "./LDSRipple";
import Login from "./Login";

const App = () => {
  const [Loading, setLoading] = useState(true);
  const [UserData, setUserData] = useState(null);
  const [WallData, setWallData] = useState([]);
  useEffect(() => {
    GetUserData().then(({ data }) => {
      const { userdata, walldata } = data;
      console.log({ userdata, walldata });
      if (userdata) {
        setUserData(userdata);
        setWallData(walldata);
      }
      setLoading(false);
    });
  }, []);
  return (
    <div className="App">
      <Header className="Header" UserMeta={UserData && UserData.UserMeta}>
        Facebook Clone
      </Header>
      {Loading ? (
        <LDSRipple />
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
        <Login />
      )}
    </div>
  );
};

export default App;
