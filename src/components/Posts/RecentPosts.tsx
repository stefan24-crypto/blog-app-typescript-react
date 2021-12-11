import React from "react";
import classes from "./RecentPosts.module.css";
import { useAppSelector } from "../../store/hooks";
import Li from "./Li";

const RecentPosts: React.FC = () => {
  const posts = useAppSelector((state) => state.data.posts);
  const topThreePosts = [...posts];
  topThreePosts.sort((a, b) => {
    if (a.time.getTime() > b.time.getTime()) return -1;
    else {
      return 1;
    }
  });
  return (
    <div className={classes.recent__posts}>
      <div className={classes.title}>
        <h1>Recent Posts</h1>
      </div>
      <div>
        {topThreePosts.slice(0, 3).map((each) => (
          <Li
            key={each.id}
            title={each.title}
            date={each.time}
            image={each.image}
            id={each.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
