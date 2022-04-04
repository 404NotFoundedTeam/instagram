import { Box, Input, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Card from "../../components/Card";
import { useForm } from "react-hook-form";
import MainInput from "../../components/miniComp/MainInput";
import MyDivider from "../../components/miniComp/MyDivider";
import ButtonPrimary from "../../components/miniComp/ButtonPrimary";
import FacebookLink from "../../components/miniComp/FacebookLink";

const SignUp = () => {
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
          <Box sx={{ width: "60%", mx: "auto" }}>
            <img
              style={{ width: "100%" }}
              src="/images/text_dark.svg.png"
              alt="instagram"
            />
          </Box>
          <Typography
            sx={{
              fontWeight: "sami-bold",
              color: "#8E8E92",
              fontSize: "20px",
              textAlign: "center",
              pb: 3,
            }}
          >
            Register to see photos and videos of your friends.
          </Typography>
          <FacebookLink contained={true} />
          <MyDivider
            title={<Typography sx={{ fontSize: "18px" }}>OR</Typography>}
          />
          <Box sx={{ width: "100%" }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(submit);
              }}
            >
              <MainInput
                placeholder="Phone or Email"
                {...register("login", { required: true })}
              />
              <MainInput
                placeholder="Name and Surname"
                {...register("login", { required: true })}
              />
              <MainInput
                placeholder="User Name"
                {...register("username", { required: true })}
              />
              <MainInput
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <ButtonPrimary type={"submit"}>Sign Up</ButtonPrimary>
            </form>
          </Box>
          <Box>
            <a href="#">
              <Typography
                sx={{ fontSize: "14px", color: "#909090", textAlign: "center" }}
              >
                By registering, you agree to our Terms, Data Use Policy and
                Cookie Policy.
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
            Have account?
            <Link href={"/auth"}>
              <span style={{ color: "#0779E9", cursor: "pointer" }}>
                Sign In
              </span>
            </Link>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default SignUp;
