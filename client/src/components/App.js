import { useEffect, useState } from "react";
import {
  GetUserData,
  LoginUser,
  RegisterUser,
  LogoutUser
} from "../services/Auth";
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
  const [Error, setError] = useState(null);
  const [Success, setSuccess] = useState(null);
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
  const handleLogin = FormData => {
    console.log("From App.js Line 26");
    console.log(FormData);
    setLoading(true);
    LoginUser(FormData).then(({ data }) => {
      const { userdata, walldata } = data;
      console.log({ userdata, walldata });
      if (userdata) {
        setUserData(userdata);
        setWallData(walldata);
      }
      setLoading(false);
    });
  };
  const handleRegister = FormData => {
    console.log(FormData);
    setLoading(true);
    RegisterUser(FormData).then(({ data }) => {
      console.log(data);
      setLoading(false);
    });
  };
  const handleLogout = e => {
    e.preventDefault();
    setLoading(true);
    LogoutUser().then(() => {
      setUserData(null);
      setWallData([]);
      setLoading(false);
    });
  };
  return (
    <div className="App">
      <Header
        className="Header"
        UserMeta={UserData && UserData.UserMeta}
        handleLogout={handleLogout}
      >
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
        <Login handleLogin={handleLogin} handleRegister={handleRegister} />
      )}
    </div>
  );
};

export default App;
