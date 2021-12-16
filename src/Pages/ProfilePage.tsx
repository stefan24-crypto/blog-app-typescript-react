import React, { Fragment } from "react";
import Profile from "../components/Profile/Profile";
import Loader from "react-loader-spinner";
import { useAppSelector } from "../store/hooks";

const ProfilePage: React.FC = () => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  return (
    <Fragment>
      {isLoading ? (
        <div className="loader">
          <Loader type="ThreeDots" color="FFF" />
        </div>
      ) : (
        <Profile />
      )}
    </Fragment>
  );
};

export default ProfilePage;
