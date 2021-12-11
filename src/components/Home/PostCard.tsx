import React from "react";
import classes from "./PostCard.module.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface PostCardProps {
  image: string;
  date: Date;
  author: string;
  profile_pic: string;
  description: string;
  title: string;
  id: string;
}

const PostCard: React.FC<PostCardProps> = ({
  image,
  date,
  title,
  profile_pic,
  author,
  description,
  id,
}) => {
  return (
    <div className={classes.card}>
      <header className={classes.header}>
        <img src={image} className={classes.img} alt="header_image" />
      </header>
      <div className={classes.info}>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
        <div className={classes.author_and_date}>
          <div className={classes.author}>
            <img
              src={profile_pic}
              className={classes.prof__pic}
              alt="prof_pic"
            />
            <p>{author}</p>
          </div>
          <div className={classes.date}>
            <CalendarTodayIcon className={classes.date_icon} />
            <p>{date.toDateString()}</p>
          </div>
        </div>
        <div className={classes.desc}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
