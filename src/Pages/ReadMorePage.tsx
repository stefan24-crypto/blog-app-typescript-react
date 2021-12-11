import React from "react";
import { useParams } from "react-router";

const ReadMore: React.FC = () => {
  const params = useParams();
  return (
    <section>
      <h1>Read More Page for {params.postID}</h1>
    </section>
  );
};

export default ReadMore;
