import React, { Fragment } from "react";
import { useAppSelector } from "../../store/hooks";
import classes from "./HomeSection.module.css";
import PostCard from "./PostCard";

const HomeSection: React.FC = () => {
  const posts = useAppSelector((state) => state.data.posts);
  return (
    <Fragment>
      <h1 className={classes.title}>Blogger</h1>
      <section className={classes.section}>
        {posts.map((each) => (
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
      </section>
    </Fragment>
  );
};

export default HomeSection;
