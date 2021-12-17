import React from "react";
import classes from "./Card.module.css";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router";
import { doc, deleteDoc } from "@firebase/firestore";
import { db } from "../../firebase";

interface CardForPostProps {
  image: string;
  shortDescrition: string;
  id: string;
  title: string;
}

const CardForPost: React.FC<CardForPostProps> = ({
  image,
  title,
  shortDescrition,
  id,
}) => {
  const navigate = useNavigate();
  const goToEdit = () => {
    navigate(`/edit/${id}`);
  };
  const deletePostHandler = async () => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <Card
      sx={{
        height: 550,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia component="img" height="250" image={image} alt="post_image" />
      <div className={classes.content}>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
        <div className={classes.desc}>
          <p>{shortDescrition}</p>
        </div>
        <div className={classes.btns}>
          <button className={classes.edit} onClick={goToEdit}>
            Edit
          </button>
          <button className={classes.del} onClick={deletePostHandler}>
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CardForPost;
