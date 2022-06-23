import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";
import MainLayout from "../components/MainLayout";
import { Typography } from "@material-ui/core";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeUserid = (e) => {
    const userid = e.target.value;
    setUserid(userid);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(userid, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <MainLayout
      imagePath="images/sampleImage2.jpg"
      title="로그인"
      detail="해당 서비스를 이용하기 위해, 사용자 정보를 입력해주세요."
    >
      <div className="col-md-12"      
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div  style={{float:"none", margin:"0 auto",minWidth:"506px"}}>

          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group">
              <label htmlFor="username"/>
              <Input
                placeholder ="아이디를입력해주세요"
                type="text"
                className="form-control input-size input-placeholder-size"
                name="userid"
                value={userid}
                onChange={onChangeUserid}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password"/>
              <Input
              placeholder="비밀번호를 입력해 주세요"
                type="password"
                className="form-control input-size input-placeholder-size"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading} style={{height:"50px"}}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>로그인</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
          <Typography className="to-register" style={{color:"#636363"}} component={Link} to="/register">회원가입</Typography>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
