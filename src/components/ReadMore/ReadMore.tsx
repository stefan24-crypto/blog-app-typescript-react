import React from "react";
import { useAppSelector } from "../../store/hooks";
import classes from "./ReadMore.module.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CommentSection from "./CommentSection";
import PreviousOrNext from "./PreviousOrNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Loader from "react-loader-spinner";

interface ReadMoreProps {
  id: string;
}
//Show Previous and Next posts

const ReadMore: React.FC<ReadMoreProps> = ({ id }) => {
  const user = useAppSelector((state) => state.auth.curUser);
  const posts = useAppSelector((state) => state.data.posts);
  const thisPost = posts.find((each) => each.id === id);
  if (!thisPost)
    return (
      <div className="loader">
        <Loader type="ThreeDots" color="FFF" />
      </div>
    );

  const thisIndex = posts.findIndex((each) => Number(each.id === thisPost.id));

  // console.log(posts.findIndex((each) => Number(each.id === thisPost.id) - 1));
  console.log(posts.slice(-1)[0]);

  return (
    <section className={classes.app}>
      <header
        className={classes.header}
        style={{ backgroundImage: `url(${thisPost.image})` }}
      >
        <div className={classes.animated}>
          <KeyboardArrowDownIcon sx={{ fontSize: "3rem" }} />
        </div>
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
            {thisPost.time.toDate().toDateString()}
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
        <section className={classes.prev_or_Next}>
          {thisIndex !== 0 ? (
            <PreviousOrNext prevOrNextID={thisIndex - 1} isPrev={true} />
          ) : (
            ""
          )}
          {thisPost.id !== posts.slice(-1)[0].id ? (
            <PreviousOrNext prevOrNextID={thisIndex + 1} isPrev={false} />
          ) : (
            ""
          )}
        </section>
        {user ? (
          <CommentSection thisPost={thisPost} />
        ) : (
          <h1 className={classes.not_logged_in}>Login To Add Comments</h1>
        )}
      </main>
    </section>
  );
};

export default ReadMore;
