import React from "react";
import BottomNav from "../bottomNav";
import Header from "../header";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { RiMessengerFill, RiMessengerLine } from "react-icons/ri";
import { HiPlusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { AiFillCompass, AiOutlineCompass } from "react-icons/ai";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const show =
    router.pathname === "/auth" || router.pathname === "/auth/signUp";

  let icons = [
    [<AiOutlineHome />, "Home", "/"],
    [<RiMessengerLine />, "Messenger", "/messenger"],
    [<HiOutlinePlusCircle />, "Create Post", "/create-post"],
    [<AiOutlineCompass />, "Explore", "/explore"],
    [<AiOutlineHeart />, "Likes", "/likes"],
  ];
  icons.forEach(([icon, text, path], i, arr) => {
    if (router.pathname.startsWith(path) && router.pathname === "/") {
      arr[i][0] = <AiFillHome />;
    }
    if (router.pathname.startsWith(path) && text === "Messenger") {
      arr[i][0] = <RiMessengerFill />;
    }
    if (router.pathname.startsWith(path) && text === "Explore") {
      arr[i][0] = <AiFillCompass />;
    }
    if (router.pathname.startsWith(path) && text === "Likes") {
      arr[i][0] = <AiFillHeart />;
    }
  });
  return (
    <div>
      {!show && <Header icons={icons} />}
      {children}
      {!show && (
        <BottomNav sx={{ display: { xs: "flex", sm: "none" } }} icons={icons} />
      )}
    </div>
  );
}
