import React, { Fragment } from "react";
import { useAppSelector } from "../../store/hooks";
import FeaturedPosts from "./FeaturedPosts";
import classes from "./HomeSection.module.css";
import PostCard from "./PostCard";

const HomeSection: React.FC = () => {
  const posts = useAppSelector((state) => state.data.posts);
  const sortedPosts = [...posts];
  sortedPosts.sort((a, b) => {
    if (a.time.seconds > b.time.seconds) {
      return -1;
    } else {
      return 1;
    }
  });
  return (
    <Fragment>
      <h1 className={classes.title}>Blogger</h1>
      <header className={classes.featuredPosts}>
        <FeaturedPosts />
      </header>
      <main className={classes.section}>
        {sortedPosts.map((each) => (
          <PostCard
            key={each.id}
            id={each.id}
            title={each.title}
            date={each.time}
            author={each.author}
            description={each.description}
            profile_pic={each.profilePic}
            image={each.image}
          />
        ))}
      </main>
    </Fragment>
  );
};

export default HomeSection;
