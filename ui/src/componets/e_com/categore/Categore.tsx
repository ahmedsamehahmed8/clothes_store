import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, CardActionArea } from "@mui/material";
import Link from "next/link";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function Categoree({
  key,
  name,
  img,
}: {
  key: number;
  name: string;
  img: string;
}) {
  return (
    <Card
      sx={{
        minWidth: 250,
        width: "250px",
        margin: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link href={`categores/${name}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="green iguana"
            // height="50"
            // width="50"
            sx={{ height: 300, width: 200 }}
            image={img}
          />
          <CardContent>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
