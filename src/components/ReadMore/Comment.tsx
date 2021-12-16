import { Timestamp } from "@firebase/firestore";
import React from "react";
import classes from "./Comment.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppSelector } from "../../store/hooks";
import { db } from "../../firebase";
import { doc, updateDoc } from "@firebase/firestore";
import { Post } from "../../models";

interface CommentDivProps {
  commentedBy: string;
  time: Timestamp;
  text: string;
  currentPost: Post;
  id: string;
}

const CommentDiv: React.FC<CommentDivProps> = ({
  commentedBy,
  time,
  text,
  currentPost,
  id,
}) => {
  const curUser = useAppSelector((state) => state.auth.curUser);

  const commentDeleteHandler = async () => {
    const userDoc = doc(db, "posts", currentPost.id);
    const updatedComments = currentPost.comments.filter(
      (each) => each.id !== id
    );
    const newFields = { comments: [...updatedComments] };
    await updateDoc(userDoc, newFields);
  };

  return (
    <div className={classes.comment}>
      <div className={classes.content}>
        <div className={classes.commenter_time}>
          <p className={classes.author}>{commentedBy}</p>
          <p>{time.toDate().toDateString()}</p>
        </div>
        <div className={classes.content}>
          <p>{text}</p>
        </div>
      </div>
      {curUser?.displayName === commentedBy ? (
        <div className={classes.del} onClick={commentDeleteHandler}>
          <ClearIcon />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommentDiv;
