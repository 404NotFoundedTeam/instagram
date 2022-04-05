import { Box, Card, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Header from "../components/header";
import RoundImg from "../components/RoundImg";
import CustomSwiper from "../components/Swiper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsChatTextFill } from "react-icons/bs";
import { RiSendPlaneLine, RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";

export default function Home() {
  const stories = [
    <RoundImg live={true} />,
    <RoundImg />,
    <RoundImg />,
    <RoundImg />,
    <RoundImg />,
    <RoundImg />,
    <RoundImg />,
    <RoundImg />,
    <RoundImg />,
    <RoundImg />,
    <RoundImg />,
    <RoundImg />,
  ];
  return (
    <Box
      sx={{
        padding: { xs: "0 0 60px", md: "0 10px 60px" },
        maxWidth: "991px",
        margin: "0 auto",
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item sx={{ marginTop: { xs: 0, md: "20px" } }} xs={12} md={8}>
          <Card
            sx={{
              padding: "20px 5px 5px",
              overflow: "hidden",
              borderRadius: { xs: 0, md: "5px" },
              boxShadow: "0px 0px 0 1px rgba(17, 17, 26, 0.1)",
            }}
            elevation={0}
          >
            <CustomSwiper items={stories} count={10} />
          </Card>
          <Card
            sx={{
              marginTop: { xs: 0, md: "20px" },
              boxShadow: "0px 0px 0 1px rgba(17, 17, 26, 0.1)",
              borderRadius: { xs: 0, md: "5px" },
            }}
            elevation={0}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ padding: "11px 10px" }}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <RoundImg size={40} isBorder={false} />
                <Box>
                  <Typography fontSize={13} fontWeight="bold">
                    Jon
                  </Typography>
                  <Typography fontSize={11}>Tokyo, Japan</Typography>
                </Box>
              </Stack>
              <MoreHorizIcon />
            </Stack>
            <img
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              style={{ width: "100%", height: "375px", objectFit: "cover" }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: "11px 10px",
                fontSize: "24px",
              }}
            >
              <Stack direction="row" alignItems="center" gap={2}>
                <AiOutlineHeart />
                <BsChat />
                <RiSendPlaneLine />
              </Stack>
              <FaRegBookmark />
            </Stack>

            <Box
              sx={{
                padding: "11px 10px",
              }}
            >
              <Stack
                sx={{ marginBottom: "10px" }}
                direction="row"
                alignItems="center"
                gap={1}
              >
                <img src="/images/oval.png" alt="" />
                Liked by craig_love and 44,686 others
              </Stack>
              <Typography>
                joshua_l The game in Japan was amazing and I want to share some
                photos
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          sx={{
            marginTop: { md: "20px" },
            display: { xs: "none", md: "block" },
          }}
          xs={12}
          sm={4}
        >
          <Box sx={{ padding: "0 5px" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                padding: "20px 5px 5px",
                borderRadius: { xs: 0, md: "5px" },
              }}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <RoundImg borderColor="gray" />
                <div>
                  <Typography fontSize={13} fontWeight="bold">
                    John
                  </Typography>
                  <Typography fontSize={11}>john</Typography>
                </div>
              </Stack>
              <Typography color="#3897F0" fontSize={13} fontWeight="bold">
                switch
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              sx={{
                padding: "0px 5px 5px",
                marginTop: "20px",
                borderRadius: { xs: 0, md: "5px" },
              }}
            >
              <Typography fontSize={11} color="gray">
                All suggestions for you
              </Typography>
              <Typography fontSize={11} fontWeight="bold">
                see all
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                padding: "0px 5px 5px",
                borderRadius: { xs: 0, md: "5px" },
              }}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <RoundImg size={40} isBorder={false} borderColor="gray" />
                <div>
                  <Typography fontSize={13} fontWeight="bold">
                    John
                  </Typography>
                  <Typography fontSize={11}>john</Typography>
                </div>
              </Stack>
              <Typography color="#3897F0" fontSize={13} fontWeight="bold">
                follow
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                padding: "0px 5px 5px",
                borderRadius: { xs: 0, md: "5px" },
              }}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <RoundImg size={40} isBorder={false} borderColor="gray" />
                <div>
                  <Typography fontSize={13} fontWeight="bold">
                    John
                  </Typography>
                  <Typography fontSize={11}>john</Typography>
                </div>
              </Stack>
              <Typography color="#3897F0" fontSize={13} fontWeight="bold">
                follow
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
