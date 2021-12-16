import React from "react";
import classes from "./PostCard.module.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useNavigate } from "react-router";
import CustomButton from "../UI/Button";
import { Timestamp } from "@firebase/firestore";

interface PostCardProps {
  image: string;
  date: Timestamp;
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
  const navigate = useNavigate();
  const goToContinueReading = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className={classes.card}>
      <header className={classes.header}>
        <img src={image} className={classes.img} alt="header_image" />
      </header>
      <main className={classes.info}>
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
            <p>{date.toDate().toDateString()}</p>
          </div>
        </div>
        <div className={classes.desc}>
          <p>{description}</p>
        </div>
        <div className={classes.read_more_btn}>
          <CustomButton onClick={goToContinueReading}>
            Continue Reading
          </CustomButton>
        </div>
      </main>
    </div>
  );
};

export default PostCard;
