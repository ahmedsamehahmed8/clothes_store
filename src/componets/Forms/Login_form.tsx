"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks_store";
import act_user_signin from "@/store/user_auth/act/act_user_signin";

function Login() {
  const { error } = useAppSelector((state) => state.user_auth);
  // console.log(user, token);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  const {
    handleSubmit,
    register,
    formState: {},
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(act_user_signin(data))
      .unwrap()
      .then(() => {
        router.push("/home");
      });
  };
  return (
    <>
      <Box
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          border: "1px solid gray",
          borderRadius: 5,
          padding: 5,
        }}
      >
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <div className="text-5xl flex justify-center">Log in</div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                {...register("email")}
                id="outlined-basic"
                label="email"
                variant="outlined"
              />
            </FormControl>
            {/* <TextField id="outlined-basic" label="Password" variant="outlined" /> */}

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                {...register("password")}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <div className="text-red-600">
              {error ? "username or password is wrong" : <></>}
            </div>

            <Button type="submit" startIcon={<LoginIcon />}>
              Log in
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              don&apos;t have account ?{" "}
              {/* <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            cursor: "pointer",
            }}
            >
            {" "}
            Sign up
        </Typography> */}
              <Link className="underline text-sky-600 " href={"signup"}>
                Sign up
              </Link>
            </Typography>
          </FormControl>
        </form>
      </Box>
    </>
  );
}

export default Login;
