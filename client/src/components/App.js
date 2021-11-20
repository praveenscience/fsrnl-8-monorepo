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
  const initUDWD = (userdata, walldata) => {
    setUserData(userdata);
    setWallData(walldata);
    const { UserBDay, Today } = [
      userdata.UserMeta.birthday.substr(
        userdata.UserMeta.birthday.indexOf("-") + 1
      ),
      (() => {
        const now = new Date();
        return `${now.getMonth() + 1}-${now.getDate()}`;
      })()
    ];
    if (UserBDay === Today) {
      document.body.classList.add("birthday");
    }
  };
  useEffect(() => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    GetUserData().then(({ data }) => {
      const { userdata, walldata } = data;
      if (userdata) {
        initUDWD(userdata, walldata);
      }
      setLoading(false);
    });
  }, []);
  const handleLogin = FormData => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    LoginUser(FormData)
      .then(({ data }) => {
        const { userdata, walldata } = data;
        if (userdata) {
          initUDWD(userdata, walldata);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.response.data.Error);
        window.setTimeout(() => {
          setError(null);
          setSuccess(null);
        }, 5000);
        setLoading(false);
      });
  };
  const handleRegister = FormData => {
    if (FormData.password !== FormData.confpass) {
      setError("Both the Passwords should match!");
      setSuccess(null);
      window.setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 5000);
    } else {
      setLoading(true);
      setError(null);
      setSuccess(null);
      RegisterUser(FormData)
        .then(({ data }) => {
          setSuccess(data.Message);
          window.setTimeout(() => {
            setError(null);
            setSuccess(null);
          }, 5000);
          setLoading(false);
        })
        .catch(err => {
          setError(err.response.data.Error);
          window.setTimeout(() => {
            setError(null);
            setSuccess(null);
          }, 5000);
          setLoading(false);
        });
    }
  };
  const handleLogout = e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    LogoutUser().then(() => {
      setUserData(null);
      setWallData([]);
      setLoading(false);
      document.body.classList.remove("birthday");
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
        <>
          {Error && (
            <div className="container NegativeMargin">
              <div className="row">
                <div className="col-4 offset-4">
                  <div className="px-4">
                    <div
                      className="alert alert-danger m-0 text-center fw-bold fs-6"
                      role="alert"
                    >
                      {Error}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {Success && (
            <div className="container NegativeMargin">
              <div className="row">
                <div className="col-4 offset-4">
                  <div className="px-4">
                    <div
                      className="alert alert-primary m-0 text-center fw-bold fs-6"
                      role="alert"
                    >
                      {Success}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Login handleLogin={handleLogin} handleRegister={handleRegister} />
        </>
      )}
    </div>
  );
};

export default App;
