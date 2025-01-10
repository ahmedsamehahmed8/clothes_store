"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks_store";
import cart_item_info from "@/store/cart_items/act/cart_item_info";
import Cart_items from "@/componets/e_com/cart_items/Cart_items";
import act_order_complete_slice from "@/store/order_complet/act/act_order_complete_slice";
import { submit_order } from "@/store/cart_items/cart_item_Slice";
import CircularSize from "@/animation/CircularSize";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Cart() {
  const Router = useRouter();
  const dispatch = useAppDispatch();
  const { item_info, item_id, loading } = useAppSelector(
    (state) => state.user_items
  );
  useEffect(() => {
    dispatch(cart_item_info());
  }, [dispatch]);
  const total = item_info.reduce(
    (acc, item) => acc + item.price * (item?.quantity ?? 0),
    0
  );
  console.log(item_info);
  console.log(loading);
  const check_out = () => {
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
            <div className="flex justify-center">{total} EGP </div>
            <Button variant="contained" onClick={() => handel_submit_order()}>
              {" "}
              Complete Order{" "}
            </Button>
          </Box>
        </div>
      </>
    );
  };

  const handel_submit_order = () => {
    dispatch(act_order_complete_slice());
    dispatch(submit_order());
    toast("Order is Complete ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    Router.push("/");
  };

  return (
    <>
      {loading === "pending" ? (
        <CircularSize />
      ) : Object.keys(item_id).length === 0 ? (
        <div className="flex justify-center text-4xl"> no Items</div>
      ) : (
        check_out()
      )}
    </>
  );
}

export default Cart;
