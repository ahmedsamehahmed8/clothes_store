"use client";

import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/store/hooks/hooks_store";
import act_user_signup from "@/store/user_auth/act/act_user_signup";
import { useRouter } from "next/navigation";

function Signup_from() {
  const router = useRouter();

  const schema = z
    .object({
      username: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
      confirmpassword: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmpassword, {
      // هو في ايه
      message: "Passwords don't match",
      path: ["confirmpassword"], // path of error;
    });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: zodResolver(schema) });
  const dispatch = useAppDispatch();

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
    const user_data = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    console.log(data);
    dispatch(act_user_signup(user_data));
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 5,
        }}
      >
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
          <div className="text-5xl flex justify-center">Sign up</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                {errors?.username?.message?.toString().length ? (
                  <TextField
                    error
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    helperText={errors.username?.message}
                  />
                ) : (
                  <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                )}

                {/* {console.log(errors?.username?.message?.toString().length)} */}
              </FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                {errors?.email?.message?.toString().length ? (
                  <TextField
                    error
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    {...register("email", { required: "Email is required" })}
                    helperText={errors.email?.message}
                  />
                ) : (
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    {...register("email", { required: "Email is required" })}
                  />
                )}
              </FormControl>
              {errors?.password?.message?.toString().length ? (
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    {...register("password")}
                    error
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
                  <FormHelperText id="outlined-adornment-password">
                    <div className="text-red-700">
                      {errors.password?.message}
                    </div>
                  </FormHelperText>
                </FormControl>
              ) : (
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
              )}

              {errors?.confirmpassword?.message?.toString().length ? (
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    confirmpassword
                  </InputLabel>
                  <OutlinedInput
                    {...register("confirmpassword")}
                    error
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
                  <FormHelperText id="outlined-adornment-password">
                    <div className="text-red-700">
                      {errors.confirmpassword?.message}
                    </div>
                  </FormHelperText>
                </FormControl>
              ) : (
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    confirmpassword
                  </InputLabel>
                  <OutlinedInput
                    {...register("confirmpassword")}
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
                    label="confirmpassword"
                  />
                </FormControl>
              )}

              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                {/* مش عاوزه تشتغل نع ال react hook form  */}

                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="gender"
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <Button
                type="submit"
                onClick={() => {
                  router.push("/Login");
                }}
              >
                Sign up
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Signup_from;
