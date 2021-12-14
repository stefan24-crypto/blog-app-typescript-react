import React, { useState, Fragment } from "react";
import classes from "./AddPost.module.css";
import add from "../../images/insert-picture-icon.png";
import { TextField } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import CustomButton from "../UI/Button";
import Overlay from "./Overlay";
import { useAppSelector } from "../../store/hooks";

const AddPost: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [didChooseCategory, setDidChooseCategory] = useState<boolean>(false);

  const [chosenCategory, setChosenCategory] = useState<string | null>("");

  const [imageField, setImageField] = useState<boolean>(false);

  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [theImage, setTheImage] = useState<string | null>(null); // use this when submitting the entire form

  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const chooseCategory = (e: React.MouseEvent<HTMLElement>) => {
    setChosenCategory(e.currentTarget.textContent);
    setDidChooseCategory(true);
  };

  const toggleHandler = () => {
    setDidChooseCategory(false);
    setAnchorEl(null);
  };

  const imageSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setTheImage(capturedImage);
    setImageField(false);
    setCapturedImage(null);
  };

  const submitHandler = (e: React.FormEvent) => {};

  const cancelHandler = (e: React.FormEvent) => {};

  const showImageField = () => {
    setImageField(true);
  };

  const hideImageField = () => {
    setImageField(false);
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
            />
          </div>
          <div className={classes.short_description}>
            <label htmlFor="short_description">
              Add Short Description(max: 140 characters)
            </label>
            <TextField
              id="short_description"
              label="Short Description"
              variant="outlined"
              required
              inputProps={{ maxLength: 140 }}
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

export default AddPost;
