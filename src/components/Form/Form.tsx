import React, { useState, Fragment, useRef, useEffect } from "react";
import classes from "./Form.module.css";
import add from "../../images/insert-picture-icon.png";
import { TextField } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import CustomButton from "../UI/Button";
import { Post, Comment } from "../../models";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { dataActions } from "../../store/data-slice";
import { useNavigate } from "react-router";
import Overlay from "../AddPost/Overlay";
import {
  addDoc,
  Timestamp,
  collection,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { db } from "../../firebase";
import { useValidateImageURL } from "use-validate-image-url";
import { useLocation } from "react-router-dom";

interface FormProps {
  isEdit?: boolean;
  defaultTitle?: string;
  defaultDesc?: string;
  defaultArticle?: string;
  defaultImage?: string;
  defaultCategory?: string;
  defaultId?: string;
  defaultComments?: Comment[];
}

const Form: React.FC<FormProps> = ({
  isEdit,
  defaultTitle,
  defaultImage,
  defaultArticle,
  defaultCategory,
  defaultDesc,
  defaultId,
  defaultComments,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const postsCollection = collection(db, "posts");
  const user = useAppSelector((state) => state.auth.curUser);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [didChooseCategory, setDidChooseCategory] = useState<boolean>(
    defaultCategory ? true : false
  );
  const [chosenCategory, setChosenCategory] = useState<string>(
    defaultCategory || ""
  );
  const [imageField, setImageField] = useState<boolean>(false);
  const [capturedImage, setCapturedImage] = useState<string>("");
  const [theImage, setTheImage] = useState<string>(defaultImage || ""); // use this when submitting the entire form
  const titleRef = useRef<HTMLInputElement>();
  const shortDescriptionRef = useRef<HTMLInputElement>();
  const articleRef = useRef<HTMLInputElement>();

  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const chooseCategory = (e: React.MouseEvent<HTMLElement>) => {
    if (!e.currentTarget.textContent) return;
    setChosenCategory(e.currentTarget.textContent);
    setDidChooseCategory(true);
  };

  const toggleHandler = () => {
    setDidChooseCategory(false);
    setAnchorEl(null);
  };

  const status = useValidateImageURL(capturedImage);

  const imageSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "invalid") return alert("Please enter a valid Image URL");

    setTheImage(capturedImage);
    setImageField(false);
    setCapturedImage("");
  };
  const showImageField = () => {
    setImageField(true);
  };
  const hideImageField = () => {
    setImageField(false);
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      titleRef.current!.value === "" ||
      theImage === "" ||
      shortDescriptionRef.current!.value === "" ||
      articleRef.current!.value === "" ||
      chosenCategory === ""
    )
      return alert("Please ensure all fields are filled");

    const data = {
      id: defaultId || Math.random().toString(),
      title: titleRef.current!.value,
      author: user?.displayName || "No Author",
      image: theImage,
      time: Timestamp.now(),
      description: shortDescriptionRef.current!.value,
      category: chosenCategory,
      profilePic:
        user?.photoURL ||
        "https://carnbrae.com.au/wp-content/uploads/2021/05/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
      article: articleRef.current!.value.split("  "),
      comments: defaultComments || [],
    };

    if (isEdit) {
      navigate("/");
      if (!defaultId) return alert("Can't process at this time");
      const userDoc = doc(db, "posts", defaultId);
      const newFields = data;
      await updateDoc(userDoc, newFields);
    } else {
      await addDoc(postsCollection, data);
      navigate("/");
    }
  };
  const cancelHandler = (e: React.FormEvent) => {
    navigate("/");
  };

  return (
    <Fragment>
      {imageField && (
        <Fragment>
          <Overlay click={hideImageField}></Overlay>
          <form className={classes.image_div} onSubmit={imageSubmitHandler}>
            <label htmlFor="image">Image URL</label>
            <TextField
              id="image"
              label="Image"
              variant="outlined"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCapturedImage(e.target.value)
              }
            />
          </form>
        </Fragment>
      )}
      <form className={classes.form}>
        <header
          onClick={showImageField}
          className={classes.header}
          style={{
            backgroundImage: theImage
              ? `url(${theImage})`
              : " linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
          }}
        >
          {!theImage && (
            <img src={add} className={classes.img} alt="add_image" />
          )}
        </header>
        <main>
          <div className={classes.title}>
            <label htmlFor="title_input">Add Title(max: 50 characters)</label>
            <TextField
              id="title_input"
              label="Title"
              variant="outlined"
              required
              inputProps={{ maxLength: 40 }}
              inputRef={titleRef}
              defaultValue={defaultTitle || ""}
            />
          </div>
          <div className={classes.short_description}>
            <label htmlFor="short_description">
              Add Short Description(max: 200 characters)
            </label>
            <TextField
              id="short_description"
              label="Short Description"
              variant="outlined"
              required
              inputProps={{ maxLength: 200 }}
              inputRef={shortDescriptionRef}
              defaultValue={defaultDesc || ""}
            />
          </div>
          <div className={classes.article}>
            <label htmlFor="article_input">Add Article</label>
            <p>Note: Add Double Spacing to indicate a new paragrah</p>
            <TextField
              id="article_input"
              label="Article"
              variant="outlined"
              required
              multiline
              rows={20}
              inputRef={articleRef}
              defaultValue={defaultArticle || ""}
            />
          </div>
          <div className={classes.category}>
            {didChooseCategory ? (
              <p className={classes.chosen} onClick={toggleHandler}>
                {chosenCategory}
              </p>
            ) : (
              <div>
                <Button
                  variant="outlined"
                  className={classes.cat_btn}
                  aria-expanded={open ? "true" : undefined}
                  aria-controls="demo-positioned-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  Cateogry
                </Button>
                <Menu
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem onClick={chooseCategory}>Web Development</MenuItem>
                  <MenuItem onClick={chooseCategory}>Sports</MenuItem>
                  <MenuItem onClick={chooseCategory}>Education</MenuItem>
                  <MenuItem onClick={chooseCategory}>Photography</MenuItem>
                  <MenuItem onClick={chooseCategory}>Coding</MenuItem>
                  <MenuItem onClick={chooseCategory}>Other</MenuItem>
                </Menu>
              </div>
            )}
            <div className={classes.btns}>
              <CustomButton
                type="button"
                className={classes.cancel}
                onClick={cancelHandler}
              >
                Cancel
              </CustomButton>
              <CustomButton
                type="submit"
                className={classes.submit}
                onClick={submitHandler}
              >
                Submit
              </CustomButton>
            </div>
          </div>
        </main>
      </form>
    </Fragment>
  );
};

export default Form;
