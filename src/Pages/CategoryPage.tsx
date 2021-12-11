import React from "react";
import { useParams } from "react-router";

const CategoryPage: React.FC = () => {
  //get category from url
  const params = useParams();
  return (
    <section>
      <h1>Categor Page for {params.category}</h1>
    </section>
  );
};

export default CategoryPage;
