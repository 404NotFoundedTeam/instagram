import React from "react";
import BottomNav from "../bottomNav";
import Header from "../header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <BottomNav />
    </div>
  );
}
