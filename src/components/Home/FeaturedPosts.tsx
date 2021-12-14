import React from "react";
import classes from "./FeaturedPosts.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAppSelector } from "../../store/hooks";
import FeaturedCard from "./FeaturedCard";

const FeaturedPosts: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1350 },
      items: 4,
      slidesToSlide: 4,
    },
    SmallerDesktop: {
      breakpoint: { max: 1350, min: 1000 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const posts = useAppSelector((state) => state.data.posts);

  return (
    <Carousel
      className={classes.carousel}
      infinite
      responsive={responsive}
      autoPlay={true}
    >
      {posts.map((each) => (
        <FeaturedCard
          key={each.id}
          id={each.id}
          title={each.title}
          image={each.image}
          author={each.author}
          prof_pic={each.profilePic}
          date={each.time}
        />
      ))}
    </Carousel>
  );
};

export default FeaturedPosts;
