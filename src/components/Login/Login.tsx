import React, { Fragment, useRef, useState } from "react";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import classes from "./Login.module.css";
import { TextField } from "@mui/material";
import CustomButton from "../UI/Button";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const emailInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();
  const usernameRef = useRef<HTMLInputElement>();
  const profilePicRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;
    if (!isLogin) {
      const username = usernameRef.current!.value;
      const profilePic = profilePicRef.current!.value;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        if (!auth.currentUser) return;
        await updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: profilePic,
        });
        console.log(auth.currentUser);
      } catch (error) {
        alert(error);
      }
    } else {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        alert(error.message)
      );
    }
    navigate("/");
  };

  const changeAuthHandler = () => {
    setIsLogin((prev: boolean) => !prev);
  };

  return (
    <Fragment>
      <header className={classes.title}>
        <h1> {isLogin ? "Login" : "Sign Up"}</h1>
      </header>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="email">Email</label>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            required
            inputRef={emailInputRef}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="password">Password</label>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            required
            inputRef={passwordInputRef}
          />
        </div>
        {!isLogin && (
          <div className={classes.input}>
            <label htmlFor="username">Username(max: 30 characters)</label>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              inputProps={{ maxLength: 30 }}
              required
              inputRef={usernameRef}
            />
          </div>
        )}
        {!isLogin && (
          <div className={classes.input}>
            <label htmlFor="profile_pic">Profile Pic</label>
            <TextField
              id="profile_pic"
              label="Profile Pic"
              variant="outlined"
              required
              inputRef={profilePicRef}
            />
          </div>
        )}
        <div className={classes.btns}>
          <CustomButton
            onClick={changeAuthHandler}
            typeOfButton="button"
            className={classes.change}
          >
            {isLogin ? "Sign Up" : "Login"}
          </CustomButton>
          <CustomButton
            onClick={submitHandler}
            typeOfButton="submit"
            className={classes.submit}
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
