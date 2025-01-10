"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks_store";
import cart_item_info from "@/store/cart_items/act/cart_item_info";
import Cart_items from "@/componets/e_com/cart_items/Cart_items";
import act_order_complete_slice from "@/store/order_complet/act/act_order_complete_slice";
import { submit_order } from "@/store/cart_items/cart_item_Slice";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { order_complete_from_order_complete_slice } from "@/store/order_complet/order_complete_slice";

function Check_out() {
  const Router = useRouter();
  const dispatch = useAppDispatch();
  const { item_info, loading } = useAppSelector((state) => state.user_items);
  useEffect(() => {
    dispatch(cart_item_info());
  }, [dispatch]);
  const total = item_info.reduce((acc, item) => acc + item.price, 0);
  console.log(item_info);
  console.log(loading);

  const handel_submit_order = () => {
    dispatch(act_order_complete_slice());
    dispatch(submit_order());
    dispatch(order_complete_from_order_complete_slice());

    Router.push("/");
  };
  return (
    <>
      {item_info.map((e) => (
        <Cart_items key={e.id} {...e} />
      ))}
      <div className="flex justify-center ">
        <div className="border-t-2 w-[60%] m-5"></div>
      </div>
      <div className="flex  justify-center">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="flex justify-center">{total} السعر عاوز يتظبط </div>
          <Button onClick={() => handel_submit_order()}>
            {" "}
            Complete Order{" "}
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Check_out;
