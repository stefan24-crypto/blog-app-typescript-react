import React, { Fragment } from "react";
import AddPost from "../components/AddPost/AddPost";
import { useAppSelector } from "../store/hooks";
import Typography from "@mui/material/Typography";

const AddPostPage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.curUser);
  return (
    <Fragment>
      {user ? (
        <AddPost />
      ) : (
        <div className="not_logged_in">
          <h1>Please Login</h1>
        </div>
      )}
    </Fragment>
  );
};

export default AddPostPage;
