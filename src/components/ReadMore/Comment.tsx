import React from "react";
import classes from "./Comment.module.css";

interface CommentProps {
  commentedBy: string;
  time: Date;
  text: string;
}

const Comment: React.FC<CommentProps> = ({ commentedBy, time, text }) => {
  return (
    <div className={classes.comment}>
      <div className={classes.commenter_time}>
        <p className={classes.author}>{commentedBy}</p>
        <p>{time.toDateString()}</p>
      </div>
      <div className={classes.content}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
