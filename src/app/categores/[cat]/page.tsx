"use client";

import { useEffect } from "react";
import { Stack } from "@mui/material";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks_store";
import { actproductsCategoreSlice } from "@/store/productsSlice/productsSlice";
import { Cardd } from "@/componets/e_com";
import Loading_page from "@/animation/CircularSize";

// const categore_link = async ({
//   params,
// }: {
//   params: Promise<{ cat: string }>;
// }) => {
//   const catt = (await params).cat;

//   return catt;
// };
function Categore_items({ params }) {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(actproductsCategoreSlice(params.cat));
  }, [dispatch]);
  console.log(products);
  // console.log(params.cat);

  return (
    <>
      {loading === "pending" ? (
        <Loading_page />
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

export default Categore_items;
