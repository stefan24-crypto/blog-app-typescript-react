import { TextField } from "@mui/material";
import React, { Fragment, useState, useRef } from "react";
import { useAppSelector } from "../../store/hooks";
import CardForPost from "./Card";
import classes from "./Profile.module.css";
import CustomButton from "../UI/Button";
import { updateDoc, doc } from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import Loader from "react-loader-spinner";
import { useValidateImageURL } from "use-validate-image-url";

const Profile: React.FC = () => {
  const [changeProfile, setChangeProfile] = useState<boolean>(false);
  const [showHover, setShowHover] = useState<boolean>(false);
  const posts = useAppSelector((state) => state.data.posts);
  const curUser = useAppSelector((state) => state.auth.curUser);

  const allYourPosts = posts.filter(
    (each) => each.author === curUser?.displayName
  );
  const sortedPosts = [...allYourPosts];
  sortedPosts.sort((a, b) => {
    if (a.time.seconds > b.time.seconds) {
      return -1;
    } else {
      return 1;
    }
  });

  const usernameInputRef = useRef<HTMLInputElement>();
  const [profilePic, setProfilePic] = useState<string>(
    curUser?.photoURL!.toString() || ""
  );
  const [loading, setLoading] = useState<boolean>(false);

  const changeProfilePicInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfilePic(e.target.value);
  };

  const changeYourProfile = () => {
    setChangeProfile(true);
  };
  const cancelHandler = () => {
    setChangeProfile(false);
  };
  const status = useValidateImageURL(profilePic);

  const submitChangeHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const changedName = usernameInputRef.current!.value;
    const changedProfile = profilePic;

    if (status === "invalid" || changedName === "" || changedProfile === "") {
      setLoading(false);
      return alert("Please enter valid data");
    }
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, {
      displayName: changedName,
      photoURL: changedProfile,
    });
    allYourPosts.map((each) => {
      const postDoc = doc(db, "posts", each.id);
      const newFields = { author: changedName, profilePic: changedProfile };
      updateDoc(postDoc, newFields);
    });
    setLoading(false);
    setChangeProfile(false);
  };

  if (!curUser) return <Loader type="ThreeDots"></Loader>;

  return (
    <Fragment>
      {loading ? (
        <div className="loader">
          <Loader type="ThreeDots" color="FFF" />
        </div>
      ) : (
        <section>
          <header className={classes.header}>
            {changeProfile && (
              <form className={classes.form} onSubmit={submitChangeHandler}>
                <div className={classes.title}>
                  <h1>Change Profile</h1>
                </div>
                <TextField
                  variant="outlined"
                  defaultValue={curUser.photoURL}
                  label="Image URL"
                  onChange={changeProfilePicInput}
                />
                <TextField
                  variant="outlined"
                  defaultValue={curUser!.displayName}
                  label="Username"
                  inputRef={usernameInputRef}
                />
                <div className={classes.btns}>
                  <CustomButton
                    onClick={cancelHandler}
                    typeOfButton="button"
                    className={classes.cancel}
                  >
                    Cancel
                  </CustomButton>
                  <CustomButton
                    typeOfButton="submit"
                    onClick={submitChangeHandler}
                    className={classes.submit}
                  >
                    Submit
                  </CustomButton>
                </div>
              </form>
            )}
            {!changeProfile && (
              <div
                className={classes.content}
                onClick={changeYourProfile}
                onMouseOver={() => setShowHover(true)}
                onMouseLeave={() => setShowHover(false)}
              >
                <img
                  src={curUser?.photoURL?.toString()}
                  alt="prof_pic"
                  className={classes.img}
                />
                <div className={classes.name}>
                  <h1>{curUser?.displayName}</h1>
                </div>
                {showHover && (
                  <div className={classes.overlay}>
                    <p>Change Profile</p>
                  </div>
                )}
              </div>
            )}
          </header>
          <main className={classes.posts}>
            {sortedPosts.map((each) => (
              <CardForPost
                id={each.id}
                title={each.title}
                shortDescrition={each.description}
                key={each.id}
                image={each.image}
              />
            ))}
          </main>
        </section>
      )}
    </Fragment>
  );
};

export default Profile;
