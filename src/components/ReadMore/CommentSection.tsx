import React, { Fragment } from "react";
import { Post } from "../../models";
import classes from "./CommentSection.module.css";
import TextField from "@mui/material/TextField";
import Button from "../UI/Button";
import Comment from "./Comment";

interface CommentSectionProps {
  thisPost: Post;
}

const CommentSection: React.FC<CommentSectionProps> = ({ thisPost }) => {
  const addCommentHandler = () => {};
  console.log(thisPost);
  return (
    <Fragment>
      <section className={classes.comment_section}>
        <div className={classes.title}>
          <h1>Leave a Reply</h1>
        </div>
        <form className={classes.form}>
          <TextField
            id="outlined-multiline-flexible"
            label="Comment"
            className={classes.textarea}
            multiline
            maxRows={5}
            rows={5}
            fullWidth
          />
          <Button onClick={addCommentHandler} type="submit">
            Add Comment
          </Button>
        </form>
      </section>
      <section className={classes.comments}>
        {thisPost.comments.length === 0 ? (
          <h1>No comments yet!</h1>
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
                <Comment
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
