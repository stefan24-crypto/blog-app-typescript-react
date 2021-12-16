import React, { Fragment } from "react";
import AddPost from "../components/AddPost/AddPost";
import { useAppSelector } from "../store/hooks";
import Typography from "@mui/material/Typography";
import Loader from "react-loader-spinner";

const AddPostPage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.curUser);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const conditionalContent = user ? (
    <AddPost />
  ) : (
    <div className="not_logged_in">
      <h1>Please Login</h1>
    </div>
  );
  return (
    <Fragment>
      {isLoading ? (
        <div className="loader">
          <Loader type="ThreeDots" color="FFF" />
        </div>
      ) : (
        conditionalContent
      )}
    </Fragment>
  );
};

export default AddPostPage;
