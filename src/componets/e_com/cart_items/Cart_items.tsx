"use client";

import React from "react";
import Tproducts from "@/types/Tproducts";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useAppDispatch } from "@/store/hooks/hooks_store";
import { decrement, increment } from "@/store/cart_items/cart_item_Slice";

function Cart_items({
  id,
  name,
  price,
  img,
  quantity,
}: Tproducts & { quantity?: number }) {
  const dispatch = useAppDispatch();

  const handleAdd = (id: number) => {
    dispatch(increment(id));
  };
  const handleremove = (id: number) => {
    dispatch(decrement(id));
  };
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
              image={img}
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
                {name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {price} EGP
              </Typography>
            </CardContent>
          </div>
          <div className="flex items-center">
            <Button onClick={() => handleAdd(id)}>
              <Add />
            </Button>
            <h3>{quantity}</h3>
            <Button onClick={() => handleremove(id)}>
              <Remove />
            </Button>
          </div>
        </Card>
      </Box>
    </>
  );
}

export default Cart_items;
