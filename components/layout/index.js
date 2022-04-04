import React from "react";
import BottomNav from "../bottomNav";
import Header from "../header";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { RiMessengerFill, RiMessengerLine } from "react-icons/ri";
import { HiPlusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { AiFillCompass, AiOutlineCompass } from "react-icons/ai";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Layout({ children }) {
  let icons = [
    [<AiOutlineHome />, "Home", "/"],
    [<RiMessengerLine />, "Messenger", "/messenger"],
    [<HiOutlinePlusCircle />, "Create Post", "/create-post"],
    [<AiOutlineCompass />, "Explore", "/explore"],
    [<AiOutlineHeart />, "Likes", "/likes"],
  ];
  return (
    <div>
      <Header icons={icons} />
      {children}
      <BottomNav sx={{ display: { xs: "flex", sm: "none" } }} icons={icons} />
    </div>
  );
}
