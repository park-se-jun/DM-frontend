import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";
import MainLayout from "../components/MainLayout";

import SignInPageImage from "../resource/images/signInPageImage.jpg";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vuserid = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The userid must be between 3 and 20 characters.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUserid = (e) => {
    const userid = e.target.value;
    setUserid(userid);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, userid, email, password, "user"))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
  <MainLayout imagePath={SignInPageImage} title="회원가입"detail="해당 서비스를 이용하기 위해, 사용자 정보를 등록해주세요.">
   <div className="col-md-12"      
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div  style={{float:"none", margin:"0 auto",minWidth:"506px"}}>

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">이름</label>
                <Input
                    type="text"
                    className="form-control register-form input-size"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="userid">ID</label>
                <Input
                  type="text"
                  className="form-control register-form input-size"
                  name="userid"
                  value={userid}
                  onChange={onChangeUserid}
                  validations={[required, vuserid]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control register-form input-size"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control register-form input-size"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
              <button className="btn btn-primary btn-block" st
                style={{height: "50px", marginTop: "70px"}}>회원가입</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
    </MainLayout>
  );
};

export default Register;
