import React from "react";
import classes from "./Card.module.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
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
    <Card sx={{ maxHeight: 500 }}>
      <CardMedia component="img" height="200" image={image} alt="post_image" />
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
