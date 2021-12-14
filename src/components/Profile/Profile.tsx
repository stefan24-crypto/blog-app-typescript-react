import React from "react";
import { useAppSelector } from "../../store/hooks";
import CardForPost from "./Card";
import classes from "./Profile.module.css";

const Profile: React.FC = () => {
  const posts = useAppSelector((state) => state.data.posts);
  const curUser = useAppSelector((state) => state.auth.curUser);
  if (!curUser) return <h1>No User</h1>;
  const allYourPosts = posts.filter(
    (each) => each.author === curUser?.displayName
  );

  // allow to edit profile and show those edits
  // After editing the profile, loop throgh all posts and update displayName or photoURL.
  return (
    <section>
      <header className={classes.header}>
        <img
          src={curUser?.photoURL?.toString()}
          alt="prof_pic"
          className={classes.img}
        />
        <div className={classes.name}>
          <h1>{curUser?.displayName}</h1>
        </div>
      </header>
      <main className={classes.posts}>
        {allYourPosts.map((each) => (
          <CardForPost
            id={each.id}
            title={each.title}
            shortDescrition={each.description}
            key={each.id}
            image={each.image}
          />
        ))}
      </main>
    </section>
  );
};

export default Profile;
