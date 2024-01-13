import React from "react";
import Navbar from "../organisms/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <main className="grow">{children}</main>
    </div>
  );
}
