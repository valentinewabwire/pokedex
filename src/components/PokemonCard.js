import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { margin, width } from "@mui/system";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90,90,90)",
    },
  },
  cardMedia: {
    margin: "auto",
    width: 130,
    height: 130,
  },
  cardContent: {
    textAlign: "center",
  },
}));

export default function PokemonCard(props) {
  const classes = useStyles();
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2} key={id}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={image}></CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
