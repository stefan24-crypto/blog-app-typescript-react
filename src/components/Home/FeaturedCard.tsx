import React from "react";
import { useNavigate } from "react-router";
import classes from "./FeaturedCard.module.css";

interface FeaturedCardProps {
  date: Date;
  title: string;
  author: string;
  prof_pic: string;
  image: string;
  id: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  date,
  title,
  author,
  prof_pic,
  image,
  id,
}) => {
  const navigate = useNavigate();
  const ReadMore = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div
      className={classes.card}
      style={{ backgroundImage: `url(${image})` }}
      onClick={ReadMore}
    >
      <div className={classes.overlay}>
        <div className={classes.date}>
          <p>{date.toDateString()}</p>
        </div>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
        <div className={classes.author}>
          <img src={prof_pic} className={classes.img} alt="profile_pic" />
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
