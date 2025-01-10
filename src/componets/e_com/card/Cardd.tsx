"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Tproducts from "@/types/Tproducts";

import { toast } from "react-toastify";

import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks_store";
import { add_item } from "@/store/cart_items/cart_item_Slice";

function Cardd({ name, img, price, id }: Tproducts) {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user_auth);
  const handel_click_without_login = () => {
    toast.info("Login First ", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handel_click_with_login = (id: number) => {
    dispatch(add_item(id));
    console.log(item_id);
    // console.log(items_number);
  };
  return (
    <Card sx={{ maxWidth: 345, margin: "15px" }}>
      <CardActionArea sx={{ padding: "10px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          // height="50"
          // width="50"
          sx={{ height: 300, width: 200 }}
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {price} EGP
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={
            token
              ? () => handel_click_with_login(id)
              : handel_click_without_login
          }
          sx={{
            backgroundColor: "#2196f3",
            color: "white",
          }}
          size="small"
        >
          Add to card
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cardd;
