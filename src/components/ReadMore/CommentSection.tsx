import React, { Fragment, useRef, useState } from "react";
import { Comment, Post } from "../../models";
import classes from "./CommentSection.module.css";
import TextField from "@mui/material/TextField";
import CustomButton from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { dataActions } from "../../store/data-slice";
import CommentDiv from "./Comment";
import { doc, Timestamp, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase";
import Loader from "react-loader-spinner";

interface CommentSectionProps {
  thisPost: Post;
}

const CommentSection: React.FC<CommentSectionProps> = ({ thisPost }) => {
  const commentInputRef = useRef<HTMLInputElement>();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.curUser);

  const addCommentHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoader(true);
    const userDoc = doc(db, "posts", thisPost.id);
    const newFields = {
      comments: [
        {
          id: Math.random().toString(),
          text: commentInputRef.current!.value,
          commentedBy: user!.displayName || "No author",
          time: Timestamp.now(),
        },
        ...thisPost.comments,
      ],
    };
    await updateDoc(userDoc, newFields);
    setShowLoader(false);
    commentInputRef.current!.value = "";
  };

  return (
    <Fragment>
      {showLoader ? (
        <div className={classes.loading}>
          <Loader type="ThreeDots" color="FFF" />
        </div>
      ) : (
        <Fragment>
          <section className={classes.comment_section}>
            <div className={classes.title}>
              <h1>Leave a Reply</h1>
            </div>
            <form className={classes.form} onSubmit={addCommentHandler}>
              <TextField
                id="outlined-multiline-flexible"
                label="Comment"
                className={classes.textarea}
                multiline
                maxRows={5}
                rows={5}
                inputRef={commentInputRef}
                fullWidth
              />
              <CustomButton onClick={addCommentHandler} type="submit">
                Add Comment
              </CustomButton>
            </form>
          </section>
          <section className={classes.comments}>
            {thisPost.comments.length === 0 ? (
              <h1 className={classes.no_comment}>No comments yet!</h1>
            ) : (
              <div className={classes.content}>
                <div className={classes.num_comments}>
                  <h1>
                    {thisPost.comments.length}{" "}
                    {thisPost.comments.length > 1 ? "Comments" : "Comment"}
                  </h1>
                </div>
                <main className={classes.all_comments}>
                  {thisPost.comments.map((each) => (
                    <CommentDiv
                      currentPost={thisPost}
                      key={each.id}
                      id={each.id}
                      text={each.text}
                      time={each.time}
                      commentedBy={each.commentedBy}
                    />
                  ))}
                </main>
              </div>
            )}
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CommentSection;
