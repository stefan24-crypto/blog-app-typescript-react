import React from "react";
import classes from "./Comment.module.css";

interface CommentDivProps {
  commentedBy: string;
  time: Date;
  text: string;
}

const CommentDiv: React.FC<CommentDivProps> = ({ commentedBy, time, text }) => {
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

export default CommentDiv;
