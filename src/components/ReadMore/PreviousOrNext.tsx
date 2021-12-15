import React from "react";
import { useAppSelector } from "../../store/hooks";
import classes from "./PreviousOrNext.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router";

interface PreviousOrNextProps {
  prevOrNextID: number;
  isPrev: boolean;
}

const PreviousOrNext: React.FC<PreviousOrNextProps> = ({
  isPrev,
  prevOrNextID,
}) => {
  const posts = useAppSelector((state) => state.data.posts);
  const thisPost = posts[prevOrNextID];
  const navigate = useNavigate();
  const goToPage = () => {
    navigate(`/post/${thisPost.id}`);
  };
  return (
    <div
      className={classes.card}
      style={{ backgroundImage: `url(${thisPost.image})` }}
      onClick={goToPage}
    >
      <div className={classes.content}>
        <p>{thisPost.time.toDate().toDateString()}</p>
        <h1>{thisPost.title}</h1>
        {isPrev ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
      </div>
    </div>
  );
};

export default PreviousOrNext;
