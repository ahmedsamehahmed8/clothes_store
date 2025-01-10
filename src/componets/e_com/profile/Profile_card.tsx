import Tprofile from "@/types/Tprofile";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

function Profile_card({ username, items }: Tprofile) {
  return (
    <>
      <div className="p-5  font-bold">
        Welcom :
        <Chip label={username} />
      </div>
      {items.map((item) => {
        return (
          <>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {/* <div className="flex flex-col  items-center">
          <img className="w-40 h-40" src={img} alt={name} />
          <h2>{name}</h2>
          <h3>{price} EGP</h3>
        </div> */}
              <Card
                sx={{
                  margin: "50px",

                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div className="flex w-[300px] p-10 m-20">
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={item.img}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.price} EGP
                    </Typography>
                  </CardContent>
                </div>
                <div className="flex items-center">
                  <h3> Quantity : {item.quantity}</h3>
                </div>
              </Card>
            </Box>
          </>
        );
      })}
    </>
  );
}

export default Profile_card;
