import { AppBar, Toolbar } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";
import EventBus from "../common/EventBus";
import { history } from "../helpers/history";

function Header({color}) {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <AppBar style={{opacity:"0.9" ,background: color, padding:"5px 0px"}}>
      <Toolbar className="navbar navbar-expand navbar-default text-black">
        <Link to="/" className="navbar-brand">
          DM LOGO
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              질병 확인
            </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link to="/community" className="nav-link">
                커뮤니티
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                마이페이지
              </Link>
            </li>
            )
          }
                
          {/* 관리자 nav-bar */}
          {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/symptom"} className="nav-link">
                    증상
                  </Link>
                </li>
            )}

            {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/disease"} className="nav-link">
                    질병
                  </Link>
                </li>
            )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                로그아웃
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                로그인
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                회원가입
              </Link>
            </li>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
