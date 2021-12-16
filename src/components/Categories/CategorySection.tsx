import React from "react";
import { useAppSelector } from "../../store/hooks";
import PostCard from "../Home/PostCard";
import classes from "./CategorySection.module.css";

interface CategorySectionProps {
  category: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  let searchCartegory: string;

  if (category === "webdevelopment") {
    searchCartegory = "Web Development";
  }
  if (category === "sports") {
    searchCartegory = "Sports";
  }
  if (category === "education") {
    searchCartegory = "Education";
  }
  if (category === "coding") {
    searchCartegory = "Coding";
  }
  if (category === "photography") {
    searchCartegory = "Photography";
  }
  if (category === "other") {
    searchCartegory = "Other";
  }

  const posts = useAppSelector((state) => state.data.posts);
  const thesePosts = posts.filter((each) => each.category === searchCartegory);
  if (thesePosts.length === 0)
    return (
      <div className={classes.none_found}>
        <h1>No Posts in This Category!</h1>
      </div>
    );

  console.log(thesePosts);

  return (
    <section className={classes.category_section}>
      <header className={classes.title}>
        <h1>Searched for "{category}"</h1>
      </header>
      <main className={classes.main}>
        {thesePosts.map((each) => (
          <PostCard
            id={each.id}
            image={each.image}
            date={each.time}
            author={each.author}
            profile_pic={each.profilePic}
            description={each.description}
            title={each.title}
          />
        ))}
      </main>
    </section>
  );
};

export default CategorySection;
