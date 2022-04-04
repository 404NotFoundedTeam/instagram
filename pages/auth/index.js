import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Card from "../../components/Card";
import { useForm } from "react-hook-form";
import MainInput from "../../components/miniComp/MainInput";
import MyDivider from "../../components/miniComp/MyDivider";
import ButtonPrimary from "../../components/miniComp/ButtonPrimary";
import FacebookLink from "../../components/miniComp/FacebookLink";

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
        py: { xs: 0, sm: 5 },
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "450px", padding: 2 }}>
        <Card sx={{ mb: 3 }}>
          <Box sx={{ width: "60%", pb: 3, mx: "auto" }}>
            <img
              style={{ width: "100%" }}
              src="/images/text_dark.svg.png"
              alt="instagram"
            />
          </Box>
          <form onSubmit={handleSubmit(submit)}>
            <Box sx={{ width: "100%" }}>
              <MainInput
                {...register("login", { required: true })}
                placeholder="Phone, Username, or Email"
              />
              <MainInput
                {...register("password", { required: true })}
                placeholder="Password"
              />
              <ButtonPrimary type={"submit"}>Sign In</ButtonPrimary>
            </Box>
          </form>
          <Box>
            <MyDivider
              title={<Typography sx={{ fontSize: "18px" }}>OR</Typography>}
            />
            <FacebookLink />
            <a href="#">
              <Typography
                sx={{ fontSize: "14px", color: "#909090", textAlign: "center" }}
              >
                Forgot Password?
              </Typography>
            </a>
          </Box>
        </Card>
        <Card sx={{}}>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              fontSize: "18px",
              justifyContent: "center",
            }}
          >
            You have not accaunt?
            <Link href={"/signup"}>
              <span style={{ color: "#0779E9" }}>Sign Up</span>
            </Link>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default SignIn;
