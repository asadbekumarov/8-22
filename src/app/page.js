"use client";

import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// import { Main } from "next/document";
import React from "react";

function Home() {
  const route = useRouter();
  // if (!localStorage.getItem("accessToken")) {
  //   route.push("/login");
  // }
  return (
    <div>
      <Main />
    </div>
  );
}

export default Home;
