import React from "react";
import { useAppSelector } from "../../store/hooks";
import classes from "./ReadMore.module.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CommentSection from "./CommentSection";

interface ReadMoreProps {
  id: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ id }) => {
  const posts = useAppSelector((state) => state.data.posts);
  const thisPost = posts.find((each) => each.id === id);
  if (!thisPost) return <h1>No Post Found</h1>;

  return (
    <section className={classes.app}>
      <header className={classes.header}>
        <img src={thisPost.image} className={classes.img} alt="header_image" />
      </header>
      <main className={classes.main}>
        <div className={classes.date_and_author}>
          <div className={classes.author}>
            <img
              src={thisPost.profilePic}
              className={classes.prof_pic}
              alt="prof_pic"
            />
            {thisPost.author}
          </div>
          <div className={classes.date}>
            <CalendarTodayIcon />
            {thisPost.time.toDateString()}
          </div>
        </div>
        <div className={classes.title}>
          <h1>{thisPost.title}</h1>
        </div>
        <article className={classes.article}>
          {thisPost.article.map((each) => (
            <p key={Math.random().toString()}>
              {each}
              <br />
              <br />
            </p>
          ))}
        </article>
        <CommentSection thisPost={thisPost} />
      </main>
    </section>
  );
};

export default ReadMore;
