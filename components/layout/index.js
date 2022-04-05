import React from "react";
import BottomNav from "../bottomNav";
import Header from "../header";

import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const show =
    router.pathname === "/auth" || router.pathname === "/auth/signUp";

  return (
    <div>
      {!show && <Header />}
      {children}
      {!show && <BottomNav sx={{ display: { xs: "flex", sm: "none" } }} />}
    </div>
  );
}
