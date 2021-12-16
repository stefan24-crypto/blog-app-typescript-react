import React from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import Form from "../Form/Form";

const EditPost: React.FC = () => {
  const params = useParams();
  const postID = params.postID;
  const posts = useAppSelector((state) => state.data.posts);
  const thisPost = posts.find((each) => each.id === postID);
  if (!thisPost) return <h1>No Post Found</h1>;
  return (
    <Form
      isEdit={true}
      defaultArticle={thisPost!.article.join("  ")}
      defaultCategory={thisPost!.category}
      defaultComments={thisPost!.comments}
      defaultDesc={thisPost!.description}
      defaultId={thisPost!.id}
      defaultImage={thisPost!.image}
      defaultTitle={thisPost!.title}
    />
  );
};

export default EditPost;
