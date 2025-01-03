"use client";

import * as React from "react";
import { Box } from "@mui/material";
import Login_form from "@/componets/Forms/Login_form";
import { reset_new_user } from "@/store/user_auth/user_auth_slice";
import { toast } from "react-toastify";

import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks_store";

function Login() {
  const dispatch = useAppDispatch();
  const { new_user } = useAppSelector((state) => state.user_auth);
  if (new_user)
    toast.success("account created successfully", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  dispatch(reset_new_user());
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <Login_form />
      </Box>
    </>
  );
}

export default Login;
