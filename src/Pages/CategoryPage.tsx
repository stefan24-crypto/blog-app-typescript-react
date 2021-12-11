import React from "react";
import { useParams } from "react-router";
import CategorySection from "../components/Categories/CategorySection";

const CategoryPage: React.FC = () => {
  const params = useParams();
  return <CategorySection category={params.category!.toString()} />;
};

export default CategoryPage;
