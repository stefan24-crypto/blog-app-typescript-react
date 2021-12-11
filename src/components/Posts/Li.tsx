import React from "react";
import { useNavigate } from "react-router";
import classes from "./Li.module.css";

interface LiProps {
  image: string;
  date: Date;
  title: string;
  id: string;
}

const Li: React.FC<LiProps> = ({ image, date, title, id }) => {
  const navigate = useNavigate();
  const goToReadMore = () => {
    navigate(`/post/${id}`);
  };
  return (
    <li className={classes.li} onClick={goToReadMore}>
      <img src={image} alt="profile_pic " className={classes.img} />
      <div className={classes.info}>
        <p className={classes.date}>{date.toDateString()}</p>
        <p className={classes.title}>{title}</p>
      </div>
    </li>
  );
};

export default Li;
