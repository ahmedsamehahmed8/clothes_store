"use client";

import { Cardd } from "@/componets/e_com";
import { Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks_store";
import { actproductsSlice } from "@/store/productsSlice/productsSlice";
import logg from "@/store/productsSlice/productsSlice";
import { useEffect } from "react";
import CircularSize from "@/animation/CircularSize";
import { reset_complete_from_order_complete_slice } from "@/store/order_complet/order_complete_slice";

function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(reset_complete_from_order_complete_slice());
    dispatch(actproductsSlice());
    dispatch(logg);
  }, [dispatch]);

  const { products, error, loading } = useAppSelector(
    (state) => state.products
  );
  console.log(products);
  console.log(error);
  console.log(loading);
  return (
    <>
      {loading === "pending" ? (
        <CircularSize />
      ) : (
        <Stack
          direction="row"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {products.map((product) => {
            return <Cardd key={product.id} {...product} />;
          })}
        </Stack>
      )}
    </>
  );
}

export default Home;
