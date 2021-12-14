import React from "react";
import classes from "./Card.module.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

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
  //Fix font and stuff
  return (
    <Card sx={{ maxHeight: 450 }}>
      <CardMedia component="img" height="200" image={image} alt="post_image" />
      <CardActionArea>
        <CardContent sx={{ height: 200 }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDescrition}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="outlined" color="primary" sx={{ width: "50%" }}>
          Edit
        </Button>
        <Button variant="outlined" color="error" sx={{ width: "50%" }}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardForPost;
