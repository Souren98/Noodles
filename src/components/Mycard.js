import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, IconButton } from "@mui/material";
import { useState } from "react";

export default function Mycard({ img, a,id }) {
  let [color, setcolor] = useState("grey");

  const change = () => {
    color === "grey" ? setcolor("red") : setcolor("grey");
  };
 console.log(id)
  return (
    <Card sx={{ maxWidth: 345, marginTop: "45px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
    
        <CardContent>
          <IconButton>
            <i
              class="fa-solid fa-heart"
              style={{ color: color }}
              onClick={change}
            ></i>
         
          </IconButton>
          <Typography gutterBottom variant="h5" component="div">
            {a}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <Button  variant="contained"  >add to cart</Button>
      </CardActionArea>
    </Card>
  );
}



