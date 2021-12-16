import React, { Fragment } from "react";
import Login from "../components/Login/Login";
import { useAppSelector } from "../store/hooks";
import Loader from "react-loader-spinner";

const LoginPage: React.FC = () => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  return (
    <Fragment>
      {isLoading ? (
        <div className="loader">
          <Loader type="ThreeDots" color="FFF" />
        </div>
      ) : (
        <section>
          <Login />
        </section>
      )}
    </Fragment>
  );
};

export default LoginPage;
