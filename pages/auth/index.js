import { Box, FormControl, Paper } from "@mui/material";
import React from "react";
import Card from "../../components/Card";
import { useForm } from "react-hook-form";
import MainInput from "../../components/miniComp/MainInput";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data);
  };
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card>
        <form onSubmit={handleSubmit(submit)}>
          <Box sx={{ width: "100%" }}>
            <MainInput
              {...register("login", { required: true })}
              placeholder="Login"
            />
            <MainInput
              {...register("password", { required: true })}
              placeholder="Password"
            />
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default SignIn;
