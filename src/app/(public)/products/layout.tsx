import React from "react";
import { Sidebar } from "./components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="px-2">{children}</div>
    </>
  );
}
