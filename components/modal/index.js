import * as React from "react";
import Modal from "@mui/material/Modal";
import { Box, IconButton, Zoom } from "@mui/material";
import { GrClose } from "react-icons/gr";

export default function MyModal({ children, open, setOpen }) {
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <IconButton
          color="secondary"
          onClick={() => {
            setOpen(false);
          }}
          sx={{
            position: "absolute",
            color: "#fff",
            top: "15px",
            "& svg": { color: "#fff" },
            right: "15px",
            zIndex: 33,
          }}
          size={"large"}
        >
          <GrClose />
        </IconButton>
        <Zoom in={open}>
          <Box
            sx={{
            }}
          >
            {children}
          </Box>
        </Zoom>
      </Box>
    </Modal>
  );
}
