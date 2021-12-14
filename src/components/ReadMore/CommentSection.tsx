import React, { Fragment, useRef } from "react";
import { Comment, Post } from "../../models";
import classes from "./CommentSection.module.css";
import TextField from "@mui/material/TextField";
import CustomButton from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { dataActions } from "../../store/data-slice";
import CommentDiv from "./Comment";

interface CommentSectionProps {
  thisPost: Post;
}

const CommentSection: React.FC<CommentSectionProps> = ({ thisPost }) => {
  const commentInputRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.curUser);
  const addCommentHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const comment: Comment = {
      id: Math.random().toString(),
      text: commentInputRef.current!.value,
      commentedBy: user!.displayName || "No author",
      time: new Date(),
    };
    dispatch(dataActions.addComment({ id: thisPost.id, comment: comment }));
    commentInputRef.current!.value = "";
  };
  return (
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
                  key={each.id}
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
  );
};

export default CommentSection;
