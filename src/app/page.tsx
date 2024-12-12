import Image from "next/image";
import Nav from "./components/responsive_navbar";
import Start from "./components/start";
import React from "react";

import { Strait } from "next/font/google";
export default function Home() {
  return (
    <>

      <Nav></Nav>  
      <Start/>
      
    </>
  );
}
