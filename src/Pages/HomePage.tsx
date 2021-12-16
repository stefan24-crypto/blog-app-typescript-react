import React, { Fragment } from "react";
import HomeSection from "../components/Home/HomeSection";
import { useAppSelector } from "../store/hooks";
import Loader from "react-loader-spinner";

const HomePage: React.FC = () => {
  const isLoading: boolean = useAppSelector((state) => state.ui.isLoading);
  return (
    <Fragment>
      {isLoading ? (
        <div className="loader">
          <Loader type="ThreeDots" color="FFF" />
        </div>
      ) : (
        <HomeSection />
      )}
    </Fragment>
  );
};

export default HomePage;
